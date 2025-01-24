import { EventTile, Head } from 'components';
import { ChannelObject, EventObject } from '@floyd/schema/types';

interface Props {
  channel: ChannelObject;
  events: EventObject[];
}

export function ChannelHomeView({ channel, events }: Props) {
  return (
    <div className="py-12">
      <Head
        title={channel.name}
        description={`Channel for ${channel.name} on Floyd`}
      />
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">
          Events
        </h1>
        <div className="grid lg:grid-cols-3 gap-3 lg:gap-6">
          {events.map((event) => (
            <div key={event.id}>
              <EventTile
                channel={channel}
                event={event}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
