import { ReactElement } from 'react';
import { SpaceHomeView } from './view';
import { services } from 'services';
import { createStoreContextMap, useStoreContext } from 'hacksaw-react';
import { useRouter } from 'next/router';
import { withLayout } from '@floyd/ui/layout';
import { SpaceLayout } from 'components';
import { withAuth } from 'lib/authentication';

function SpaceHome(): ReactElement {
  const router = useRouter();
  const contextMap = useStoreContext('space-home', router.query.spaceId);

  const space = contextMap.spaces.first;

  return (
    <SpaceHomeView
      space={space}
    />
  )
}

SpaceHome.getInitialProps = async ({ storeMap, query }) => {
  const contextMap = createStoreContextMap(storeMap, 'space-home', query.spaceId);
  await services.space.get({ id: query.spaceId }, { contextMap });
};

export default withLayout(SpaceLayout)(withAuth(SpaceHome));
