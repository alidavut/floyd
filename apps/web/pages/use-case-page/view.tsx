import { Head } from 'components';
import { UseCasePageContent } from './contents';
import { Cover } from './partials';

interface Props {
  content: UseCasePageContent;
}

export function UseCasePageView({ content }: Props) {
  return (
    <div>
      <Head
        title={`Booking for ${content.htmlTitle} | Ticketing, Scheduling, and Payments`}
        description={content.htmlDescription}
        og={{
          title: content.htmlTitle,
          description: content.htmlDescription,
          image: content.image.src
        }}
      />
      <Cover
        title={content.heroTitle}
        description={content.heroDescription}
        image={content.image}
      />
    </div>
  )
}
