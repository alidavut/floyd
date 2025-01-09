import { EventObject } from '@floyd/schema/types';
import { Button, Card, Input } from '@floyd/ui/components';
import { PageHeader } from 'components';
import { getInputErrors } from 'lib/errors';
import { useState } from 'react'
import { ServiceError } from 'services/errors';

interface Props {
  event: EventObject;
  onSubmit: (params: Partial<EventObject>) => void;
  error: ServiceError;
  loading: boolean;
}

export function EventEditorView({ event, onSubmit, error, loading }: Props) {
  const [params, setParams] = useState<Partial<EventObject>>(event || {});

  const inputErrors = getInputErrors(error);

  function handleSubmit() {
    onSubmit(params);
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <div className="space-y-6">
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
              onValueChange={(startsAt) => setParams({ ...params, startsAt })}
              value={params.startsAt}
              errors={inputErrors?.startsAt}
            />

            <Input
              label="End date"
              onValueChange={(endsAt) => setParams({ ...params, endsAt })}
              value={params.endsAt}
              errors={inputErrors?.endsAt}
            />

            <Input
              label="Time zone"
              onValueChange={(timeZone) => setParams({ ...params, timeZone })}
              value={params.timeZone}
              errors={inputErrors?.timeZone}
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
