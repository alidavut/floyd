import { Layout } from '../layout';
import { createPreview } from './preview';
import { Button, Heading, Text } from 'emails/components';

export interface Props {
  firstName: string;
}

export function WelcomeEmail({ firstName }: Props) {
  return (
    <Layout>
      <Heading>
        You’re In! Welcome to Floyd 🎉
      </Heading>
      <Text>
        Hi, {firstName}!
      </Text>
      <Text>
        Thank you for joining Floyd! We’re excited to have you on board.
      </Text>
      <Text>
        Our team is preparing your early access, and we’ll notify you as soon as you can start creating unforgettable
        experiences.
      </Text>
      <Text>
        Stay tuned!
      </Text>
      <Text>
        — Floyd Team
      </Text>
      <Button href="https://hub.floyd.so" className="mt-6">
        Manage your channel
      </Button>
    </Layout>
  )
}

export default createPreview(WelcomeEmail, { firstName: 'John' });
