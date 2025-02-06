import { createToken, TokenType } from 'lib/security';
import { generateStudioUrl } from 'lib/url';
import { email } from 'services/email';
import { createHTTPService } from 'services/service';

export default createHTTPService({
  id: 'user.send_email_verification',

  async authorize({ auth }) {
    return auth.ok;
  },

  async perform({ auth }) {
    const token = createToken(
      TokenType.EMAIL_VERIFICATION_TOKEN, { id: auth.user.id, email: auth.user.email }, { expiresIn: 60 * 60 * 3 }
    );

    const url = generateStudioUrl(`/verify-email/${token}`);

    await email.sendVerification({
      email: auth.user.email,
      firstName: auth.user.firstName,
      url
    });
  }
});
