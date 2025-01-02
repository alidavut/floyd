import { SpaceEventsView } from './view';
import { withLayout } from '@floyd/ui/layout';
import { SpaceLayout } from 'components';
import { createStoreContextMap, useStoreContext } from 'hacksaw-react';
import { useSpace } from 'lib/hooks';
import { services } from 'services';

function SpaceEvents() {
  const space = useSpace();
  const contextMap = useStoreContext('space-events', space.id);
  const events = contextMap.events.all;

  return (
    <SpaceEventsView
      space={space}
      events={events}
    />
  )
}

SpaceEvents.getInitialProps = async ({ storeMap, query }) => {
  const contextMap = createStoreContextMap(storeMap, 'space-events', query.spaceId);
  await services.event.list({ spaceId: query.spaceId }, { contextMap });
};

export default withLayout(SpaceLayout)(SpaceEvents);
