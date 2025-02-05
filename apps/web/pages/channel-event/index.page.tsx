import { withLayout } from '@floyd/ui/layout';
import { ChannelEventView } from './view';
import { apiClient } from 'lib/client';
import { ChannelObject, EventObject } from '@floyd/schema/types';
import { ChannelLayout } from 'components';
import { useService } from 'lib/service';

function ChannelEvent({ channel, event }: { channel: ChannelObject, event: EventObject }) {
  const { data: ticketInitiation, perform: initiateTicket, error } = useService(apiClient.ticket.initiate);

  function handleInitiateTicket(params) {
    initiateTicket({ ...params, eventId: event.id });
  }

  return (
    <ChannelEventView
      channel={channel}
      event={event}
      ticketInitiation={ticketInitiation}
      onInitiateTicket={handleInitiateTicket}
      error={error}
    />
  )
}

ChannelEvent.getInitialProps = async ({ query }) => {
  const handle = query.handle as string;
  const slug = query.slug as string;

  const channel = await apiClient.channel.get({ id: handle });
  const event = await apiClient.event.get({ id: `${channel.id}::${slug}` });

  return { channel, event };
};

export default withLayout(ChannelLayout)(ChannelEvent);
