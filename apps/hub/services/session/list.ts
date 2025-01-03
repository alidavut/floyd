import { session } from '@floyd/schema/inputs';
import { SessionObject } from '@floyd/schema/types';
import { createService } from 'services/service';

export default createService({
  inputSchema: session.listSchema,

  async perform({ input, contextMap, axios }) {
    const { data }: { data: SessionObject[] } = await axios.get('/sessions', { params: input });
    contextMap.sessions.put(data);
    return data;
  }
});
