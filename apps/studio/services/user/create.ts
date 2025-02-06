import { InputError } from '../errors';
import { createService } from '../service';
import { services } from 'services';
import { user } from '@floyd/schema/inputs';

export default createService({
  inputSchema: user.createSchema,

  async perform({ input, storeMap, axios }) {
    try {
      const { data } = await axios.post('/users', input);
      storeMap?.users.context('global').put(data.user);
      await services.auth.set({ accessToken: data.accessToken });
    } catch (error) {
      throw new InputError(error.response.data.errors);
    }
  }
});
