import { redirect } from 'lib/navigation';
import { services } from 'services';

export default function StripeSetup() {
  return null;
}

StripeSetup.getInitialProps = async ({ query, res }) => {
  const { url } = await services.channel.setupStripe({ channelId: query.channelId });
  redirect(url, res);

  return {};
}
