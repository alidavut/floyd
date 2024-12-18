import { InputError, ServiceError } from 'services/errors';

export function getInputErrors(error?: ServiceError): Record<string, string[]> | undefined {
  if (error instanceof InputError) {
    const result = {};

    for (const issue of error.issues) {
      const path = issue.path.join('.');
      result[path] = result[path] || [];
      result[path].push(issue.message);
    }

    return result;
  }
}
