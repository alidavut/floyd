import { ReactElement } from 'react';
import { View } from './view';
import { useService } from 'services/service';
import { services } from 'services';
import { useRouter } from 'next/router';
import { withLayout } from '@floyd/ui/layout';
import { SignInLayout } from 'components';
import bg from './bg.jpg';
import { triggerEvent } from 'lib/analytics';

function Login(): ReactElement {
  const router = useRouter();
  const { perform: login, error, loading } = useService(services.auth.login);

  async function handleSubmit(params: { email: string, password: string }) {
    try {
      await login({ ...params });
      triggerEvent('login');
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

export default withLayout(SignInLayout, { background: bg.src })(Login);
