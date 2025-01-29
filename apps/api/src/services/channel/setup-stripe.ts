import { Channel, Membership } from 'entities';
import { createHTTPService } from 'services/service';
import { channel } from '@floyd/schema/inputs';
import { stripe } from 'lib/stripe';
import { generateStudioUrl } from 'lib/url';

export default createHTTPService({
  id: 'channel.setup_stripe',

  inputSchema: channel.setupStripeSchema,

  async authorize({ input, auth }) {
    return auth.ok && Membership.existsBy({ channelId: input.channelId, userId: auth.user.id });
  },

  async perform({ input }) {
    const channel = await Channel.findOneByOrFail({ id: input.channelId });

    if (!channel.stripeId) {
      const account = await stripe.accounts.create({
        type: 'express',
        capabilities: {
          card_payments: { requested: true }
        }
      });

      channel.stripeId = account.id;

      await channel.save();
    }

    const accountLink = await stripe.accountLinks.create({
      account: channel.stripeId,
      refresh_url: generateStudioUrl(`/channels/${channel.id}/stripe/setup`),
      return_url: generateStudioUrl(`/channels/${channel.id}/stripe/verify`),
      type: 'account_onboarding'
    });

    return { url: accountLink.url };
  }
});
