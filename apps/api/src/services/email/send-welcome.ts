import { createService } from 'services/service';
import { z } from 'zod';
import send from './send';
import { renderWelcomeEmail } from 'emails';

export default createService({
  id: 'email.send_welcome',
  inputSchema: z.object({
    email: z.string().email().toLowerCase(),
    firstName: z.string()
  }),

  async perform({ input }) {
    await send({
      email: input.email,
      subject: 'Welcome to Floyd 🎉',
      body: await renderWelcomeEmail({ firstName: input.firstName })
    });
  }
});
