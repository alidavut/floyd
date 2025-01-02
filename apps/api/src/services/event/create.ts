import { Event, Membership } from 'entities';
import { createHTTPService } from 'services/service';
import { event } from '@floyd/schema/inputs';
import { EventSerializer } from './serializer';
import { unique } from 'lib/validations';

export default createHTTPService({
  id: 'event.create',

  inputSchema: event.createSchema
    .superRefine(unique(Event, ['slug', 'spaceId'])),

  async authorize({ input, auth }) {
    return auth.ok && Membership.existsBy({ spaceId: input.spaceId, userId: auth.user.id });
  },

  async perform({ input, auth }) {
    const event = Event.create({ ...input });
    await event.save();

    return EventSerializer.serialize(event, auth);
  }
});
