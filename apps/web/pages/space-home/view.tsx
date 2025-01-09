import { Head } from 'components';
import { EventObject, SpaceObject } from '@floyd/schema/types';
import { EventPicker, Section } from './partials';
import { PiListHeart, PiTicket } from 'react-icons/pi';
import Link from 'next/link';

interface Props {
  space: SpaceObject;
  events: EventObject[];
  event: EventObject;
}

export function SpaceHomeView({ space, events, event }: Props) {
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
          <Section icon={PiTicket} title="Choose your tickets">
            Tickets
          </Section>
        </div>
      </div>
    </div>
  )
}
