import axios, { Axios } from 'axios';
import { createAuthService } from './services/auth';
import { createChannelService } from './services/channel';
import { createEventService } from './services/event';
import { createTicketService } from './services/ticket';
import { createUserService } from './services/user';

export class FloydClient {
  axios: Axios;
  auth: ReturnType<typeof createAuthService>;
  channel: ReturnType<typeof createChannelService>;
  event: ReturnType<typeof createEventService>;
  ticket: ReturnType<typeof createTicketService>;
  user: ReturnType<typeof createUserService>;

  constructor(options: FloydClientOptions) {
    const headers = {};

    if (options.accessToken) {
      headers['Authorization'] = `Bearer ${options.accessToken}`;
    }

    this.axios = axios.create({
      baseURL: options.baseUrl,
      headers
    });

    this.auth = createAuthService(this.axios);
    this.channel = createChannelService(this.axios);
    this.event = createEventService(this.axios);
    this.ticket = createTicketService(this.axios);
    this.user = createUserService(this.axios);
  }
}

interface FloydClientOptions {
  baseUrl: string;
  accessToken?: string;
}
