import { Space } from 'entities';
import { SpaceSerializer } from './serializer';
import { createHTTPService } from 'services/service';
import { space } from '@floyd/schema/inputs';
import { FindOneOptions } from 'typeorm';
import { z } from 'zod';

export default createHTTPService({
  id: 'space.get',
  inputSchema: space.getSchema,

  async perform({ input, auth }) {
    const query: FindOneOptions<Space> = {};

    if (z.string().uuid().safeParse(input.id).success) {
      query.where = { id: input.id };
    } else {
      query.where = { handle: input.id };
    }

    const space = await Space.findOneOrFail(query);
    return SpaceSerializer.serialize(space, auth);
  }
});
