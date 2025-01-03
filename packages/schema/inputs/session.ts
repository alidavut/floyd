import * as z from 'zod';

export const createSchema = z.object({
  eventId: z.string().uuid(),
  startsAt: z.coerce.date()
});

export const listSchema = z.object({
  eventId: z.string().uuid()
});

export type createParams = z.infer<typeof createSchema>;
export type listParams = z.infer<typeof listSchema>;
