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

export function getInputErrors(error?: ServiceError): Record<string, string[]> | undefined {
  if (error?.['response']?.data?.errors) {
    const result = {};

    for (const issue of error['response'].data.errors) {
      const path = issue.path.join('.');
      result[path] = result[path] || [];
      result[path].push(issue.message);
    }

    return result;
  }
}
