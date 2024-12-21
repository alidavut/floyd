import { Head } from 'components';
import { Cover, Features, GetStarted } from './partials';

export function HomeView() {
  return (
    <div>
      <Head
        title="Floyd - Booking mastery, made for frontiers"
        description="Floyd provides a booking system for events and experiences. Accept bookings, manage schedules,
          and monetize events in minutes."
        titlePure
      />
      <Cover />
      <Features />
      <GetStarted />
    </div>
  )
}
