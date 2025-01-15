import { InputError } from '../errors';
import { createService } from '../service';
import { EventObject } from '@floyd/schema/types';
import { event } from '@floyd/schema/inputs';

export default createService({
  inputSchema: event.createSchema,

  async perform({ input, contextMap, axios }) {
    try {
      const { data }: { data: EventObject } = await axios.post('/events', input);
      contextMap.events.put(data);
      return data;
    } catch (error) {
      throw new InputError(error.response.data.errors);
    }
  }
});
