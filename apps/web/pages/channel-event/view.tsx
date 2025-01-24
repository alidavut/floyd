import { Head } from 'components';
import { ChannelObject, EventObject } from '@floyd/schema/types';
import { Button, Imgix } from '@floyd/ui/components';
import { OrderForm } from './partials';

interface Props {
  channel: ChannelObject;
  event: EventObject;
}

export function ChannelEventView({ channel, event }: Props) {
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
