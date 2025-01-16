import { InputError } from '../errors';
import { createService } from '../service';
import { file } from '@floyd/schema/inputs';

export default createService({
  inputSchema: file.generateSignedUrlSchema,

  async perform({ input, axios }) {
    try {
      const { data } = await axios.post('/files/signed-url', input);
      return data as { url: string, key: string };
    } catch (error) {
      throw new InputError(error.response.data.errors);
    }
  }
});
