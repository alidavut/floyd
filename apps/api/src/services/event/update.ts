import { Event, Membership } from 'entities';
import { createHTTPService } from 'services/service';
import { event } from '@floyd/schema/inputs';
import { EventSerializer } from './serializer';
import { unique } from 'lib/validations';

export default createHTTPService({
  id: 'event.update',

  inputSchema: event.updateSchema
    .superRefine(unique(Event, ['slug', 'spaceId'])),

  async authorize({ input, auth }) {
    const event = await Event.findOneByOrFail({ id: input.id });
    return auth.ok && Membership.existsBy({ spaceId: event.spaceId, userId: auth.user.id });
  },

  async perform({ input, auth }) {
    const event = await Event.findOneBy({ id: input.id });

    event.set({ ...input });

    await event.save();

    return EventSerializer.serialize(event, auth);
  }
});
