import { event } from '@floyd/schema/inputs';
import { EventObject } from '@floyd/schema/types';
import { createService } from 'services/service';

export default createService({
  inputSchema: event.listSchema,

  async perform({ input, contextMap, axios }) {
    const { data }: { data: EventObject[] } = await axios.get('/events', { params: input });
    contextMap.events.put(data);
    return data;
  }
});
