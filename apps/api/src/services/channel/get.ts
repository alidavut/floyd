import { Channel } from 'entities';
import { ChannelSerializer } from './serializer';
import { createHTTPService } from 'services/service';
import { channel } from '@floyd/schema/inputs';
import { FindOneOptions } from 'typeorm';
import { z } from 'zod';

export default createHTTPService({
  id: 'channel.get',
  inputSchema: channel.getSchema,

  async perform({ input, auth }) {
    const query: FindOneOptions<Channel> = {};

    if (z.string().uuid().safeParse(input.id).success) {
      query.where = { id: input.id };
    } else {
      query.where = { handle: input.id };
    }

    const channel = await Channel.findOneOrFail(query);
    return ChannelSerializer.serialize(channel, auth);
  }
});
