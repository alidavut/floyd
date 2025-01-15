import { Channel } from 'entities';
import { ChannelSerializer } from './serializer';
import { createHTTPService } from 'services/service';

export default createHTTPService({
  id: 'channel.list',

  async authorize({ auth }) {
    return auth.ok;
  },

  async perform({ auth }) {
    const channels = await Channel.find({
      where: { memberships: { userId: auth.user.id } },
      relations: ['memberships']
    });

    return ChannelSerializer.serializeArray(channels, auth);
  }
});
