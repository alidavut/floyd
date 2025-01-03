import { InputError } from '../errors';
import { createService } from '../service';
import { SessionObject } from '@floyd/schema/types';
import { session } from '@floyd/schema/inputs';

export default createService({
  inputSchema: session.createSchema,

  async perform({ input, contextMap, axios }) {
    try {
      const { data }: { data: SessionObject } = await axios.post('/sessions', input);
      contextMap.sessions.put(data);
      return data;
    } catch (error) {
      throw new InputError(error.response.data.errors);
    }
  }
});
