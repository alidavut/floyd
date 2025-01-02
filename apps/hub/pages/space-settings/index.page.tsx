import { SpaceSettingsView } from './view';
import { withLayout } from '@floyd/ui/layout';
import { SpaceLayout } from 'components';
import { useSpace } from 'lib/hooks';
import { services } from 'services';
import { useService } from 'services/service';

function SpaceSettings() {
  const space = useSpace();
  const { perform: updateSpace, error, loading } = useService(services.space.update);

  async function handleSubmit(params) {
    try {
      await updateSpace({ id: space.id, ...params });
      alert('Space updated!');
    } catch (error) {
    }
  }

  return (
    <SpaceSettingsView
      space={space}
      onSubmit={handleSubmit}
      error={error}
      loading={loading}
    />
  )
}

export default withLayout(SpaceLayout)(SpaceSettings);
