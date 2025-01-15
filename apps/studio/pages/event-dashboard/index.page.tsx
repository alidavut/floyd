import { EventDashboardView } from './view';
import { withLayout } from '@floyd/ui/layout';
import { EventLayout } from 'components';
import { services } from 'services';
import { useRouter } from 'next/router';
import { createStoreContextMap, useStoreContext } from 'hacksaw-react';

function EventDashboard() {
  const router = useRouter();
  const contextMap = useStoreContext('event-dashboard', router.query.eventId);

  return (
    <EventDashboardView
      event={contextMap.events.first}
    />
  )
}

EventDashboard.getInitialProps = async ({ storeMap, query }) => {
  if (query.eventId) {
    const contextMap = createStoreContextMap(storeMap, 'event-dashboard', query.eventId);
    await services.event.get({ id: query.eventId }, { contextMap });
  }
}

export default withLayout(EventLayout)(EventDashboard);
