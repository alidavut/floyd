import { ChannelCreateView } from './view';
import { useService } from 'services/service';
import { services } from 'services';
import { useRouter } from 'next/router';
import { channel } from '@floyd/schema/inputs';
import { triggerEvent } from 'lib/analytics';
import { useCurrentUser } from 'lib/hooks';

function ChannelCreate() {
  const currentUser = useCurrentUser();
  const router = useRouter();
  const { perform: createCommunity, error, loading } = useService(services.channel.create);

  async function handleSubmit(params: channel.createParams) {
    try {
      const community = await createCommunity(params);
      triggerEvent('channel_create');
      router.push(`/channels/${community.id}`);
    } catch (error) {
    }
  }

  return (
    <ChannelCreateView
      currentUser={currentUser}
      onSubmit={handleSubmit}
      error={error}
      loading={loading}
    />
  )
}

export default ChannelCreate;
