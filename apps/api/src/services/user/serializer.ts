import { UserObject } from '@floyd/schema/types';
import { Serializer } from '../serializer';
import { User } from 'entities';

export class UserSerializer extends Serializer<User, UserObject> {
  async serialize() {
    const isCurrentUser = this.auth.ok && this.auth.user.id === this.object.id;

    return {
      id: this.object.id,
      handle: this.object.handle,
      email: isCurrentUser ? this.object.email : undefined,
      firstName: isCurrentUser ? this.object.firstName : undefined,
      lastName: isCurrentUser ? this.object.lastName : undefined,
      name: this.object.name,
      createdAt: isCurrentUser ? this.object.createdAt.toISOString() : undefined,
      updatedAt: isCurrentUser ? this.object.updatedAt.toISOString() : undefined
    }
  }
}
