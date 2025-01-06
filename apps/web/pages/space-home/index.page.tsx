import { withLayout } from '@floyd/ui/layout';
import { SpaceHomeView } from './view';
import { apiClient } from 'lib/client';
import { EventObject, SpaceObject } from '@floyd/schema/types';
import { SpaceLayout } from 'components';

function SpaceHome({ space, events }: { space: SpaceObject, events: EventObject[] }) {
  return (
    <SpaceHomeView
      space={space}
      events={events}
    />
  )
}

SpaceHome.getInitialProps = async ({ query }) => {
  const handle = query.handle as string;
  const space = await apiClient.space.get({ id: handle });
  const events = await apiClient.event.list({ spaceId: space.id });

  return { space, events };
};

export default withLayout(SpaceLayout)(SpaceHome);
