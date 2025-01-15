import { Head } from 'components';
import { ChannelObject } from '@floyd/schema/types';

interface Props {
  channel: ChannelObject;
}

export function ChannelHomeView({ channel }: Props) {
  return (
    <div className="pt-24">
      <Head
        title={channel.name}
        description={`Channel for ${channel.name} on Floyd`}
      />
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-semibold text-center mb-6 font-serif">
          {channel.name}
        </h1>
        <div className="bg-white p-12 text-center rounded-sm text-bunker-950/50 mb-12">
          No events yet
        </div>
      </div>
    </div>
  )
}
