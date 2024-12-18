import { User } from 'entities';
import { decodeAccessToken } from 'lib/security';

export class Auth {
  public user: User;

  get ok(): boolean {
    return !!this.user;
  }

  static async create({ user, token }: { user?: User, token?: string }) {
    const auth = new Auth();

    if (user) {
      auth.user = user;
      return auth;
    }

    const id = await decodeAccessToken(token);

    if (id) {
      auth.user = await User.findOneBy({ id });
    }

    return auth;
  }
}
