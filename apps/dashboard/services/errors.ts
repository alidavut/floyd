import { ZodIssue } from 'zod';

export class ServiceError extends Error {
}

export class InputError extends ServiceError {
  constructor(public issues: ZodIssue[]) {
    super();
  }
}
