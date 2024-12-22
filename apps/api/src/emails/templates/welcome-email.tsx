import { Text } from '@react-email/components';
import { Layout } from '../layout';

export interface Props {
  firstName: string;
}

export function WelcomeEmail({ firstName }: Props) {
  return (
    <Layout>
      <Text className="font-bold text-gray-900">
        Welcome to the platform, {firstName}!
      </Text>
    </Layout>
  )
}
