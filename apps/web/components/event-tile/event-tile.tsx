import { ChannelObject, EventObject } from '@floyd/schema/types';
import { format } from 'date-fns';
import Link from 'next/link';

interface Props {
  channel: ChannelObject;
  event: EventObject;
}

export function EventTile({ channel, event }: Props) {
  return (
    <Link href={`/${channel.handle}/${event.slug}`} className="block bg-white/80 hover:bg-white rounded-2xl shadow-sm hover:shadow-lg overflow-hidden transition-all group">
      <span className="block relative aspect-video m-3 rounded-xl overflow-hidden">
        <span className="absolute z-10 top-3 left-3 bg-white/70 rounded-full text-lg text-center px-3 py-1.5 font-semibold shadow-sm">
          {format(new Date(event.startsAt), 'MMM dd')}
        </span>
        <img
          src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="aspect-video object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
        />
      </span>
      <span className="block m-4.5 mb-[0.925rem]">
        <span className="block text-[1.075rem] text-bunker-500 font-medium leading-none mb-0.5">
          {format(new Date(event.startsAt), 'MMM dd')} at {format(new Date(event.startsAt), 'h:mm a')}
        </span>
        <span className="block font-semibold text-[1.375rem]">
          {event.title}
        </span>
      </span>
    </Link>
  )
}
