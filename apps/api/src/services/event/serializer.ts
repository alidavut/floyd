import { Event } from 'entities';
import { EventObject } from '@floyd/schema/types';
import { Serializer } from 'services/serializer';

export class EventSerializer extends Serializer<Event, EventObject> {
  async serialize() {
    return {
      id: this.object.id,
      spaceId: this.object.spaceId,
      status: this.object.status,
      title: this.object.title,
      slug: this.object.slug,
      description: this.object.description,
      duration: this.object.duration,
      createdAt: this.object.createdAt.toISOString(),
      updatedAt: this.object.updatedAt.toISOString()
    };
  }
}
