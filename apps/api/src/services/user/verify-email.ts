import { user } from '@floyd/schema/inputs';
import { User } from 'entities';
import { decodeToken, TokenType } from 'lib/security';
import { ServiceError } from 'services/errors';
import { createHTTPService } from 'services/service';

export default createHTTPService({
  id: 'user.verify_email',

  inputSchema: user.verifyEmailSchema,

  async perform({ input }) {
    const data = await decodeToken<{ id: string, email: string }>(TokenType.EMAIL_VERIFICATION_TOKEN, input.token);

    if (!data) throw new ServiceError('Invalid token');

    const user = await User.findOneBy({ id: data.id });
    user.email = data.email;
    user.emailVerified = true;
    await user.save();
  }
})
