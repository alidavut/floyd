import { ReactElement, ReactNode } from 'react';
import { createStoreContextMap, useStoreContext } from 'hacksaw-react';
import { services } from 'services';
import { useRouter } from 'next/router';
import { withLayout } from '@floyd/ui/layout';
import { Layout } from 'components/layout/layout';
import { ChannelContext } from 'lib/hooks';
import { withAuth } from 'lib/authentication';

interface Props {
  children?: ReactNode;
}

export function ChannelLayoutComponent({ children }: Props): ReactElement {
  const router = useRouter();
  const contextMap = useStoreContext('channel-layout', router.query.channelId);
  const channel = contextMap.channels.all.find(channel => channel.id === router.query.channelId);

  return (
    <ChannelContext.Provider value={channel}>
      {children}
    </ChannelContext.Provider>
  )
}

ChannelLayoutComponent.getInitialProps = async ({ storeMap, query }) => {
  const contextMap = createStoreContextMap(storeMap, 'channel-layout', query.channelId);
  await services.channel.list(null, { contextMap });
};

export const ChannelLayout = withAuth(withLayout(Layout)(ChannelLayoutComponent));
