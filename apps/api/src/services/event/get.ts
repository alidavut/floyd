import { Event } from 'entities';
import { createHTTPService } from 'services/service';
import { event } from '@floyd/schema/inputs';
import { EventSerializer } from './serializer';

export default createHTTPService({
  id: 'event.get',

  inputSchema: event.getSchema,

  async perform({ input, auth }) {
    const event = await Event.findOneBy({ id: input.id });
    return EventSerializer.serialize(event, auth);
  }
});
