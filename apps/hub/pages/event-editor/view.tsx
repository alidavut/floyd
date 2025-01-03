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
    <div className="container py-15 space-y-6 max-w-4xl">
      <PageHeader
        title={event ? 'Edit Event' : 'Create Event'}
      />

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
              label="Duration (minutes)"
              type="number"
              onValueChange={(duration) => setParams({ ...params, duration })}
              value={params.duration}
              errors={inputErrors?.duration}
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
