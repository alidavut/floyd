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

  async function handleSendEmailVerification() {
    await sendEmailVerification();
    toast.success('Verification email sent');
  }

  return (
    <ChannelHomeView
      channel={channel}
      currentUser={currentUser}
      onSendEmailVerification={handleSendEmailVerification}
      sendingEmailVerification={sendingEmailVerification}
    />
  )
}

ChannelHome.getInitialProps = async ({ storeMap, query }) => {
  const contextMap = createStoreContextMap(storeMap, 'channel-home', query.channelId);
  await services.channel.get({ id: query.channelId }, { contextMap });
};

export default withLayout(Layout)(withAuth(ChannelHome));
