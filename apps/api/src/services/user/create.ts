import { createHTTPService } from '../service';
import { User } from 'entities';
import { compareOTP, hashPassword } from 'lib/security';
import { unique } from 'lib/validations';
import { user } from '@floyd/schema/inputs';
import { AuthSerializer } from 'services/auth/serializer';
import { email } from 'services/email';
import { InputError } from 'services/errors';

export default createHTTPService({
  id: 'user.create',
  inputSchema: user.createSchema
    .superRefine(unique(User, ['email'])),

  async perform({ input, auth }) {
    // if (!input.otpKey) {
    //   throw new InputError([{ message: 'OTP key is required', path: ['otpKey'], code: 'custom' }]);
    // }

    // if (!(await compareOTP(input.otpKey, input.otpCode, { email: input.email }))) {
    //   throw new InputError([{ message: 'Invalid code', path: ['otpCode'], code: 'custom' }]);
    // }

    const user = User.create({
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
