import * as z from 'zod';

export const createSchema = z.object({
  eventId: z.string().uuid(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  paymentIntentId: z.string()
});

export const initiateSchema = z.object({
  eventId: z.string(),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email()
});

export type initiateParams = z.infer<typeof initiateSchema>;
