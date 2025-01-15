import { channel } from '@floyd/schema/inputs';
import { Service } from './service';
import { ChannelObject } from '@floyd/schema/types';

export class ChannelService extends Service {
  async create(input: channel.createParams): Promise<ChannelObject> {
    const { data } = await this.axios.post('/channels', input);
    return data;
  }

  async get(input: channel.getParams): Promise<ChannelObject> {
    const { data } = await this.axios.get(`/channels/${input.id}`);
    return data;
  }

  async list(): Promise<ChannelObject[]> {
    const { data } = await this.axios.get('/channels');
    return data;
  }
}
