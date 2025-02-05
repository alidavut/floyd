import { EventStatus } from '../constants';

export interface AuthObject {
  accessToken: string;
  user: UserObject;
}

export interface UserObject {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  name: string;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ChannelObject {
  id: string;
  handle: string
  name: string;
  currencyCode: string;
  stripeId: string;
  stripeEnabled: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface EventObject {
  id: string;
  status: EventStatus;
  title: string;
  slug: string;
  description: string;
  image: string;
  price: number;
  startsAt: string;
  channelId: string;
  channel?: ChannelObject;
  createdAt: string;
  updatedAt: string;
}

export interface TicketObject {
  id: string;
  code: string;
  eventId: string;
  createdAt: string;
  updatedAt: string;
}

export interface TicketInitiationObject {
  clientSecret: string;
}
