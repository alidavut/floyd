import { auth } from '@floyd/schema/inputs';
import { AuthObject } from '@floyd/schema/types';
import { Axios } from 'axios';

export function createAuthService(axios: Axios) {
  return {
    async create(input: auth.createParams): Promise<AuthObject> {
      const { data } = await axios.post('/auth', input);
      return data;
    }
  }
}
