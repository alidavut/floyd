import { createService } from 'services/service';
import { z } from 'zod';
import { ServerClient } from 'postmark';

const client = new ServerClient(process.env.POSTMARK_API_KEY);

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

    await client.sendEmail({
      From: from || 'Floyd <no-reply@floyd.so>',
      To: email,
      Subject: subject,
      HtmlBody: body
    });
  }
});
