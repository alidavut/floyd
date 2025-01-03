import * as z from 'zod';

const eventSchema = z.object({
  title: z.string().min(1).max(40),
  description: z.string().max(1000).optional(),
  slug: z.string()
    .toLowerCase()
    .min(1, 'Slug must be at least 1 characters')
    .max(40, 'Slug must be at most 100 characters')
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'Invalid slug, must only contain a-z, 0-9, and -'),
  duration: z.number().int().positive()
});

export const createSchema = eventSchema.extend({
  spaceId: z.string().uuid()
});

export const getSchema = z.object({
  id: z.string()
});

export const listSchema = z.object({
  spaceId: z.string().uuid()
});

export const updateSchema = eventSchema.extend({
  id: z.string()
});

export type createParams = z.infer<typeof createSchema>;
export type getParams = z.infer<typeof getSchema>;
export type listParams = z.infer<typeof listSchema>;
export type updateParams = z.infer<typeof updateSchema>;
