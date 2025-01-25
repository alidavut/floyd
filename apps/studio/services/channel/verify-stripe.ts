import { ChannelObject } from '@floyd/schema/types';
import { InputError } from '../errors';
import { createService } from '../service';
import { channel } from '@floyd/schema/inputs';

export default createService({
  inputSchema: channel.verifyStripeSchema,

  async perform({ input, contextMap, axios }) {
    try {
      const { data }: { data: ChannelObject } = await axios.post(`/channels/${input.channelId}/verify_stripe`);
      contextMap.channels.put(data);
      return data;
    } catch (error) {
      throw new InputError(error.response.data.errors);
    }
  }
});
