import { SpaceObject } from '@floyd/schema/types';
import { Button, Input } from '@floyd/ui/components';
import { PageHeader } from 'components';
import { getInputErrors } from 'lib/errors';
import { useState } from 'react';
import { ServiceError } from 'services/errors';

interface Props {
  space: SpaceObject;
  onSubmit: (params: Partial<SpaceObject>) => void;
  error: ServiceError;
  loading: boolean;
}

export function SpaceSettingsView({ space, onSubmit, error, loading }: Props) {
  const [params, setParams] = useState<Partial<SpaceObject>>({
    ...space
  });

  const inputErrors = getInputErrors(error);

  return (
    <div className="container max-w-4xl space-y-6 py-12">
      <PageHeader
        title="Settings"
      />
      <div className="p-6 bg-white rounded-sm space-y-6">
        <Input
          label="Handle"
          prefix={(
            <span className="flex-1 flex items-center px-3 p-2 leading-none bg-gray-50 text-gray-700">
              floyd.so/
            </span>
          )}
          onValueChange={value => setParams({ ...params, handle: value })}
          value={params.handle}
          errors={inputErrors?.handle}
        />
        <Input
          label="Name"
          onValueChange={value => setParams({ ...params, name: value })}
          value={params.name}
          errors={inputErrors?.name}
        />
        <Button onClick={() => onSubmit(params)} loading={loading} fullWidth>
          Update Space
        </Button>
      </div>
    </div>
  )
}