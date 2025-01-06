import { EventObject, SpaceObject } from '@floyd/schema/types';
import Link from 'next/link';

interface Props {
  space: SpaceObject;
  events: EventObject[];
}

export function EventList({ space, events }: Props) {
  return (
    <div className="rounded-sm bg-white overflow-hidden shadow-sm">
      {events.map(event => (
        <Link
          key={event.id}
          href={`/${space.handle}/${event.slug}`}
          className="block p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-100/30">
          <span className="block text-[1.05rem] font-semibold">{event.title}</span>
          {event.description && (
            <span className="text-[0.9rem] text-bunker-950/50">{event.description}</span>
          )}
        </Link>
      ))}
    </div>
  )
}
