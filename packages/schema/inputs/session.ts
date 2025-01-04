import * as z from 'zod';

export const createSchema = z.object({
  eventId: z.string().uuid(),
  startsAt: z.string()
    .regex(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/, 'Date is not in the correct format')
});

export const listSchema = z.object({
  eventId: z.string().uuid()
});

export type createParams = z.infer<typeof createSchema>;
export type listParams = z.infer<typeof listSchema>;
