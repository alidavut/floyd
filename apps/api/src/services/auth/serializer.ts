import { AuthObject } from '@floyd/schema/types';
import { Serializer } from '../serializer';
import { UserSerializer } from 'services/user/serializer';
import { Auth } from 'services/auth';
import { createAccessToken } from 'lib/security';

export class AuthSerializer extends Serializer<Auth, AuthObject> {
  async serialize(): Promise<AuthObject> {
    return {
      accessToken: createAccessToken(this.object.user.id),
      user: await UserSerializer.serialize(this.object.user, this.auth)
    }
  }
}
