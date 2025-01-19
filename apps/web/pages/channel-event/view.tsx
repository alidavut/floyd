import { Head } from 'components';
import { EventObject } from '@floyd/schema/types';
import { Button, Imgix } from '@floyd/ui/components';

interface Props {
  event: EventObject;
}

export function ChannelEventView({ event }: Props) {
  return (
    <div>
      <Head
        title={event.title}
        description={event.description}
      />
      <div className="container max-wxl">
        <h1 className="text-4xl font-bold mb-6">
          {event.title}
        </h1>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <Imgix src={event.image} alt={event.title} className="aspect-video object-cover rounded-sm" />
          </div>
          <div>
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-lg font-semibold mb-3">
                Details
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold">Starts At:</span> {event.startsAt}
                </div>
                <div>
                  <span className="font-semibold">Created At:</span> {event.createdAt}
                </div>
              </div>
              <Button fullWidth>
                Buy Tickets
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
