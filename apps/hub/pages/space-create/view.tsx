import { Button, Card, Form, Input } from '@floyd/ui/components';
import { space } from '@floyd/schema/inputs';
import { useState } from 'react';
import { ServiceError } from 'services/errors';
import { getInputErrors } from 'lib/errors';
import { Head } from 'components';
import { UserObject } from '@floyd/schema/types';
import slugify from 'slugify';

interface Props {
  currentUser: UserObject;
  onSubmit: (params: space.createParams) => void;
  error?: ServiceError;
  loading: boolean;
}

export function SpaceCreateView({ currentUser, onSubmit, error, loading }: Props) {
  const exampleHandle = slugify(currentUser.name, { lower: true });

  const [params, setParams] = useState({ handle: '', name: '' });

  const inputErrors = getInputErrors(error);

  function handleHandleChange(value: string) {
    const handle = value.toLowerCase().replace(/[^a-z0-9-]/g, '');
    setParams({ ...params, handle });
  }

  return (
    <div className="container py-15">
      <Head
        title="Create Space"
      />
      <div className="max-w-md mx-auto">
        <Card>
          <Card.Body>
            <h3 className="font-semibold text-[1.75rem] font-serif mb-1.5">
              Create your Space
            </h3>
            <p className="text-bunker-600 text-[0.95rem] mb-6 leading-normal">
              Set up your Space to display and sell your events, manage your team, and personalize your selling tools.
            </p>
            <hr className="my-6" />
            <Form onSubmit={() => onSubmit(params)} className="space-y-6">
              <Input
                label="Space address"
                prefix={(
                  <span className="flex-1 flex items-center px-3 p-2 leading-none bg-gray-50 text-gray-700">
                    floyd.so/
                  </span>
                )}
                placeholder={exampleHandle}
                onValueChange={handleHandleChange}
                value={params.handle}
                errors={inputErrors?.handle}
              />
              <Input
                label="Space name"
                placeholder={`${currentUser.name} Events`}
                value={params.name}
                onValueChange={name => setParams({ ...params, name })}
                errors={inputErrors?.name}
              />
              <Button type="submit" loading={loading} fullWidth>
                Create
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
