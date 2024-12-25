import * as inputs from '@floyd/schema/inputs';
import { Service } from './service';
import { UserObject } from '@floyd/schema/types';

export class UserService extends Service {
  create(input: inputs.user.createParams) {
    return this.axios.post('/users', input);
  }

  async get(input: inputs.user.getParams): Promise<UserObject> {
    const { data } = await this.axios.get(`/users/${input.id}`);
    return data;
  }
}
