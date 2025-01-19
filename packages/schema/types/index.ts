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
  createdAt: string;
  updatedAt: string;
}
