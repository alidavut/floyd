import { redirect } from 'lib/navigation';
import { services } from 'services';

export default function StripeSetup() {
  return null;
}

StripeSetup.getInitialProps = async ({ storeMap, query, res }) => {
  const { url } = await services.channel.setupStripe({ channelId: query.channelId }, { storeMap });
  redirect(url, res);

  return {};
}
