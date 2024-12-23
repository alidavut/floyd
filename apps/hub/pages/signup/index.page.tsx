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
  const [otpKey, setOtpKey] = useState<string | null>(null);

  const { perform: createUser, error: errorCreate, loading: loadingCreate } = useService(services.user.create);
  const { perform: sendOtp, error: errorOTP, loading: loadingOTP } = useService(services.auth.sendOtp);

  async function handleSubmit(params: SignupParams) {
    try {
      if (step === 'info') {
        try {
          await createUser({ ...params });
        } catch(error) {
          if (error.issues[0].path[0] !== 'otpKey') {
            throw error;
          }
        }
        const { key } = await sendOtp(params);
        setOtpKey(key);
        setStep('verification');
      } else {
        await createUser({ ...params, otpKey });
        router.push('/');
      }
    } catch (error) {
    }
  }

  return (
    <View
      step={step}
      onSubmit={handleSubmit}
      error={errorCreate || errorOTP}
      loading={loadingCreate || loadingOTP}
    />
  )
}

export default withLayout(SignInLayout, { background: bg.src })(Signup);
