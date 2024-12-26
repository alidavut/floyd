import { User } from 'entities';
import { createHTTPService } from '../service';
import { UserSerializer } from './serializer';
import { user } from '@floyd/schema/inputs';
import { FindOptionsWhere } from 'typeorm';

export default createHTTPService({
  id: 'user.get',
  inputSchema: user.getSchema,

  async authorize({ input, auth }) {
    return input.id !== 'me' || auth.ok;
  },

  async perform({ input, auth }) {
    const query: FindOptionsWhere<User> = {};

    if (input.id === 'me') {
      query.id = auth.user.id;
    } else {
      query.handle = input.id;
    }

    const user = await User.findOneByOrFail(query);

    return UserSerializer.serialize(user, auth);
  }
});
