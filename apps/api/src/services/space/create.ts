import { MembershipRole } from '@floyd/schema/enums';
import { space } from '@floyd/schema/inputs';
import { Membership, Space } from 'entities';
import { createHTTPService } from 'services/service';
import { SpaceSerializer } from './serializer';
import { unique } from 'lib/validations';

export default createHTTPService({
  id: 'space.create',
  inputSchema: space.createSchema
    .superRefine(unique(Space, ['handle'])),

  async authorize({ auth }) {
    return auth.ok;
  },

  async perform({ input, auth }) {
    const space = Space.create({ ...input });
    await space.save();

    const membership = Membership.create({
      role: MembershipRole.ADMIN,
      userId: auth.user.id,
      spaceId: space.id
    });

    await membership.save();

    return SpaceSerializer.serialize(space, auth);
  }
});
