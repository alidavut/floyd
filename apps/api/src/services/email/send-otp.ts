import { createService } from 'services/service';
import { z } from 'zod';
import send from './send';
import { renderOTPEmail } from 'emails';

export default createService({
  id: 'email.send_otp',
  inputSchema: z.object({
    email: z.string().email().toLowerCase(),
    password: z.number()
  }),

  async perform({ input }) {
    await send({
      email: input.email,
      subject: `${input.password} is your Floyd verification code`,
      body: await renderOTPEmail({ password: input.password })
    });
  }
});
