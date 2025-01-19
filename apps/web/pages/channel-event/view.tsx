import { Head } from 'components';
import { EventObject } from '@floyd/schema/types';

interface Props {
  event: EventObject;
}

export function ChannelEventView({ event }: Props) {
  return (
    <div>
      <Head
        title={event.title}
        description={event.description}
      />
      <div className="container max-w-5xl">
        <h1 className="text-4xl font-bold mb-6">
          {event.title}
        </h1>
      </div>
    </div>
  )
}
