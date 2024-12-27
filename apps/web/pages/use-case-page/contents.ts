import { StaticImageData } from 'next/image';
import { images } from './images';

export interface UseCasePageContent {
  image: StaticImageData;
  title: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
}

export const contents: Record<string, UseCasePageContent> = {
  'concerts': {
    image: images.concert,
    title: 'Concerts',
    description: 'Concert organizers can use Floyd to manage their events, attendees, and payments.',
    heroTitle: 'Concerts, Perfected. Ticketing, Simplified.',
    heroDescription: `From music festivals to live shows, Floyd helps you manage your concerts with ease. Accept
      reservations, track schedules, and monetize your events in minutes. Perfect for organizers who want to focus on
      creating, not logistics.`
  },
  'yoga-instructors': {
    image: images.yoga,
    title: 'Yoga Instructors',
    description: 'Yoga instructors can use Floyd to manage their classes, students, and payments.',
    heroTitle: 'Yoga, Simplified. Bookings, Mastered.',
    heroDescription: `Whether you teach yoga in a studio, online, or at events, Floyd makes managing your classes and
      bookings effortless. Accept reservations, track schedules, and grow your practice in just a few clicks. Perfect
      for instructors who want to focus on teaching, not logistics.`
  },
  'workshops': {
    image: images.workshop,
    title: 'Workshops',
    description: 'Workshop organizers can use Floyd to manage their events, attendees, and payments.',
    heroTitle: 'Workshops, Perfected. Scheduling, Simplified.',
    heroDescription: `From art classes to cooking workshops, Floyd helps you manage your events with ease. Accept
      reservations, track schedules, and monetize your workshops in minutes. Perfect for organizers who want to focus
      on creating, not logistics.`
  }
}
