import { Button, Card, Form, Input } from '@floyd/ui/components';
import { space } from '@floyd/schema/inputs';
import { useState } from 'react';
import { ServiceError } from 'services/errors';
import { getInputErrors } from 'lib/errors';

interface Props {
  onSubmit: (params: space.createParams) => void;
  error?: ServiceError;
}

export function SpaceCreateView({ onSubmit, error }: Props) {
  const [params, setParams] = useState({ handle: '', name: '' });

  const inputErrors = getInputErrors(error);

  function handleHandleChange(value: string) {
    const handle = value.toLowerCase().replace(/[^a-z0-9-]/g, '');
    setParams({ ...params, handle });
  }

  return (
    <div className="container py-15">
      <div className="max-w-md mx-auto">
        <Card>
          <Card.Header>Create Space</Card.Header>
          <Card.Body>
            <Form onSubmit={() => onSubmit(params)} className="space-y-6">
              <Input
                label="Space address"
                prefix={(
                  <span className="flex-1 flex items-center px-3 p-2 leading-none bg-gray-50 text-gray-700">
                    floyd.so/
                  </span>
                )}
                placeholder="username"
                onValueChange={handleHandleChange}
                value={params.handle}
                errors={inputErrors?.handle}
              />
              <Input
                label="Space name"
                value={params.name}
                onValueChange={name => setParams({ ...params, name })}
                errors={inputErrors?.name}
              />
              <Button type="submit">Create</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
