import { withLayout } from '@floyd/ui/layout';
import { SpaceHomeView } from './view';
import { apiClient } from 'lib/client';
import { EventObject, SpaceObject } from '@floyd/schema/types';
import { SpaceLayout } from 'components';

interface Props {
  space: SpaceObject;
  events: EventObject[];
  event: EventObject;
}
function SpaceHome({ space, events, event }: Props) {
  return (
    <SpaceHomeView
      space={space}
      events={events}
      event={event}
    />
  )
}

SpaceHome.getInitialProps = async ({ query }) => {
  const handle = query.handle as string;
  const eventSlug = query.eventSlug as string;

  const space = await apiClient.space.get({ id: handle });
  const events = await apiClient.event.list({ spaceId: space.id });
  const event = eventSlug && await apiClient.event.get({ id: `${space.id}::${eventSlug}` });

  return { space, events, event };
};

export default withLayout(SpaceLayout)(SpaceHome);
