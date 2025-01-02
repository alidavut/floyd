import { ReactElement, ReactNode } from 'react';
import { Navigation } from './navigation';
import { createStoreContextMap, useStoreContext } from 'hacksaw-react';
import { services } from 'services';
import { useRouter } from 'next/router';
import { withLayout } from '@floyd/ui/layout';
import { Layout } from 'components/layout/layout';
import { SpaceContext, useCurrentUser } from 'lib/hooks';
import { withAuth } from 'lib/authentication';

interface Props {
  children?: ReactNode;
}

export function SpaceLayoutComponent({ children }: Props): ReactElement {
  const router = useRouter();
  const currentUser = useCurrentUser();
  const contextMap = useStoreContext('space-layout', router.query.spaceId);
  const space = contextMap.spaces.all.find(space => space.id === router.query.spaceId);

  return (
    <SpaceContext.Provider value={space}>
      <div className="flex flex-1">
        <div className="w-60 relative">
          <div className="fixed inset-0 w-64 bg-white">
            <Navigation
              space={space}
              spaces={contextMap.spaces.all}
              currentUser={currentUser}
            />
          </div>
        </div>
        <div className="flex-1">
          {children}
        </div>
      </div>
    </SpaceContext.Provider>
  )
}

SpaceLayoutComponent.getInitialProps = async ({ storeMap, query }) => {
  const contextMap = createStoreContextMap(storeMap, 'space-layout', query.spaceId);
  await services.space.list(null, { contextMap });
};

export const SpaceLayout = withAuth(withLayout(Layout)(SpaceLayoutComponent));
