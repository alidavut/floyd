import { createHTTPService } from '../service';
import { User } from 'entities';
import { hashPassword } from 'lib/security';
import { unique } from 'lib/validations';
import { user } from '@floyd/schema/inputs';
import { AuthSerializer } from 'services/auth/serializer';

export default createHTTPService({
  id: 'user.create',
  inputSchema: user.createSchema.superRefine(unique(User, ['email'])),

  async perform({ input, auth }) {
    const user = User.create({
      email: input.email,
      password: await hashPassword(input.password),
      firstName: input.firstName,
      lastName: input.lastName
    });

    await user.save();

    auth.user = user;

    return AuthSerializer.serialize(auth, auth);
  }
});