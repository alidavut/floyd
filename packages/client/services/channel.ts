import { channel } from '@floyd/schema/inputs';
import { ChannelObject } from '@floyd/schema/types';
import { Axios } from 'axios';

export function createChannelService(axios: Axios) {
  return {
    async create(input: channel.createParams): Promise<ChannelObject> {
      const { data } = await axios.post('/channels', input);
      return data;
    },
    async get(input: channel.getParams): Promise<ChannelObject> {
      const { data } = await axios.get(`/channels/${input.id}`);
      return data;
    },
    async list(): Promise<ChannelObject[]> {
      const { data } = await axios.get('/channels');
      return data;
    }
  }
}
