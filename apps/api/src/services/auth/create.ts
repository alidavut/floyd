import { createHTTPService } from '../service';
import { User } from 'entities';
import { comparePassword } from 'lib/security';
import { auth } from '@floyd/schema/inputs';
import { AuthorizationError } from '../errors';
import { AuthSerializer } from './serializer';
import { Auth } from 'services/auth';

export default createHTTPService({
  id: 'auth.create',
  inputSchema: auth.createSchema,

  async perform({ input }) {
    const user = await User.findOneBy({ email: input.email });

    if (user && await comparePassword(input.password, user.password)) {
      const auth = await Auth.create({ user });
      return AuthSerializer.serialize(auth, auth);
    } else {
      throw new AuthorizationError('Invalid email or password');
    }
  }
});
