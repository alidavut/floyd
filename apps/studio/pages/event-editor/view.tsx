import { event } from '@floyd/schema/inputs';
import { ChannelObject, EventObject } from '@floyd/schema/types';
import { Button, Card, Input } from '@floyd/ui/components';
import { ImageInput } from 'components';
import { getInputErrors } from 'lib/errors';
import { useState } from 'react'
import { ServiceError } from 'services/errors';

interface Props {
  channel: ChannelObject;
  event: EventObject;
  onSubmit: (params: event.createParams | event.updateParams) => void;
  error: ServiceError;
  loading: boolean;
}

export function EventEditorView({ channel, event, onSubmit, error, loading }: Props) {
  const [params, setParams] = useState<event.createParams | event.updateParams>(event || {});

  const inputErrors = getInputErrors(error);

  function handleSubmit() {
    onSubmit(params);
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <div className="space-y-6">
            <ImageInput
              label="Event Image"
              channelId={channel.id}
              onValueChange={(image) => setParams({ ...params, image })}
              value={params.image}
            />

            <Input
              label="Event title"
              onValueChange={(title) => setParams({ ...params, title })}
              value={params.title}
              errors={inputErrors?.title}
            />

            <Input
              label="Slug"
              onValueChange={(slug) => setParams({ ...params, slug })}
              value={params.slug}
              errors={inputErrors?.slug}
            />

            <Input
              label="Description"
              onValueChange={(description) => setParams({ ...params, description })}
              value={params.description}
              errors={inputErrors?.description}
            />

            <Input
              label="Start date"
              type="datetime-local"
              onValueChange={(startsAt) => setParams({ ...params, startsAt })}
              value={params.startsAt}
              errors={inputErrors?.startsAt}
            />

            <Button onClick={handleSubmit} loading={loading} fullWidth>
              Save Event
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
