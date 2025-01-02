import { Membership, Space } from 'entities';
import { SpaceSerializer } from './serializer';
import { createHTTPService } from 'services/service';
import { space } from '@floyd/schema/inputs';

export default createHTTPService({
  id: 'space.update',
  inputSchema: space.updateSchema,

  async authorize({ input, auth }) {
    return auth.ok && Membership.existsBy({ spaceId: input.id, userId: auth.user.id });
  },

  async perform({ input, auth }) {
    const space = await Space.findOneBy({ id: input.id });

    space.set(input);

    await space.save();

    return SpaceSerializer.serialize(space, auth);
  }
});
