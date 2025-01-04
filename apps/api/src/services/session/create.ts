import { Event, Membership, Session } from 'entities';
import { createHTTPService } from 'services/service';
import { session } from '@floyd/schema/inputs';
import { SessionSerializer } from './serializer';

export default createHTTPService({
  id: 'session.create',

  inputSchema: session.createSchema,

  async authorize({ input, auth }) {
    const event = await Event.findOneBy({ id: input.eventId });
    return auth.ok && Membership.existsBy({ spaceId: event.spaceId, userId: auth.user.id });
  },

  async perform({ input, auth }) {
    const session = Session.create({ ...input });

    await session.save();
    await session.reload();

    return SessionSerializer.serialize(session, auth);
  }
});
