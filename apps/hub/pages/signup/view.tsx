import { Fragment, useState } from 'react';
import { Button, Form, Input } from '@floyd/ui/components';
import { SignupParams } from './utils';
import { ServiceError } from 'services/errors';
import { getInputErrors } from 'lib/errors';
import logoDark from '@floyd/ui/assets/images/badge-pure.svg';
import Link from 'next/link';

interface Props {
  step: 'info' | 'verification';
  onSubmit: (params: SignupParams) => void;
  error?: ServiceError;
  loading: boolean;
}

export function View({ step, onSubmit, error, loading }: Props) {
  const [params, setParams] = useState({
    handle: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const inputErrors = getInputErrors(error);

  function handleHandleChange(value: string) {
    const handle = value.toLowerCase().replace(/[^a-z0-9-]/g, '');
    setParams({ ...params, handle });
  }

  return (
    <div className="container py-15">
      <div className="max-w-sm mx-auto space-y-9">
        <div className="text-center">
          <img
            src={logoDark.src}
            className="h-12 rounded-sm mx-auto mb-1.5"
          />
          <h3 className="font-semibold text-[1.825rem] font-serif">
            {step === 'info' ? 'Create your account' : 'Verify your email'}
          </h3>
          <p className="text-bunker-600 text-[0.95rem]">
            {
              step === 'info' ? 'Join Floyd in just a few simple steps.':
                `We have sent you a verification code to ${params.email}. Please enter the code below to verify your
                  email.`
            }
          </p>
        </div>
        {step === 'info' && (
          <Fragment>
            <Form onSubmit={() => onSubmit(params)} className="space-y-6">
              <div>
                <Input
                  label="Page address"
                  prefix={(
                    <span className="flex-1 flex items-center px-3 p-2 leading-none bg-gray-50 text-gray-700">
                      floyd.so/
                    </span>
                  )}
                  placeholder="username"
                  onValueChange={handleHandleChange}
                  value={params.handle}
                  errors={inputErrors?.handle}
                />
              </div>
              <div>
                <Input
                  label="Email"
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
            <p className="text-center text-bunker-600 text-sm border-t border-dashed pt-7">
              By signing up, you acknowledge that you have read and agreed to our{' '}
              <a href="https://floyd.so/about/terms" className="link" target="_blank">Terms of Service</a>{' '}
              and{' '}
              <a href="https://floyd.so/about/privacy" className="link" target="_blank">Privacy Policy</a>.
            </p>
          </Fragment>
        )}
        {step === 'verification' && (
            <Form onSubmit={() => onSubmit(params)} className="space-y-6">
              <Input
                label="Verification code"
                placeholder="Enter the code we sent to your email"
              />
              <Button type="submit" fullWidth>Verify</Button>
            </Form>
        )}
      </div>
    </div>
  )
}
