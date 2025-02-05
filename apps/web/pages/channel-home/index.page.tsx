import { withLayout } from '@floyd/ui/layout';
import { ChannelHomeView } from './view';
import { apiClient } from 'lib/client';
import { ChannelObject, EventObject } from '@floyd/schema/types';
import { ChannelLayout } from 'components';

function ChannelHome({ channel, events }: { channel: ChannelObject, events: EventObject[] }) {
  return (
    <ChannelHomeView
      channel={channel}
      events={events}
    />
  )
}

ChannelHome.getInitialProps = async ({ query }) => {
  const handle = query.handle as string;
  const eventSlug = query.eventSlug as string;

  const channel = await apiClient.channel.get({ id: handle });
  const events = await apiClient.event.list({ channelId: channel.id });
  const event = eventSlug && await apiClient.event.get({ id: `${channel.id}::${eventSlug}` });

  return { channel, events, event };
};

export default withLayout(ChannelLayout)(ChannelHome);
