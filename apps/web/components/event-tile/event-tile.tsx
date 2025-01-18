import { ChannelObject, EventObject } from '@floyd/schema/types';
import { Imgix } from '@floyd/ui/components';
import { format } from 'date-fns';
import Link from 'next/link';

interface Props {
  channel: ChannelObject;
  event: EventObject;
}

export function EventTile({ channel, event }: Props) {
  return (
    <Link href={`/${channel.handle}/${event.slug}`} className="block bg-white/80 hover:bg-white rounded-2xl shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300 group">
      <span className="block relative aspect-video m-3 rounded-2xl overflow-hidden">
        <span className="absolute z-10 top-3 left-3 bg-white/70 rounded-full text-lg text-center px-3 py-1.5 font-semibold shadow-sm">
          {format(new Date(event.startsAt), 'MMM dd')}
        </span>
        <Imgix src={event.image} className="aspect-video object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" />
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
