import { redirect } from 'lib/navigation';
import { services } from 'services';

export default function StripeSetup() {
  return null;
}

StripeSetup.getInitialProps = async ({ query, res }) => {
  const link = await services.channel.generateStripeOnboardingLink({ channelId: query.channelId });
  redirect(link, res);

  return {};
}
