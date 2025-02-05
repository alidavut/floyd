import axios from 'axios';
import { isBrowser } from '@floyd/ui/lib/is-browser';
import { createService } from 'services/service';
import generateSignedUrl from './generate-signed-url';
import { z } from 'zod';

export default createService({
  inputSchema: z.object({
    channelId: z.string(),
    type: z.string(),
    file: z.instanceof(isBrowser && File),
    onProgress: z.function().args(z.object({ loaded: z.number(), total: z.number() })).returns(z.void()).optional()
  }),
  perform: async ({ input, contextMap }) => {
    try {
      const data = await generateSignedUrl({
        channelId: input.channelId,
        filename: input.file.name,
        type: input.type,
        contentType: input.file.type
      }, { contextMap });

      await axios.put(
        data.url,
        input.file,
        { onUploadProgress: input.onProgress, headers: { 'Content-Type': input.file.type } }
      );

      return data.key as string;
    } catch (e) {
      throw new Error(e);
    }
  }
});
