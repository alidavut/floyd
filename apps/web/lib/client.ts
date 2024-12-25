import { FloydClient } from '@floyd/client';

export const apiClient = new FloydClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL
});
