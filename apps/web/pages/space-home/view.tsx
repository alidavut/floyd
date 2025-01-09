import { Head } from 'components';
import { EventObject, SessionObject, SpaceObject } from '@floyd/schema/types';
import { DatePicker, EventPicker, Section } from './partials';
import { PiCalendarCheck, PiCalendarCheckBold, PiCalendarDot, PiCalendarHeart, PiListBold, PiListHeart } from 'react-icons/pi';
import Link from 'next/link';

interface Props {
  space: SpaceObject;
  events: EventObject[];
  event: EventObject;
  sessions: SessionObject[];
}

export function SpaceHomeView({ space, events, event, sessions }: Props) {
  return (
    <div className="pt-18">
      <Head
        title={space.name}
        description={`Space for ${space.name} on Floyd`}
      />
      <div className="container max-w-xl">
        <h1 className="text-4xl font-semibold text-center mb-12 font-serif">
          {space.name}
        </h1>
        <div className="space-y-6">
          <Section
            icon={PiListHeart}
            title="Choose an event"
            actions={event && <Link href={`/${space.handle}`} className="text-sm">Edit event</Link>}>
            <EventPicker
              space={space}
              events={events}
              value={event}
            />
          </Section>
          <Section icon={PiCalendarDot} title="Choose a date">
            <DatePicker
              space={space}
              event={event}
              sessions={sessions}
            />
          </Section>
        </div>
      </div>
    </div>
  )
}
