import { z } from 'zod';

export const createSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  firstName: z.string()
    .min(1, 'First name is required')
    .max(50, 'First name must be at most 50 characters'),
  lastName: z.string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be at most 50 characters'),
  otpKey: z.string().nullish(),
  otpCode: z.number().nullish()
});

export const getSchema = z.object({
  id: z.literal('me')
});

export type createParams = z.infer<typeof createSchema>;
export type getParams = z.infer<typeof getSchema>;
