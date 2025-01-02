import { withLayout } from '@floyd/ui/layout';
import { SpaceHomeView } from './view';
import { apiClient } from 'lib/client';
import { SpaceObject } from '@floyd/schema/types';
import { SpaceLayout } from 'components';

function SpaceHome({ space }: { space: SpaceObject }) {
  return (
    <SpaceHomeView
      space={space}
    />
  )
}

SpaceHome.getInitialProps = async ({ query }) => {
  const handle = query.handle as string;
  const space = await apiClient.space.get({ id: handle });

  return { space };
};

export default withLayout(SpaceLayout)(SpaceHome);
