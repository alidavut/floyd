import { z } from 'zod';

export const createSchema = z.object({
  handle: z.string().min(1),
  email: z.string().email().toLowerCase(),
  password: z.string().min(6),
  firstName: z.string().min(1),
  lastName: z.string().min(1)
});

export const getSchema = z.object({
  id: z.literal('me')
});

export type createParams = z.infer<typeof createSchema>;
export type getParams = z.infer<typeof getSchema>;
