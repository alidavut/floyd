import { generateStudioUrl } from 'lib/url';
import { Layout } from '../layout';
import { createPreview } from './preview';
import { Button, Divider, Heading, Text } from 'emails/components';

export interface Props {
  firstName: string;
  url: string;
}

export function VerificationEmail({ firstName, url }: Props) {
  return (
    <Layout>
      <Heading>
        Verify your email
      </Heading>
      <Text>
        Hi, {firstName}!
      </Text>
      <Text>
        Please click the button below to verify your email address.
      </Text>
      <Button href={url}>
        Verify email
      </Button>
      <Divider className="my-6" />
      <Text className="text-sm text-gray-600">
        This link will expire in 3 hours. If you did not request this email, you can safely ignore it.
        For any questions, please contact us at hey@floyd.so
      </Text>
    </Layout>
  )
}

export default createPreview(
  VerificationEmail, { firstName: 'John', url: 'http://studio.floyd.local:3000/verify/abcd123' }
);
