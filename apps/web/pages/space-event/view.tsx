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
      <div className="container">
        <h1 className="text-4xl font-semibold text-center mb-12 font-serif">
          {space.name}
        </h1>

        <div className="bg-white p-12 rounded-sm shadow-sm text-center text-gray-500">
          <h2 className="text-2xl font-semibold mb-6">{event.title}</h2>
          <p className="text-lg font-medium mb-6">{event.description}</p>
          <p className="text-lg font-medium mb-6">{event.status}</p>
          <p className="text-lg font-medium mb-6">{event.createdAt}</p>
          <p className="text-lg font-medium mb-6">{event.updatedAt}</p>
        </div>
      </div>
    </div>
  )
}
