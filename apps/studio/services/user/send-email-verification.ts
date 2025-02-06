import { InputError } from '../errors';
import { createService } from '../service';

export default createService({
  async perform({ input, axios }) {
    try {
      await axios.post('/users/send-email-verification', input);
    } catch (error) {
      throw new InputError(error.response.data.errors);
    }
  }
});
