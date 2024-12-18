import { Auth } from './auth';

export abstract class Serializer<I, R> {
  constructor(protected object: I, protected auth: Auth, protected options: Record<string, any> = {}) {}

  abstract serialize(): Promise<R>;

  static serialize<I, R>(this: InheritedSerializer<I, R>, object: I, auth: Auth, options?: any): Promise<R> {
    return new this(object, auth, options).serialize();
  }

  static serializeArray<I, R>(this: InheritedSerializer<I, R>, objects: I[], auth: Auth, options?: any[]): Promise<R[]> {
    return Promise.all(objects.map(object => new this(object, auth, options).serialize()));
  }
}

type InheritedSerializer<I, R> = new (object: I, auth: Auth, options?: Record<string, any>) => Serializer<I, R>;
