import { useChannel } from 'lib/hooks';
import { services } from 'services';
import { ChannelLayout } from 'components';
import { withLayout } from '@floyd/ui/layout';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

function StripeVerify() {
  const router = useRouter();
  const channel = useChannel();

  useEffect(() => {
    if (channel.chargesEnabled && channel.payoutsEnabled) {
      toast.success('Stripe account verified');
    } else {
      toast.error('Stripe account not verified yet please try again later');
    }

    router.push(`/channels/${channel.id}`);
  }, []);

  return null;
}

StripeVerify.getInitialProps = async ({ query }) => {
  await services.channel.verifyStripe({ channelId: query.channelId });
}

export default withLayout(ChannelLayout)(StripeVerify);
