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
        title={content.htmlTitle}
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
            title: 'Effortless Event Setup',
            description: 'Create events, set schedules, and start selling tickets in minutes—no technical skills required.',
            icon: iconCalendar
          },
          {
            title: 'All-in-One Control',
            description: 'Manage bookings, track attendance, and get paid—all from one intuitive platform.',
            icon: iconData
          },
          {
            title: 'Built to Grow with You',
            description: 'Scale your business effortlessly with Floyd’s tools for ticketing, streaming, and payouts.',
            icon: iconIntegration
          }
        ]}
      />
      <GetStarted />
    </div>
  )
}
