import { ReactElement } from 'react';
import { View } from './view';
import { useService } from 'services/service';
import { services } from 'services';
import { useRouter } from 'next/router';
import { withLayout } from '@floyd/ui/layout';
import { SignInLayout } from 'components';

function Login(): ReactElement {
  const router = useRouter();
  const { perform: login, error } = useService(services.auth.login);

  async function handleSubmit(params: { email: string, password: string }) {
    try {
      await login({ ...params });
      router.push('/');
    } catch (error) {
    }
  }

  return (
    <View
      onSubmit={handleSubmit}
      error={error}
    />
  )
}

export default withLayout(SignInLayout)(Login);
