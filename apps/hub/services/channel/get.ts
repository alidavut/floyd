import { InputError } from '../errors';
import { createService } from '../service';
import { ChannelObject } from '@floyd/schema/types';
import { channel } from '@floyd/schema/inputs';

export default createService({
  inputSchema: channel.getSchema,

  async perform({ input, contextMap, axios }) {
    try {
      const { data }: { data: ChannelObject } = await axios.get(`/channels/${input.id}`);
      contextMap.channels.put(data);
      return data;
    } catch (error) {
      throw new InputError(error.response.data.errors);
    }
  }
});
