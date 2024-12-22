import { createService } from 'services/service';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default createService({
  id: 'email.send',
  inputSchema: z.object({
    from: z.string().email().toLowerCase().optional(),
    email: z.string().email().toLowerCase(),
    subject: z.string(),
    body: z.string()
  }),

  async perform({ input }) {
    const { from, email, subject, body } = input;

    await resend.emails.send({
      from: from || 'Floyd <no-reply@mail.floyd.so>',
      to: email,
      subject: subject,
      html: body
    });
  }
});
