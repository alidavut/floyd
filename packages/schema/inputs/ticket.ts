import * as z from 'zod';

export const setupSchema = z.object({
  eventId: z.string()
});

export type setupParams = z.infer<typeof setupSchema>;
