import { StaticImageData } from 'next/image';
import { images } from './images';

export interface UseCasePageContent {
  image: StaticImageData;
  htmlTitle: string;
  htmlDescription: string;
  heroTitle: string;
  heroDescription: string;
}

export const contents: Record<string, UseCasePageContent> = {
  'yoga-instructors': {
    image: images.yoga,
    htmlTitle: 'Yoga Instructors',
    htmlDescription: 'Yoga instructors can use Floyd to manage their classes, students, and payments.',
    heroTitle: 'Yoga, Simplified. Bookings, Mastered.',
    heroDescription: `Whether you teach yoga in a studio, online, or at events, Floyd makes managing your classes and
      bookings effortless. Accept reservations, track schedules, and grow your practice in just a few clicks. Perfect
      for instructors who want to focus on teaching, not logistics.`
  }
}
