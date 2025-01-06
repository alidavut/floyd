import { Head } from 'components';
import { EventObject, SpaceObject } from '@floyd/schema/types';

interface Props {
  space: SpaceObject;
  event: EventObject;
}

export function SpaceEventView({ space, event }: Props) {
  return (
    <div className="pt-24">
      <Head
        title={`${event.title} on ${space.name}`}
        description={`Event ${event.title} on ${space.name} on Floyd`}
      />
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-semibold text-center mb-12 font-serif">
          {event.title}
        </h1>
        <div className="bg-white p-12 rounded-sm shadow-sm text-center text-gray-500">
          {event.description}
        </div>
      </div>
    </div>
  )
}
