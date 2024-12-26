import * as inputs from '@floyd/schema/inputs';
import { Service } from './service';

export class AuthService extends Service {
  create(input: inputs.auth.createParams) {
    return this.axios.post('/auth', input);
  }
}
