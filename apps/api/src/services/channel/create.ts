import { MembershipRole } from '@floyd/schema/constants';
import { channel } from '@floyd/schema/inputs';
import { Membership, Channel } from 'entities';
import { createHTTPService } from 'services/service';
import { ChannelSerializer } from './serializer';

export default createHTTPService({
  id: 'channel.create',
  inputSchema: channel.createSchema,

  async authorize({ auth }) {
    return auth.ok;
  },

  async perform({ input, auth }) {
    const channel = Channel.create({
      ...input,
      currencyCode: 'USD'
    });

    await channel.save();

    const membership = Membership.create({
      role: MembershipRole.ADMIN,
      userId: auth.user.id,
      channelId: channel.id
    });

    await membership.save();

    return ChannelSerializer.serialize(channel, auth);
  }
});
