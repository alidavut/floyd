import { withLayout } from '@floyd/ui/layout';
import { ChannelEventView } from './view';
import { apiClient } from 'lib/client';
import { ChannelObject, EventObject, TicketSetupObject } from '@floyd/schema/types';
import { ChannelLayout } from 'components';

function ChannelEvent({ channel, event, ticketSetup }: { channel: ChannelObject, event: EventObject, ticketSetup: TicketSetupObject }) {
  return (
    <ChannelEventView
      channel={channel}
      event={event}
      ticketSetup={ticketSetup}
    />
  )
}

ChannelEvent.getInitialProps = async ({ query }) => {
  const handle = query.handle as string;
  const slug = query.slug as string;

  const channel = await apiClient.channel.get({ id: handle });
  const event = await apiClient.event.get({ id: `${channel.id}::${slug}` });
  const ticketSetup = await apiClient.ticket.setup({ eventId: event.id });

  return { channel, event, ticketSetup };
};

export default withLayout(ChannelLayout)(ChannelEvent);
