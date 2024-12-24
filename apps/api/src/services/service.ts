import { ZodType, infer as ZodInfer } from 'zod';
import { AuthorizationError, InputError } from './errors';
import { Auth } from './auth';
import { Request } from 'express';

export interface ServiceDefinition<Input extends ZodType, Output, Auth, Context> {
  id: string;
  inputSchema?: Input;
  authorize?: (args: ServiceArgs<Input, Auth, Context>) => Promise<boolean>;
  perform: (args: ServiceArgs<Input, Auth, Context>) => Promise<Output>;
}

export interface ServiceArgs<Input extends ZodType, Auth, Context> {
  input: ZodInfer<Input>;
  auth?: Auth;
  context: Context;
}

export interface ServiceOptions<Auth, Context> {
  auth?: Auth;
  context: Context;
}

export type Service = ReturnType<typeof createService>;

export function createService<Auth, Context, Input extends ZodType, Output>
  (serviceDefinition: ServiceDefinition<Input, Output, Auth, Context>) {
  const service = async (inputArgs: ZodInfer<Input>, options?: ServiceOptions<Auth, Context>) => {
    let input: ZodInfer<Input>;

    try {
      if (serviceDefinition.inputSchema) {
        input = await serviceDefinition.inputSchema.parseAsync(inputArgs);
      }
    } catch (error) {
      throw new InputError(error.issues);
    }

    const args = { input, auth: options?.auth, context: options?.context };

    if (serviceDefinition.authorize && !(await serviceDefinition.authorize(args))) {
      throw new AuthorizationError('Unauthorized');
    }

    return await serviceDefinition.perform(args);
  }

  if (registry[serviceDefinition.id]) {
    throw new Error(`Service already registered: ${serviceDefinition.id}`);
  }

  registry[serviceDefinition.id] = service;

  return service as (input: ZodInfer<Input>, options?: ServiceOptions<Auth, Context>) => Promise<Output>;
}

export function createHTTPService<Input extends ZodType, Output>
  (serviceDefinition: ServiceDefinition<Input, Output, Auth, { request: Request }>) {
  return createService(serviceDefinition);
}

export const registry: Record<string, Service> = {};
