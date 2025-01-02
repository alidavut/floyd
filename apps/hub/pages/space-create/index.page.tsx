import { SpaceCreateView } from './view';
import { useService } from 'services/service';
import { services } from 'services';
import { useRouter } from 'next/router';
import { space } from '@floyd/schema/inputs';

function SpaceCreate() {
  const router = useRouter();
  const { perform: createCommunity, error } = useService(services.space.create);

  async function handleSubmit(params: space.createParams) {
    try {
      const community = await createCommunity(params);
      router.push(`/spaces/${community.id}`);
    } catch (error) {
    }
  }

  return (
    <SpaceCreateView
      onSubmit={handleSubmit}
      error={error}
    />
  )
}

export default SpaceCreate;
