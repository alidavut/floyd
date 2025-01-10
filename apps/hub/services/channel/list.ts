import { ChannelObject } from '@floyd/schema/types';
import { createService } from 'services/service';

export default createService({
  async perform({ contextMap, axios }) {
    const { data }: { data: ChannelObject[] } = await axios.get('/channels');
    contextMap.channels.put(data);
    return data;
  }
});
