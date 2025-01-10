import { withLayout } from '@floyd/ui/layout';
import { ChannelHomeView } from './view';
import { apiClient } from 'lib/client';
import { ChannelObject } from '@floyd/schema/types';
import { ChannelLayout } from 'components';

function ChannelHome({ channel }: { channel: ChannelObject }) {
  return (
    <ChannelHomeView
      channel={channel}
    />
  )
}

ChannelHome.getInitialProps = async ({ query }) => {
  const handle = query.handle as string;
  const channel = await apiClient.channel.get({ id: handle });

  return { channel };
};

export default withLayout(ChannelLayout)(ChannelHome);
