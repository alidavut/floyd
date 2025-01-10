import { ChannelObject } from '@floyd/schema/types';
import { Serializer } from '../serializer';
import { Channel } from 'entities';

export class ChannelSerializer extends Serializer<Channel, ChannelObject> {
  async serialize() {
    return {
      id: this.object.id,
      handle: this.object.handle,
      name: this.object.name,
      createdAt: this.object.createdAt.toISOString(),
      updatedAt: this.object.updatedAt.toISOString()
    };
  }
}
