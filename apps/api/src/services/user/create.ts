import { createHTTPService } from '../service';
import { User } from 'entities';
import { hashPassword } from 'lib/security';
import { unique } from 'lib/validations';
import { user } from '@floyd/schema/inputs';
import { AuthSerializer } from 'services/auth/serializer';
import { email } from 'services/email';
import reservedHandles from 'lib/data/reserved-handles.json';
import { includes } from 'lodash';

export default createHTTPService({
  id: 'user.create',
  inputSchema: user.createSchema
    .superRefine(unique(User, ['email']))
    .superRefine(unique(User, ['handle']))
    .refine((input) => !reservedHandles.includes(input.handle), {
      message: 'Handle is not available, please choose another',
      path: ['handle']
    }),

  async perform({ input, auth }) {
    const user = User.create({
      handle: input.handle,
      email: input.email,
      password: await hashPassword(input.password),
      firstName: input.firstName,
      lastName: input.lastName
    });

    await user.save();

    auth.user = user;

    email.sendWelcome({
      email: user.email,
      firstName: user.firstName
    });

    return AuthSerializer.serialize(auth, auth);
  }
});
