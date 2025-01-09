import { Session } from 'entities';
import { createHTTPService } from 'services/service';
import { session } from '@floyd/schema/inputs';
import { SessionSerializer } from './serializer';

export default createHTTPService({
  id: 'session.list',

  inputSchema: session.listSchema,

  async perform({ input, auth }) {
    const sessions = await Session.findBy({ eventId: input.eventId });
    return SessionSerializer.serializeArray(sessions, auth);
  }
});
