import axios, { Axios } from 'axios';
import { AuthService } from './services/auth';
import { ChannelService } from './services/channel';
import { EventService } from './services/event';
import { TicketService } from './services/ticket';
import { UserService } from './services/user';

export class FloydClient {
  axios: Axios;
  auth: AuthService;
  channel: ChannelService;
  event: EventService;
  ticket: TicketService;
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
    this.channel = new ChannelService(this.axios);
    this.event = new EventService(this.axios);
    this.ticket = new TicketService(this.axios);
    this.user = new UserService(this.axios);
  }
}

interface FloydClientOptions {
  baseUrl: string;
  accessToken?: string;
}
