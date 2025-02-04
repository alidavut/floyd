import * as z from 'zod';

export const createSchema = z.object({
  eventId: z.string().uuid(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  paymentIntentId: z.string()
});

export const setupSchema = z.object({
  eventId: z.string()
});

export type setupParams = z.infer<typeof setupSchema>;
