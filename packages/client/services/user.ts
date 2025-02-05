import { user } from '@floyd/schema/inputs';
import { AuthObject, UserObject } from '@floyd/schema/types';
import { Axios } from 'axios';

export function createUserService(axios: Axios) {
  return {
    async create(input: user.createParams): Promise<AuthObject> {
      const { data } = await axios.post('/users', input);
      return data;
    },
    async get(input: user.getParams): Promise<UserObject> {
      const { data } = await axios.get(`/users/${input.id}`);
      return data;
    }
  }
}
