import { InputError } from '../errors';
import { createService } from '../service';
import { channel } from '@floyd/schema/inputs';

export default createService({
  inputSchema: channel.setupStripeSchema,

  async perform({ input, axios }) {
    try {
      const { data }: { data: { url: string } } = await axios.post(`/channels/${input.channelId}/stripe/setup`);
      return data;
    } catch (error) {
      throw new InputError(error.response.data.errors);
    }
  }
});
