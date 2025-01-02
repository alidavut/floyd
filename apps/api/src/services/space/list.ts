import { Space } from 'entities';
import { SpaceSerializer } from './serializer';
import { createHTTPService } from 'services/service';

export default createHTTPService({
  id: 'space.list',

  async authorize({ auth }) {
    return auth.ok;
  },

  async perform({ auth }) {
    const spaces = await Space.find({
      where: { memberships: { userId: auth.user.id } },
      relations: ['memberships']
    });

    return SpaceSerializer.serializeArray(spaces, auth);
  }
});
