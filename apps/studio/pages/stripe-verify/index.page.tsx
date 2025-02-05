import { useChannel } from 'lib/hooks';
import { services } from 'services';
import { StripeVerifyView } from './view';
import { ChannelLayout } from 'components';
import { withLayout } from '@floyd/ui/layout';

function StripeVerify() {
  const channel = useChannel();

  return (
    <StripeVerifyView
      success={channel.stripeEnabled}
    />
  )
}

StripeVerify.getInitialProps = async ({ query, res }) => {
  await services.channel.verifyStripe({ channelId: query.channelId });
}

export default withLayout(ChannelLayout)(StripeVerify);
