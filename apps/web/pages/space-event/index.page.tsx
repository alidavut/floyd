import { withLayout } from '@floyd/ui/layout';
import { SpaceEventView } from './view';
import { apiClient } from 'lib/client';
import { EventObject, SessionObject, SpaceObject } from '@floyd/schema/types';
import { SpaceLayout } from 'components';

function SpaceHome({ space, event, sessions }: { space: SpaceObject, event: EventObject, sessions: SessionObject[] }) {
  return (
    <SpaceEventView
      space={space}
      event={event}
      sessions={sessions}
    />
  )
}

SpaceHome.getInitialProps = async ({ query }) => {
  const handle = query.handle as string;
  const eventSlug = query.eventSlug as string;

  const space = await apiClient.space.get({ id: handle });
  const event = await apiClient.event.get({ id: `${space.id}::${eventSlug}` });
  const sessions = await apiClient.session.list({ eventId: event.id });

  return { space, event, sessions };
};

export default withLayout(SpaceLayout)(SpaceHome);
