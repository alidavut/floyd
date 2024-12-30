import { Head } from 'components';
import Link from 'next/link';
import { UseCasePageContent } from 'pages/use-case-page/contents';
import { PiArrowRightBold } from 'react-icons/pi';

interface Props {
  contents: Record<string, UseCasePageContent>;
}

export function UseCasesView({ contents }: Props) {
  return (
    <div className="container py-18">
      <Head
        title="Who is Floyd for?"
      />
      <div className="mb-12 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-3">Who is Floyd for?</h1>
        <p className="text-gray-800">
          Floyd is for creators, organizers, and businesses who want to create, manage, and grow their events with ease.
          Whether you're hosting a concert, festival, workshop, or webinar, Floyd has the tools to help you succeed.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(contents).map(([key, content]) => (
          <div key={key}>
            <div className="relative h-full pr-1.5 pb-1.5">
              <div className="bg-bunker-950 absolute inset-0 left-1.5 top-1.5 rounded-sm z-0" />
              <div className="relative h-full bg-gray-50 rounded-sm p-6 border border-bunker-950 flex flex-col">
                <div className="flex-1">
                  <img src={content.image.src} alt={content.title} className="w-full aspect-video object-cover rounded-sm" />
                  <h3 className="text-xl font-bold mt-4 mb-1.5">{content.title}</h3>
                  <p className="text-gray-800 mb-3">{content.description}</p>
                </div>
                <Link href={`/for/${key}`} className="text-primary-500 mt-4 flex items-center space-x-1 font-bold">
                  <span>Learn more </span>
                  <PiArrowRightBold />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
