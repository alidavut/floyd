import { Event } from 'entities';
import { EventObject } from '@floyd/schema/types';
import { Serializer } from 'services/serializer';

export class EventSerializer extends Serializer<Event, EventObject> {
  async serialize() {
    return {
      id: this.object.id,
      channelId: this.object.channelId,
      status: this.object.status,
      title: this.object.title,
      slug: this.object.slug,
      description: this.object.description,
      image: this.object.image,
      price: this.object.price,
      startsAt: this.object.startsAt.toISOString(),
      createdAt: this.object.createdAt.toISOString(),
      updatedAt: this.object.updatedAt.toISOString()
    };
  }
}
