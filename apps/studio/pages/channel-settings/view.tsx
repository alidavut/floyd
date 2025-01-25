import { ChannelObject } from '@floyd/schema/types';
import { Button, Input } from '@floyd/ui/components';
import { PageHeader } from 'components';
import { getInputErrors } from 'lib/errors';
import Link from 'next/link';
import { useState } from 'react';
import { ServiceError } from 'services/errors';

interface Props {
  channel: ChannelObject;
  onSubmit: (params: Partial<ChannelObject>) => void;
  error: ServiceError;
  loading: boolean;
}

export function ChannelSettingsView({ channel, onSubmit, error, loading }: Props) {
  const [params, setParams] = useState<Partial<ChannelObject>>({
    ...channel
  });

  const inputErrors = getInputErrors(error);

  return (
    <div className="container max-w-4xl space-y-6 py-12">
      <PageHeader
        title="Settings"
      />
      <div className="p-6 bg-white rounded-2xl space-y-6">
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
        <p>
          <Link href={`/channels/${channel.id}/stripe/setup`} className="link">
            Connect Stripe
          </Link>
        </p>
        <Button onClick={() => onSubmit(params)} loading={loading} fullWidth>
          Update Channel
        </Button>
      </div>
    </div>
  )
}
