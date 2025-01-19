import { withLayout } from '@floyd/ui/layout';
import { ChannelEventView } from './view';
import { apiClient } from 'lib/client';
import { EventObject } from '@floyd/schema/types';
import { ChannelLayout } from 'components';

function ChannelEvent({ event }: { event: EventObject }) {
  return (
    <ChannelEventView
      event={event}
    />
  )
}

ChannelEvent.getInitialProps = async ({ query }) => {
  const handle = query.handle as string;
  const slug = query.slug as string;

  const channel = await apiClient.channel.get({ id: handle });
  const event = await apiClient.event.get({ id: `${channel.id}::${slug}` });

  return { event };
};

export default withLayout(ChannelLayout)(ChannelEvent);
