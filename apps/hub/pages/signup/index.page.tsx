import { ReactElement } from 'react';
import { View } from './view';
import { SignupParams } from './utils';
import { services } from 'services';
import { useService } from 'services/service';
import { useRouter } from 'next/router';
import { withLayout } from '@floyd/ui/layout';
import { SignInLayout } from 'components';
import bg from './bg.jpg';
import { triggerEvent } from 'lib/analytics';

function Signup(): ReactElement {
  const router = useRouter();

  const { perform: createUser, error, loading } = useService(services.user.create);

  async function handleSubmit(params: SignupParams) {
    try {
      await createUser(params);
      triggerEvent('sign_up');
      router.push('/');
    } catch (error) {
    }
  }

  return (
    <View
      onSubmit={handleSubmit}
      error={error}
      loading={loading}
    />
  )
}

export default withLayout(SignInLayout, { background: bg.src })(Signup);
