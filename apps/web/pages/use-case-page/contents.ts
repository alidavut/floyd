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
    heroTitle: 'Sell tickets for your concerts effortlessly',
    heroDescription: `From music festivals to live shows, Floyd helps you manage your concerts with ease. Accept
      reservations, track schedules, and monetize your events in minutes. Perfect for organizers who want to focus on
      creating, not logistics.`,
  },
  'festivals': {
    image: images.festival,
    title: 'Festivals',
    description: 'Festival organizers can use Floyd to manage their events, attendees, and payments.',
    heroTitle: 'Your festival, elevated. Bookings, simplified.',
    heroDescription: `From music festivals to food fairs, Floyd transforms how you manage your event. Easily sell
      tickets, keep track of attendance, and create unforgettable moments. Perfect for organizers who want to focus
      on the experience, not the logistics.`
  },
  'yoga-instructors': {
    image: images.yoga,
    title: 'Yoga Instructors',
    description: 'Yoga instructors can use Floyd to manage their classes, students, and payments.',
    heroTitle: 'Simplify bookings for your yoga classes',
    heroDescription: `Whether you teach Vinyasa, Hatha, or private sessions, Floyd helps you manage your yoga practice.
      Accept class registrations, streamline scheduling, and get paid instantly. Ideal for instructors ready to take
      their practice to the next level.`
  },
  'theaters': {
    image: images.theater,
    title: 'Theaters',
    description: 'Theater organizers can use Floyd to manage their events, attendees, and payments.',
    heroTitle: 'Your theater\'s stage, their favorite seat.',
    heroDescription: `From local playhouses to grand performance halls, Floyd helps you manage ticket sales, coordinate
      schedules, and enhance audience experiences. Accept bookings, simplify management, and focus on delivering
      unforgettable performances. Perfect for theater managers looking to elevate their operations.`
  },
  'webinars': {
    image: images.webinar,
    title: 'Webinars',
    description: `Host and manage your webinars effortlessly with Floyd. Take registrations, organize schedules, and
      get paid seamlessly.`,
    heroTitle: 'Seamless webinar scheduling, made simple',
    heroDescription: `Deliver engaging webinars without the hassle of managing attendees. Floyd simplifies your process,
      allowing you to accept registrations, organize schedules, and monetize your sessions in minutes. Perfect for
      creators, educators, and professionals who want to focus on their content.`
  },
  'workshops': {
    image: images.workshop,
    title: 'Workshops',
    description: 'Workshop organizers can use Floyd to manage their events, attendees, and payments.',
    heroTitle: 'Simplify workshop registrations and payments',
    heroDescription: `Whether you're leading a creative workshop, technical seminar, or corporate training, Floyd
    quips you to manage attendees, schedule events, and process payments effortlessly. Perfect for facilitators ready
    to focus on what matters—creating impactful learning experiences.`
  },
  'conferences': {
    image: images.conference,
    title: 'Conferences',
    description: 'Conference organizers can use Floyd to manage their events, attendees, and payments.',
    heroTitle: 'Seamless ticketing for conferences',
    heroDescription: `Whether you're hosting an intimate seminar or a global convention, Floyd empowers you to manage
      your conference effortlessly. Handle registrations, schedule sessions, and collect payments—all in one platform.
      Built for event pioneers ready to elevate their impact.`
  }
}
