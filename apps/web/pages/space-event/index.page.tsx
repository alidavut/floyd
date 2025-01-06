import { withLayout } from '@floyd/ui/layout';
import { SpaceEventView } from './view';
import { apiClient } from 'lib/client';
import { EventObject, SpaceObject } from '@floyd/schema/types';
import { SpaceLayout } from 'components';

function SpaceHome({ space, event }: { space: SpaceObject, event: EventObject }) {
  return (
    <SpaceEventView
      space={space}
      event={event}
    />
  )
}

SpaceHome.getInitialProps = async ({ query }) => {
  const handle = query.handle as string;
  const eventSlug = query.eventSlug as string;

  const space = await apiClient.space.get({ id: handle });
  const event = await apiClient.event.get({ id: `${space.id}::${eventSlug}` });

  return { space, event };
};

export default withLayout(SpaceLayout)(SpaceHome);
