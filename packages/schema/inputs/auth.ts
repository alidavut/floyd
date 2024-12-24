import { z } from 'zod';

export const createSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z.string().min(6)
});

export const sendOtpSchema = z.object({
  email: z.string().email().toLowerCase()
});

export type createParams = z.infer<typeof createSchema>;
