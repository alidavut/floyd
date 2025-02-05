import { Head } from 'components';
import { ChannelObject, EventObject, TicketInitiationObject } from '@floyd/schema/types';
import { Imgix } from '@floyd/ui/components';
import { OrderForm } from './partials';
import { ticket } from '@floyd/schema/inputs';
import { ServiceError } from 'lib/error';

interface Props {
  channel: ChannelObject;
  event: EventObject;
  ticketInitiation: TicketInitiationObject;
  onInitiateTicket: (params: ticket.initiateParams) => unknown;
  error: ServiceError;
}

export function ChannelEventView({ channel, event, ticketInitiation, onInitiateTicket, error }: Props) {
  return (
    <div className="py-12">
      <Head
        title={event.title + ' - ' + channel.name}
        description={event.description}
      />
      <div className="container">
        <h1 className="text-4xl font-bold mb-6 font-heading">
          {event.title}
        </h1>
        <p>
          {event.description}
        </p>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <Imgix src={event.image} alt={event.title} className="aspect-video object-cover rounded-2xl" />
          </div>
          <div>
            <div className="bg-white p-6 rounded-2xl">
              <OrderForm
                channel={channel}
                ticketInitiation={ticketInitiation}
                onInitiateTicket={onInitiateTicket}
                error={error}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
