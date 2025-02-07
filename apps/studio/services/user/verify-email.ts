import { InputError } from '../errors';
import { createService } from '../service';
import { user } from '@floyd/schema/inputs';

export default createService({
  inputSchema: user.verifyEmailSchema,

  async perform({ input, axios }) {
    try {
      await axios.post('/users/verify-email', input);
    } catch (error) {
      throw new InputError(error.response.data.errors);
    }
  }
});
