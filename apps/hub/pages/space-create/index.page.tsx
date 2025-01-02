import { SpaceCreateView } from './view';
import { useService } from 'services/service';
import { services } from 'services';
import { useRouter } from 'next/router';
import { space } from '@floyd/schema/inputs';
import { triggerEvent } from 'lib/analytics';
import { useCurrentUser } from 'lib/hooks';

function SpaceCreate() {
  const currentUser = useCurrentUser();
  const router = useRouter();
  const { perform: createCommunity, error, loading } = useService(services.space.create);

  async function handleSubmit(params: space.createParams) {
    try {
      const community = await createCommunity(params);
      triggerEvent('space_create');
      router.push(`/spaces/${community.id}`);
    } catch (error) {
    }
  }

  return (
    <SpaceCreateView
      currentUser={currentUser}
      onSubmit={handleSubmit}
      error={error}
      loading={loading}
    />
  )
}

export default SpaceCreate;
