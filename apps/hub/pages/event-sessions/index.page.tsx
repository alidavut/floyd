import { EventSessionsView } from './view';
import { withLayout } from '@floyd/ui/layout';
import { EventLayout } from 'components';
import { services } from 'services';
import { useRouter } from 'next/router';
import { createStoreContextMap, useStoreContext } from 'hacksaw-react';
import { useService } from 'services/service';

function EventSessions() {
  const router = useRouter();
  const eventId = router.query.eventId as string;
  const contextMap = useStoreContext('event-sessions', eventId);

  const { perform: createSession, loading, error } = useService(services.session.create);

  async function handleSubmit(params: { startsAt: string }) {
    const serviceParams = { ...params, eventId };
    await createSession(serviceParams, { contextMap });
  }

  return (
    <EventSessionsView
      sessions={contextMap.sessions.all}
      onSubmit={handleSubmit}
      submitting={loading}
      error={error}
    />
  )
}

EventSessions.getInitialProps = async ({ storeMap, query }) => {
  const contextMap = createStoreContextMap(storeMap, 'event-sessions', query.eventId);
  await services.session.list({ eventId: query.eventId }, { contextMap });
}

export default withLayout(EventLayout)(EventSessions);
