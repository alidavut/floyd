import { Heading, Text } from 'emails/components';
import { Layout } from '../layout';
import { createPreview } from './preview';

export interface Props {
  password: number;
}

export function OTPEmail({ password }: Props) {
  return (
    <Layout>
      <Heading>Confirm your email</Heading>
      <Text>
        Use the code below to confirm your email address.
      </Text>
      <Text
        className="text-3xl font-semibold inline-block bg-gray-50 px-6 py-3 tracking-[0.5rem] border-gray-300 rounded-sm my-3"
        style={{ borderWidth: '1px', borderStyle: 'dashed' }}>
        {password}
      </Text>
      <Text>
        This code will expire in 60 minutes.
      </Text>
      <Text>
        — Floyd Team
      </Text>
    </Layout>
  )
}

export default createPreview(OTPEmail, { password: Number('123456') });
