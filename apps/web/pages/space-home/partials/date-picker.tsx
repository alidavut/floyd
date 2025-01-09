import { EventObject, SessionObject, SpaceObject } from '@floyd/schema/types';
import Link from 'next/link';
import cx from 'classnames';

interface Props {
  space: SpaceObject;
  event: EventObject;
  sessions: SessionObject[];
  value: string;
}

export function DatePicker({ space, event, sessions, value }: Props) {
  const uniqueDates = Array.from(new Set(sessions.map(s => s.startsAt.split('T')[0])));

  function renderDate(date: string) {
    const selected = date === value;
    const className = cx(
      'relative block border border-gray-200/80 p-3 rounded-xl transition-all',
      selected && 'border-purple-500 ring ring-purple-600/10 bg-white shadow-sm',
      !selected && 'bg-white/80 hover:bg-white hover:shadow-sm hover:border-bunker-500'
    );

    return (
      <li>
        <Link href={`/${space.handle}/${event.slug}`} className={className}>
          <span className="block text-[1.075rem] font-semibold">{date}</span>
          {event.description && !value && (
            <span className="block text-gray-800 text-[0.9rem] mt-[0.075rem]">{event.description}</span>
          )}
          <span className="absolute right-3 top-0 bottom-0 flex items-center">
            <span
              className={cx(
                'flex items-center justify-center border rounded-full w-5 h-5',
                selected ? 'bg-purple-500 border-purple-500' : 'border-gray-200/80'
              )}>
              <span className="w-2 h-2 block bg-white rounded-full" />
            </span>
          </span>
        </Link>
      </li>
    )
  }

  return (
    <div>
      <ul className="space-y-1.5">
        {uniqueDates.map(renderDate)}
      </ul>
    </div>
  )
}
