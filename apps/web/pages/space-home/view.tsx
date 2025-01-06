import { EventList, Head } from 'components';
import { EventObject, SpaceObject } from '@floyd/schema/types';

interface Props {
  space: SpaceObject;
  events: EventObject[];
}

export function SpaceHomeView({ space, events }: Props) {
  return (
    <div className="pt-24">
      <Head
        title={space.name}
        description={`Space for ${space.name} on Floyd`}
      />
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-semibold text-center mb-12 font-serif">
          {space.name}
        </h1>
        {events.length > 0 ? (
          <EventList
            space={space}
            events={events}
          />
        ) : (
          <div className="bg-white p-12 rounded-sm shadow-sm text-center text-gray-500">
            No events for now, check back later!
          </div>
        )}
      </div>
    </div>
  )
}
