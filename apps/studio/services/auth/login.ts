import { ServiceError } from '../errors';
import { services } from 'services';
import { createService } from 'services/service';
import { auth } from '@floyd/schema/inputs';

export default createService({
  inputSchema: auth.createSchema,

  async perform({ input, storeMap, axios }) {
    try {
      const { data } = await axios.post('/auth', input);
      storeMap?.users.context('global').put(data.user);
      await services.auth.set({ accessToken: data.accessToken });
    } catch (error) {
      throw new ServiceError(error.response.data.error);
    }
  }
});
