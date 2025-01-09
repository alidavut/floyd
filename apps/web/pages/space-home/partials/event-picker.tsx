import { EventObject, SpaceObject } from '@floyd/schema/types';
import Link from 'next/link';
import cx from 'classnames';

interface Props {
  space: SpaceObject;
  events: EventObject[];
  value: EventObject;
}

export function EventPicker({ space, events, value }: Props) {
  function renderEvent(event: EventObject) {
    const selected = value && value.id === event.id;
    const className = cx(
      'relative block border border-gray-200/60 p-3 rounded-xl transition-all',
      selected && 'border-bunker-600/40 border-dashed bg-white',
      !selected && 'bg-white/80 hover:bg-white hover:shadow-sm hover:border-bunker-400'
    );

    return (
      <li>
        <Link href={`/${space.handle}/${event.slug}`} className={className}>
          <span className="block text-[1.025rem] font-semibold">{event.title}</span>
          {event.description && !value && (
            <span className="block text-gray-800 text-[0.9rem]">{event.description}</span>
          )}
          <span className="absolute right-3 top-0 bottom-0 flex items-center">
            <span
              className={cx(
                'flex items-center justify-center border rounded-full w-4.5 h-4.5',
                selected ? 'bg-bunker-950 border-bunker-950' : 'border-gray-200/80'
              )}>
              <span className="w-1.5 h-1.5 block bg-white rounded-full" />
            </span>
          </span>
        </Link>
      </li>
    )
  }

  return (
    <div>
      <ul className="space-y-1.5">
        {(value ? [value] : events).map(renderEvent)}
      </ul>
    </div>
  )
}
