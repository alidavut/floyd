import { Event } from 'entities';
import { createHTTPService } from 'services/service';
import { event } from '@floyd/schema/inputs';
import { EventSerializer } from './serializer';

export default createHTTPService({
  id: 'event.get',

  inputSchema: event.getSchema,

  async perform({ input, auth }) {
    if (input.id.includes('::')) {
      const [spaceId, slug] = input.id.split('::');
      const event = await Event.findOneByOrFail({ spaceId, slug });

      return EventSerializer.serialize(event, auth);
    } else {
      const event = await Event.findOneByOrFail({ id: input.id });

      return EventSerializer.serialize(event, auth);
    }
  }
});
