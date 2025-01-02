import { space } from '@floyd/schema/inputs';
import { Service } from './service';
import { SpaceObject } from '@floyd/schema/types';

export class SpaceService extends Service {
  async create(input: space.createParams): Promise<SpaceObject> {
    const { data } = await this.axios.post('/spaces', input);
    return data;
  }

  async get(input: space.getParams): Promise<SpaceObject> {
    const { data } = await this.axios.get(`/spaces/${input.id}`);
    return data;
  }

  async list(): Promise<SpaceObject[]> {
    const { data } = await this.axios.get('/spaces');
    return data;
  }
}
