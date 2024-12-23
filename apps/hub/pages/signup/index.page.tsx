import { ReactElement, useState } from 'react';
import { View } from './view';
import { SignupParams } from './utils';
import { services } from 'services';
import { useService } from 'services/service';
import { useRouter } from 'next/router';
import { withLayout } from '@floyd/ui/layout';
import { SignInLayout } from 'components';
import bg from './bg.jpg';

function Signup(): ReactElement {
  const router = useRouter();
  const [step, setStep] = useState<'info' | 'verification'>('info');

  const { perform: createUser, error, loading } = useService(services.user.create);

  async function handleSubmit(params: SignupParams) {
    try {
      // await createUser(params);
      // router.push('/');
      setStep('verification');
    } catch (error) {
    }
  }

  return (
    <View
      step={step}
      onSubmit={handleSubmit}
      error={error}
      loading={loading}
    />
  )
}

export default withLayout(SignInLayout, { background: bg.src })(Signup);
