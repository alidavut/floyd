import { InputError } from '../errors';
import { createService } from '../service';
import { auth } from '@floyd/schema/inputs';

export default createService({
  inputSchema: auth.sendOtpSchema,

  async perform({ input, axios }) {
    try {
      const { data } = await axios.post('/auth/send_otp', input);
      return data as { key: string };
    } catch (error) {
      throw new InputError(error.response.data.errors);
    }
  }
});
