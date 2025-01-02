import { Event } from 'entities';
import { createHTTPService } from 'services/service';
import { event } from '@floyd/schema/inputs';
import { EventSerializer } from './serializer';

export default createHTTPService({
  id: 'event.list',

  inputSchema: event.listSchema,

  async perform({ input, auth }) {
    const tiers = await Event.findBy({ spaceId: input.spaceId });
    return EventSerializer.serializeArray(tiers, auth);
  }
});
