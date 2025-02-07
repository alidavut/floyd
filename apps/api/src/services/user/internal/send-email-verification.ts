import { createToken, TokenType } from 'lib/security';
import { generateStudioUrl } from 'lib/url';
import { email } from 'services/email';
import { createService } from 'services/service';
import { z } from 'zod';

export default createService({
  id: 'user.internal.send_email_verification',

  inputSchema: z.object({
    userId: z.string(),
    firstName: z.string(),
    email: z.string()
  }),

  async perform({ input }) {
    const token = createToken(
      TokenType.EMAIL_VERIFICATION_TOKEN, { id: input.userId, email: input.email }, { expiresIn: 60 * 60 * 3 }
    );

    const url = generateStudioUrl(`/verify-email/${token}`);

    await email.sendVerification({
      email: input.email,
      firstName: input.firstName,
      url
    });
  }
});
