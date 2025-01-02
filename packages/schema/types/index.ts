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
