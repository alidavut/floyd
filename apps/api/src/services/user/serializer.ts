import { UserObject } from '@floyd/schema/types';
import { Serializer } from '../serializer';
import { User } from 'entities';

export class UserSerializer extends Serializer<User, UserObject> {
  async serialize() {
    return {
      id: this.object.id,
      email: this.object.email,
      firstName: this.object.firstName,
      lastName: this.object.lastName,
      name: this.object.name,
      createdAt: this.object.createdAt.toISOString(),
      updatedAt: this.object.updatedAt.toISOString()
    }
  }
}
