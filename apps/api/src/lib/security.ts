import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { every } from 'lodash';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function createAccessToken(id: string): string {
  return jwt.sign({ id }, process.env.SECRET_TOKEN, { expiresIn: 60 * 60 * 24 * 7 });
}

export function decodeToken<T>(token: string): Promise<T> {
  return new Promise((resolve) => {
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
      if (err) return resolve(null);
      resolve(decoded as T);
    });
  });
}

export async function decodeAccessToken(token: string): Promise<string> {
  const decoded = await decodeToken<{ id: string; }>(token);
  return decoded && decoded.id;
}

export function createOTP(data: Record<string, unknown>): { password: number, key: string } {
  const password = Math.floor(100000 + Math.random() * 900000);

  return {
    password,
    key: jwt.sign({ ...data, password }, process.env.SECRET_TOKEN, { expiresIn: 60 * 5 }),
  }
}

export function compareOTP(key: string, password: number, data: Record<string, unknown>): Promise<boolean> {
  return new Promise((resolve) => {
    jwt.verify(key, process.env.SECRET_TOKEN, (err, decoded) => {
      if (err) return resolve(false);
      const expected = { ...data, password };
      resolve(every(expected, (value, key) => decoded[key] === value));
    });
  });
}
