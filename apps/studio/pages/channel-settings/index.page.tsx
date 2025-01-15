import { ChannelSettingsView } from './view';
import { withLayout } from '@floyd/ui/layout';
import { ChannelLayout } from 'components';
import { useChannel } from 'lib/hooks';
import { services } from 'services';
import { useService } from 'services/service';

function ChannelSettings() {
  const channel = useChannel();
  const { perform: updateChannel, error, loading } = useService(services.channel.update);

  async function handleSubmit(params) {
    try {
      await updateChannel({ id: channel.id, ...params });
      alert('Channel updated!');
    } catch (error) {
    }
  }

  return (
    <ChannelSettingsView
      channel={channel}
      onSubmit={handleSubmit}
      error={error}
      loading={loading}
    />
  )
}

export default withLayout(ChannelLayout)(ChannelSettings);
