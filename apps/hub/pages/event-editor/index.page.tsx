import { ReactElement } from 'react';
import { EventEditorView } from './view';
import { withLayout } from '@floyd/ui/layout';
import { SpaceLayout } from 'components';
import { useService } from 'services/service';
import { services } from 'services';
import { useRouter } from 'next/router';
import { useSpace } from 'lib/hooks';
import { createStoreContextMap, useStoreContext } from 'hacksaw-react';
import { EventObject } from '@floyd/schema/types';

function EventEditor(): ReactElement {
  const router = useRouter();
  const space = useSpace();
  const contextMap = useStoreContext('event-editor', router.query.eventId);
  const hasId = !!router.query.eventId;

  const service = hasId ? services.event.update : services.event.create;

  const { perform: saveEvent, error, loading } = useService(service);

  async function handleSubmit(params: Partial<EventObject>) {
    try {
      if (params.id) {
        await saveEvent(params);
      } else {
        const event = await saveEvent({ spaceId: space.id, ...params });
        router.replace(`/spaces/${space.id}/events/${event.id}`);
      }
    } catch (error) {
    }
  }

  return (
    <EventEditorView
      event={contextMap.events.first}
      onSubmit={handleSubmit}
      error={error}
      loading={loading}
    />
  )
}

EventEditor.getInitialProps = async ({ storeMap, query }) => {
  if (query.eventId) {
    const contextMap = createStoreContextMap(storeMap, 'event-editor', query.eventId);
    await services.event.get({ id: query.eventId }, { contextMap });
  }
}

export default withLayout(SpaceLayout)(EventEditor);
