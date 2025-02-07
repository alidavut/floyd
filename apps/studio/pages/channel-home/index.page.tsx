import { ReactElement } from 'react';
import { ChannelHomeView } from './view';
import { services } from 'services';
import { createStoreContextMap, useStoreContext } from 'hacksaw-react';
import { useRouter } from 'next/router';
import { withLayout } from '@floyd/ui/layout';
import { Layout } from 'components';
import { withAuth } from 'lib/authentication';
import { useCurrentUser } from 'lib/hooks';
import { useService } from 'services/service';
import { toast } from 'react-toastify';

function ChannelHome(): ReactElement {
  const router = useRouter();
  const currentUser = useCurrentUser();
  const contextMap = useStoreContext('channel-home', router.query.channelId);

  const channel = contextMap.channels.first;

  const { perform: sendEmailVerification, loading: sendingEmailVerification } = useService(
    services.user.sendEmailVerification
  );

  const { perform: setupStripe, loading: settingUpStripe } = useService(services.channel.setupStripe);

  async function handleSendEmailVerification() {
    await sendEmailVerification();
    toast.success('Verification email sent');
  }

  async function handleSetupStripe(countryCode: string) {
    const { url } = await setupStripe({ channelId: channel.id, countryCode }, { contextMap });
    window.location.href = url;
  }

  return (
    <ChannelHomeView
      channel={channel}
      currentUser={currentUser}
      onSendEmailVerification={handleSendEmailVerification}
      sendingEmailVerification={sendingEmailVerification}
      onSetupStripe={handleSetupStripe}
      settingUpStripe={settingUpStripe}
    />
  )
}

ChannelHome.getInitialProps = async ({ storeMap, query }) => {
  const contextMap = createStoreContextMap(storeMap, 'channel-home', query.channelId);
  await services.channel.get({ id: query.channelId }, { contextMap });
};

export default withLayout(Layout)(withAuth(ChannelHome));
