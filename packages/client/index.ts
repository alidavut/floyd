import axios, { Axios } from 'axios';
import { AuthService } from './services/auth';
import { UserService } from './services/user';
import { SpaceService } from './services/space';

export class FloydClient {
  axios: Axios;
  auth: AuthService;
  space: SpaceService;
  user: UserService;

  constructor(options: FloydClientOptions) {
    const headers = {};

    if (options.accessToken) {
      headers['Authorization'] = `Bearer ${options.accessToken}`;
    }

    this.axios = axios.create({
      baseURL: options.baseUrl,
      headers
    });

    this.auth = new AuthService(this.axios);
    this.space = new SpaceService(this.axios);
    this.user = new UserService(this.axios);
  }
}

interface FloydClientOptions {
  baseUrl: string;
  accessToken?: string;
}
