import { Event } from 'entities';
import { EventObject } from '@floyd/schema/types';
import { Serializer } from 'services/serializer';

export class EventSerializer extends Serializer<Event, EventObject> {
  async serialize() {
    return {
      id: this.object.id,
      spaceId: this.object.spaceId,
      title: this.object.title,
      slug: this.object.slug,
      description: this.object.description,
      createdAt: this.object.createdAt.toISOString(),
      updatedAt: this.object.updatedAt.toISOString()
    };
  }
}
