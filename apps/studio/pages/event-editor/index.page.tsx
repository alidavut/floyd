import { ReactElement } from 'react';
import { EventEditorView } from './view';
import { withLayout } from '@floyd/ui/layout';
import { EventLayout } from 'components';
import { useService } from 'services/service';
import { services } from 'services';
import { useRouter } from 'next/router';
import { useChannel } from 'lib/hooks';
import { createStoreContextMap, useStoreContext } from 'hacksaw-react';
import { event } from '@floyd/schema/inputs';

function EventEditor(): ReactElement {
  const router = useRouter();
  const channel = useChannel();
  const contextMap = useStoreContext('event-editor', router.query.eventId);
  const hasId = !!router.query.eventId;

  const service = hasId ? services.event.update : services.event.create;

  const { perform: saveEvent, error, loading } = useService(service);

  async function handleSubmit(params: event.createParams | event.updateParams) {
    params.startsAt = params.startsAt && new Date(params.startsAt).toISOString();

    try {
      if (hasId) {
        await saveEvent(params);
      } else {
        const event = await saveEvent({ channelId: channel.id, ...params });
        router.replace(`/channels/${channel.id}/events/${event.id}`);
      }
    } catch (error) {
    }
  }

  return (
    <EventEditorView
      channel={channel}
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

export default withLayout(EventLayout)(EventEditor);
