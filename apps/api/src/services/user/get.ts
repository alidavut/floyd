import { createHTTPService } from '../service';
import { UserSerializer } from './serializer';
import { user } from '@floyd/schema/inputs';

export default createHTTPService({
  id: 'user.get',
  inputSchema: user.getSchema,

  async authorize({ auth }) {
    return auth.ok;
  },

  async perform({ auth }) {
    return UserSerializer.serialize(auth.user, auth);
  }
});
