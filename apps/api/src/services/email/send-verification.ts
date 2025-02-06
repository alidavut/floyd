import { createService } from 'services/service';
import { z } from 'zod';
import send from './send';
import { renderVerificationEmail } from 'emails';

export default createService({
  id: 'email.send_verification',
  inputSchema: z.object({
    email: z.string().email().toLowerCase(),
    firstName: z.string(),
    url: z.string()
  }),

  async perform({ input }) {
    await send({
      email: input.email,
      subject: 'Verify your email address',
      body: await renderVerificationEmail({ firstName: input.firstName, url: input.url })
    });
  }
});
