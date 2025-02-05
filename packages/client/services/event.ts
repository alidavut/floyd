import { event } from '@floyd/schema/inputs';
import { EventObject } from '@floyd/schema/types';
import { Axios } from 'axios';

export function createEventService(axios: Axios) {
  return {
    async get(input: event.getParams): Promise<EventObject> {
      const { data } = await axios.get(`/events/${input.id}`);
      return data;
    },
    async list(input: event.listParams): Promise<EventObject[]> {
      const { data } = await axios.get('/events', { params: input });
      return data;
    }
  }
}
