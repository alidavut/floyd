import { ReactElement, useState } from 'react';
import { Alert, Button, Form, Input } from '@floyd/ui/components';
import { ServiceError } from 'services/errors';
import { getInputErrors } from 'lib/errors';
import { Head } from 'components';
import logoDark from '@floyd/ui/assets/images/badge.svg';

interface Props {
  onSubmit: (params: { email: string, password: string }) => void;
  error?: ServiceError;
}

export function View({ error, onSubmit }: Props): ReactElement {
  const [params, setParams] = useState({ email: '', password: '' });
  const inputErrors = getInputErrors(error);

  return (
    <div className="container py-36">
      <Head
        title="Login"
      />
      <div className="max-w-sm mx-auto space-y-9">
        <div className="text-center">
          <img
            src={logoDark.src}
            className="h-12 rounded-md mx-auto mb-1.5"
          />
          <h3 className="font-bold text-[1.675rem]">
            Welcome Back
          </h3>
          <p className="text-gray-500 text-[0.925rem]">
            Good to see you again 👋
          </p>
        </div>
        {error && !inputErrors && (
          <Alert color="error" description={error.message} />
        )}
        <div className="bg-white p-6 rounded-md">
          <Form onSubmit={() => onSubmit(params)} className="space-y-6">
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
            <Button type="submit" fullWidth>Login</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}