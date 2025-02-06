import bcrypt from 'bcrypt';
import jwt, { SignOptions } from 'jsonwebtoken';
import { every } from 'lodash';

export enum TokenType {
  ACCESS_TOKEN = 'access_token',
  EMAIL_VERIFICATION_TOKEN = 'email_verification_token'
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function createToken<T extends string | Buffer | object>(type: TokenType, data: T, options: SignOptions): string {
  return jwt.sign({ type, data }, process.env.SECRET_TOKEN, options);
}

export function decodeToken<T>(type: TokenType, token: string): Promise<T> {
  return new Promise((resolve) => {
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
      if (err) return resolve(null);
      if (decoded?.['type'] !== type) return resolve(null);
      resolve(decoded['data']);
    });
  });
}

export function createAccessToken(id: string): string {
  return createToken(TokenType.ACCESS_TOKEN, { id }, { expiresIn: 60 * 60 * 24 * 7 });
}

export async function decodeAccessToken(token: string): Promise<string> {
  const decoded = await decodeToken<{ id: string; }>(TokenType.ACCESS_TOKEN, token);
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
