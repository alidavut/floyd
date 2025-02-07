import { Channel, Membership } from 'entities';
import { createHTTPService } from 'services/service';
import { channel } from '@floyd/schema/inputs';
import { stripe } from 'lib/stripe';
import { generateStudioUrl } from 'lib/url';

export default createHTTPService({
  id: 'channel.setup_stripe',

  inputSchema: channel.setupStripeSchema,

  async authorize({ input, auth }) {
    return auth.ok && auth.user.emailVerified &&
      await Membership.existsBy({ channelId: input.channelId, userId: auth.user.id });
  },

  async perform({ input }) {
    const channel = await Channel.findOneByOrFail({ id: input.channelId });

    if (!channel.stripeAccountId) {
      const account = await stripe.accounts.create({
        type: 'express',
        country: input.countryCode,
        capabilities: {
          transfers: { requested: true }
        },
        tos_acceptance: {
          service_agreement: input.countryCode === 'US' ? 'full' : 'recipient'
        }
      });

      channel.countryCode = input.countryCode;
      channel.stripeAccountId = account.id;

      await channel.save();
    }

    const accountLink = await stripe.accountLinks.create({
      account: channel.stripeAccountId,
      refresh_url: generateStudioUrl(`/channels/${channel.id}`),
      return_url: generateStudioUrl(`/channels/${channel.id}/stripe/verify`),
      type: 'account_onboarding'
    });

    return { url: accountLink.url };
  }
});
