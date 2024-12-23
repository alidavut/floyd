import { ReactElement, useState } from 'react';
import { Button, Form, Input } from '@floyd/ui/components';
import { SignupParams } from './utils';
import { ServiceError } from 'services/errors';
import { getInputErrors } from 'lib/errors';
import logoDark from '@floyd/ui/assets/images/badge-pure.svg';

interface Props {
  onSubmit: (params: SignupParams) => void;
  error?: ServiceError;
}

export function View({ error, onSubmit }: Props): ReactElement {
  const [params, setParams] = useState({
    handle: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const inputErrors = getInputErrors(error);

  return (
    <div className="container py-16">
      <div className="max-w-sm mx-auto space-y-9">
        <div className="text-center">
          <img
            src={logoDark.src}
            className="h-14 rounded-sm mx-auto mb-1.5"
          />
          <h3 className="font-semibold text-[1.825rem] font-serif">
            Create your account
          </h3>
          <p className="text-bunker-600 text-[0.95rem]">
            Already have an account? <a href="/login" className="link">Login</a>
          </p>
        </div>
        <Form onSubmit={() => onSubmit(params)} className="space-y-5">
          <div>
            <Input
              label="Username"
              prefix="https://floyd.so/"
              onValueChange={(value) => setParams({ ...params, handle: value })}
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
          <Button type="submit" fullWidth>Sign up</Button>
        </Form>
        <p className="text-center text-bunker-600 text-sm border-t border-dashed pt-6 mt-6">
          By signing up, you acknowledge that you have read and agreed to our{' '}
          <a href="/terms" className="link">Terms of Service</a> and <a href="/privacy" className="link">Privacy Policy</a>.
        </p>
      </div>
    </div>
  )
}
