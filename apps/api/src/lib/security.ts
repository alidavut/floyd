import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
