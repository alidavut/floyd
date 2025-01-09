import { withLayout } from '@floyd/ui/layout';
import { SpaceHomeView } from './view';
import { apiClient } from 'lib/client';
import { EventObject, SessionObject, SpaceObject } from '@floyd/schema/types';
import { SpaceLayout } from 'components';

interface Props {
  space: SpaceObject;
  events: EventObject[];
  event: EventObject;
  sessions: SessionObject[];
}
function SpaceHome({ space, events, event, sessions }: Props) {
  return (
    <SpaceHomeView
      space={space}
      events={events}
      event={event}
      sessions={sessions || []}
    />
  )
}

SpaceHome.getInitialProps = async ({ query }) => {
  const handle = query.handle as string;
  const eventSlug = query.eventSlug as string;

  const space = await apiClient.space.get({ id: handle });
  const events = await apiClient.event.list({ spaceId: space.id });
  const event = eventSlug && await apiClient.event.get({ id: `${space.id}::${eventSlug}` });
  const sessions = eventSlug && await apiClient.session.list({ eventId: event.id });

  return { space, events, event, sessions };
};

export default withLayout(SpaceLayout)(SpaceHome);
