import { ChannelEventsView } from './view';
import { withLayout } from '@floyd/ui/layout';
import { ChannelLayout } from 'components';
import { createStoreContextMap, useStoreContext } from 'hacksaw-react';
import { useChannel } from 'lib/hooks';
import { services } from 'services';

function ChannelEvent() {
  const channel = useChannel();
  const contextMap = useStoreContext('channel-events', channel.id);
  const events = contextMap.events.all;

  return (
    <ChannelEventsView
      channel={channel}
      events={events}
    />
  )
}

ChannelEvent.getInitialProps = async ({ storeMap, query }) => {
  const contextMap = createStoreContextMap(storeMap, 'channel-events', query.channelId);
  await services.event.list({ channelId: query.channelId }, { contextMap });
};

export default withLayout(ChannelLayout)(ChannelEvent);
