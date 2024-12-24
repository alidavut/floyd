import { ZodIssue } from 'zod';

export class ServiceError extends Error {
}

export class AuthorizationError extends ServiceError {
}

export class NotFoundError extends ServiceError {
}

export class InputError extends ServiceError {
  constructor(public issues: ZodIssue[]) {
    super(null);
  }
}
