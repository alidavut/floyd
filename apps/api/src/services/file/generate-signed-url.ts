import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { createHTTPService } from 'services/service';
import { nanoid } from 'nanoid';
import { file } from '@floyd/schema/inputs';
import { Membership } from 'entities';

const s3Client = new S3Client({
  region: process.env.AWS_REGION
});

export default createHTTPService({
  id: 'file::generate_signed_url',

  inputSchema: file.generateSignedUrlSchema,

  async authorize({ input, auth }) {
    return auth.ok && Membership.existsBy({ channelId: input.channelId, userId: auth.user.id });
  },

  async perform({ input }) {
    const key = `/assets/ch-${input.channelId}/${input.type}s/${nanoid()}`;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
      ContentType: input.contentType
    });

    const url = await getSignedUrl(s3Client, command, {
      expiresIn: 60 * 5
    });

    return { url, key };
  }
})
