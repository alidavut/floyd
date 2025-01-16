import { z } from 'zod';

export const generateSignedUrlSchema = z.object({
  channelId: z.string(),
  type: z.string(),
  filename: z.string(),
  contentType: z.string()
});

export type generateSignedUrlParams = z.infer<typeof generateSignedUrlSchema>;
