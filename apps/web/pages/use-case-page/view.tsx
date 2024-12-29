import { Head } from 'components';
import { UseCasePageContent } from './contents';
import { Hero, ValueProposition } from './partials';
import iconCalendar from './images/icon-calendar.svg';
import iconData from './images/icon-data.svg';
import iconIntegration from './images/icon-grow.svg';
import { GetStarted } from 'pages/home/partials';

interface Props {
  content: UseCasePageContent;
}

export function UseCasePageView({ content }: Props) {
  return (
    <div>
      <Head
        title={`Booking for ${content.title} | Ticketing, Scheduling, and Payments`}
        description={content.description}
        og={{
          title: `Floyd for ${content.title}`,
          description: content.description,
          image: content.image.src
        }}
      />
      <Hero
        title={content.heroTitle}
        description={content.heroDescription}
        image={content.image}
      />
      <ValueProposition
        items={[
          {
            title: 'Effortless Scheduling',
            description: 'Create events, set schedules, and manage bookings with ease.',
            icon: iconCalendar
          },
          {
            title: 'Easy Management',
            description: 'Track attendance, manage payments, and access data in one place.',
            icon: iconData
          },
          {
            title: 'Seamless Integration',
            description: 'Connect with your favorite tools and grow your business.',
            icon: iconIntegration
          }
        ]}
      />
      <GetStarted />
    </div>
  )
}
