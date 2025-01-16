import { event } from '@floyd/schema/inputs';
import { Service } from './service';
import { EventObject } from '@floyd/schema/types';

export class EventService extends Service {
  async get(input: event.getParams): Promise<EventObject> {
    const { data } = await this.axios.get(`/events/${input.id}`);
    return data;
  }

  async list(input: event.listParams): Promise<EventObject[]> {
    const { data } = await this.axios.get('/events', { params: input });
    return data;
  }
}
