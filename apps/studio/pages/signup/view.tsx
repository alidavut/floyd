import { useState } from 'react';
import { Button, Form, Input } from '@floyd/ui/components';
import { SignupParams } from './utils';
import { ServiceError } from 'services/errors';
import { getInputErrors } from 'lib/errors';
import logoDark from '@floyd/ui/assets/images/badge-pure.svg';
import Link from 'next/link';
import { Head } from 'components';

interface Props {
  onSubmit: (params: SignupParams) => void;
  error?: ServiceError;
  loading: boolean;
}

export function View({ onSubmit, error, loading }: Props) {
  const [params, setParams] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const inputErrors = getInputErrors(error);

  return (
    <div className="container py-15">
      <Head
        title="Sign up"
        description="Join Floyd in just a few simple steps."
      />
      <div className="max-w-sm mx-auto space-y-9">
        <div className="text-center">
          <img
            src={logoDark.src}
            className="h-12 rounded-sm mx-auto mb-1.5"
          />
          <h3 className="font-semibold text-[1.825rem] font-heading">
            Create your account
          </h3>
          <p className="text-bunker-600 text-[0.95rem]">
            Join Floyd in just a few simple steps.
          </p>
        </div>
        <Form onSubmit={() => onSubmit(params)} className="space-y-6">
          <div>
            <Input
              label="Email"
              type="email"
              onValueChange={(value) => setParams({ ...params, email: value })}
              value={params.email}
              errors={inputErrors?.email}
            />
          </div>
          <div>
            <Input
              label="Password"
              type="password"
              onValueChange={(value) => setParams({ ...params, password: value })}
              value={params.password}
              errors={inputErrors?.password}
            />
          </div>
          <div>
            <Input
              label="First Name"
              onValueChange={(value) => setParams({ ...params, firstName: value })}
              value={params.firstName}
              errors={inputErrors?.firstName}
            />
          </div>
          <div>
            <Input
              label="Last Name"
              onValueChange={(value) => setParams({ ...params, lastName: value })}
              value={params.lastName}
              errors={inputErrors?.lastName}
            />
          </div>
          <Button type="submit" loading={loading} fullWidth>Sign up</Button>
        </Form>
        <p className="text-center text-bunker-600 text-[0.95rem]">
          Already have an account? <Link href="/login" className="link">Login</Link>
        </p>
        <p className="text-center text-bunker-600 text-sm border-t border-gray-200 border-dashed pt-7">
          By signing up, you acknowledge that you have read and agreed to our{' '}
          <a href="https://floyd.so/about/terms" className="link" target="_blank">Terms of Service</a>{' '}
          and{' '}
          <a href="https://floyd.so/about/privacy" className="link" target="_blank">Privacy Policy</a>.
        </p>
      </div>
    </div>
  )
}
