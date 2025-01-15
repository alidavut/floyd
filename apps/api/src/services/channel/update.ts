import { Membership, Channel } from 'entities';
import { ChannelSerializer } from './serializer';
import { createHTTPService } from 'services/service';
import { channel } from '@floyd/schema/inputs';

export default createHTTPService({
  id: 'channel.update',
  inputSchema: channel.updateSchema,

  async authorize({ input, auth }) {
    return auth.ok && Membership.existsBy({ channelId: input.id, userId: auth.user.id });
  },

  async perform({ input, auth }) {
    const channel = await Channel.findOneBy({ id: input.id });

    channel.set(input);

    await channel.save();

    return ChannelSerializer.serialize(channel, auth);
  }
});
