import { z } from 'zod';

export const createSchema = z.object({
  handle: z.string()
    .toLowerCase()
    .min(4, 'Handle must be at least 4 characters')
    .max(20, 'Handle must be at most 20 characters')
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'Invalid handle, must only contain a-z, 0-9, and -'),
  email: z.string().email().toLowerCase(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  firstName: z.string()
    .min(1, 'First name is required')
    .max(50, 'First name must be at most 50 characters'),
  lastName: z.string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be at most 50 characters')
});

export const getSchema = z.object({
  id: z.literal('me')
});

export type createParams = z.infer<typeof createSchema>;
export type getParams = z.infer<typeof getSchema>;
