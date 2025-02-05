import { createService } from 'services/service';
import clientCookie from 'js-cookie';
import { z } from 'zod';

export default createService({
  inputSchema: z.object({
    accessToken: z.string()
  }),

  async perform({ input }) {
    clientCookie.set('access_token', input.accessToken, { expires: 7, secure: location.protocol === 'https:' });
  }
});
