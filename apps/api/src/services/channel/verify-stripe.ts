import { Channel, Membership } from 'entities';
import { createHTTPService } from 'services/service';
import { channel } from '@floyd/schema/inputs';
import { stripe } from 'lib/stripe';
import { ChannelSerializer } from './serializer';

export default createHTTPService({
  id: 'channel.verify_stripe',

  inputSchema: channel.verifyStripeSchema,

  async authorize({ input, auth }) {
    return auth.ok && Membership.existsBy({ channelId: input.channelId, userId: auth.user.id });
  },

  async perform({ input, auth }) {
    const channel = await Channel.findOneByOrFail({ id: input.channelId });

    const account = await stripe.accounts.retrieve(channel.stripeAccountId);

    if (account.details_submitted && account.charges_enabled && account.payouts_enabled) {
      channel.stripeEnabled = true;
    } else {
      channel.stripeEnabled = false;
    }

    await channel.save();

    return await ChannelSerializer.serialize(channel, auth);
  }
});
