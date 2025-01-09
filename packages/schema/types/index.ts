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
  createdAt: string;
  updatedAt: string;
}

export interface SpaceObject {
  id: string;
  handle: string
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface EventObject {
  id: string;
  spaceId: string;
  status: string;
  title: string;
  slug: string;
  description: string;
  duration: number;
  createdAt: string;
  updatedAt: string;
}
