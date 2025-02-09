import { InputError } from '../errors';
import { createService } from '../service';
import { channel } from '@floyd/schema/inputs';

export default createService({
  inputSchema: channel.setupStripeSchema,

  async perform({ input, axios }) {
    try {
      const url = `/channels/${input.channelId}/stripe/setup`;
      const { data }: { data: { url: string } } = await axios.post(url, input);
      return data;
    } catch (error) {
      throw new InputError(error.response.data.errors);
    }
  }
});
