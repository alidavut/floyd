import { Session } from 'entities';
import { SessionObject } from '@floyd/schema/types';
import { Serializer } from 'services/serializer';

export class SessionSerializer extends Serializer<Session, SessionObject> {
  async serialize() {
    return {
      id: this.object.id,
      eventId: this.object.eventId,
      startsAt: this.object.startsAt.toISOString(),
      createdAt: this.object.createdAt.toISOString(),
      updatedAt: this.object.updatedAt.toISOString()
    };
  }
}
