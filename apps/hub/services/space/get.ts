import { InputError } from '../errors';
import { createService } from '../service';
import { SpaceObject } from '@floyd/schema/types';
import { space } from '@floyd/schema/inputs';

export default createService({
  inputSchema: space.getSchema,

  async perform({ input, contextMap, axios }) {
    try {
      const { data }: { data: SpaceObject } = await axios.get(`/spaces/${input.id}`);
      contextMap.spaces.put(data);
      return data;
    } catch (error) {
      throw new InputError(error.response.data.errors);
    }
  }
});
