import { ReactElement } from 'react';
import { ChannelHomeView } from './view';
import { services } from 'services';
import { createStoreContextMap, useStoreContext } from 'hacksaw-react';
import { useRouter } from 'next/router';
import { withLayout } from '@floyd/ui/layout';
import { ChannelLayout } from 'components';
import { withAuth } from 'lib/authentication';

function ChannelHome(): ReactElement {
  const router = useRouter();
  const contextMap = useStoreContext('channel-home', router.query.channelId);

  const channel = contextMap.channels.first;

  return (
    <ChannelHomeView
      channel={channel}
    />
  )
}

ChannelHome.getInitialProps = async ({ storeMap, query }) => {
  const contextMap = createStoreContextMap(storeMap, 'channel-home', query.channelId);
  console.log({ query });
  const a = await services.channel.get({ id: query.channelId }, { contextMap });
  console.log({ a });
};

export default withLayout(ChannelLayout)(withAuth(ChannelHome));
