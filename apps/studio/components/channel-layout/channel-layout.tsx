import { ReactElement, ReactNode } from 'react';
import { Navigation } from './navigation';
import { createStoreContextMap, useStoreContext } from 'hacksaw-react';
import { services } from 'services';
import { useRouter } from 'next/router';
import { withLayout } from '@floyd/ui/layout';
import { Layout } from 'components/layout/layout';
import { ChannelContext, useCurrentUser } from 'lib/hooks';
import { withAuth } from 'lib/authentication';

interface Props {
  children?: ReactNode;
}

export function ChannelLayoutComponent({ children }: Props): ReactElement {
  const router = useRouter();
  const currentUser = useCurrentUser();
  const contextMap = useStoreContext('channel-layout', router.query.channelId);
  const channel = contextMap.channels.all.find(channel => channel.id === router.query.channelId);

  return (
    <ChannelContext.Provider value={channel}>
      <div className="flex flex-1">
        <div className="w-64 relative">
          <div className="fixed inset-0 w-64 bg-white">
            <Navigation
              channel={channel}
              channels={contextMap.channels.all}
              currentUser={currentUser}
            />
          </div>
        </div>
        <div className="flex-1">
          {children}
        </div>
      </div>
    </ChannelContext.Provider>
  )
}

ChannelLayoutComponent.getInitialProps = async ({ storeMap, query }) => {
  const contextMap = createStoreContextMap(storeMap, 'channel-layout', query.channelId);
  await services.channel.list(null, { contextMap });
};

export const ChannelLayout = withAuth(withLayout(Layout)(ChannelLayoutComponent));
