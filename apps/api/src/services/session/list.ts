import { Event, Membership, Session } from 'entities';
import { createHTTPService } from 'services/service';
import { session } from '@floyd/schema/inputs';
import { SessionSerializer } from './serializer';

export default createHTTPService({
  id: 'session.list',

  inputSchema: session.listSchema,

  async authorize({ input, auth }) {
    const event = await Event.findOneBy({ id: input.eventId });
    return auth.ok && Membership.existsBy({ spaceId: event.spaceId, userId: auth.user.id });
  },

  async perform({ input, auth }) {
    const sessions = await Session.findBy({ eventId: input.eventId });
    return SessionSerializer.serializeArray(sessions, auth);
  }
});
