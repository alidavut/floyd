import * as z from 'zod';

const channelSchema = z.object({
  handle: z.string()
    .toLowerCase()
    .min(4, 'Handle must be at least 4 characters')
    .max(20, 'Handle must be at most 20 characters')
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'Invalid handle, must only contain a-z, 0-9, and -'),
  name: z.string().min(1).max(50)
});

export const createSchema = channelSchema;

export const getSchema = z.object({
  id: z.string()
});

export const updateSchema = channelSchema.extend({
  id: z.string()
});

export const generateStripeOnboardingLinkSchema = z.object({
  channelId: z.string()
});

export const verifyStripeSchema = z.object({
  channelId: z.string()
});

export type createParams = z.infer<typeof createSchema>;
export type getParams = z.infer<typeof getSchema>;
export type updateParams = z.infer<typeof updateSchema>;
