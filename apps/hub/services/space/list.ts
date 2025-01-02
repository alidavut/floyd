import { SpaceObject } from '@floyd/schema/types';
import { createService } from 'services/service';

export default createService({
  async perform({ contextMap, axios }) {
    const { data }: { data: SpaceObject[] } = await axios.get('/spaces');
    contextMap.spaces.put(data);
    return data;
  }
});
