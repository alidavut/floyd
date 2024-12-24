import { createOTP } from 'lib/security';
import { createHTTPService } from '../service';
import { auth } from '@floyd/schema/inputs';
import services from 'services';

export default createHTTPService({
  id: 'auth.send_otp',
  inputSchema: auth.sendOtpSchema,

  async perform({ input }) {
    const { password, key } = createOTP({ email: input.email });

    await services.email.sendOtp({ email: input.email, password });

    return { key };
  }
});
