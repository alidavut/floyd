import { session } from '@floyd/schema/inputs';
import { Service } from './service';
import { SessionObject } from '@floyd/schema/types';

export class SessionService extends Service {
  async list(input: session.listParams): Promise<SessionObject[]> {
    const { data } = await this.axios.get('/sessions', { params: input });
    return data;
  }
}
