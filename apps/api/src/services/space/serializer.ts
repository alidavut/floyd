import { SpaceObject } from '@floyd/schema/types';
import { Serializer } from '../serializer';
import { Space } from 'entities';

export class SpaceSerializer extends Serializer<Space, SpaceObject> {
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
