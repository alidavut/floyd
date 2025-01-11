import { useState } from 'react';
import { Alert, Button, Form, Input } from '@floyd/ui/components';
import { ServiceError } from 'services/errors';
import { getInputErrors } from 'lib/errors';
import { Head } from 'components';
import logoDark from '@floyd/ui/assets/images/badge-pure.svg';
import Link from 'next/link';

interface Props {
  onSubmit: (params: { email: string, password: string }) => void;
  error?: ServiceError;
  loading: boolean;
}

export function View({ error, onSubmit, loading }: Props) {
  const [params, setParams] = useState({ email: '', password: '' });
  const inputErrors = getInputErrors(error);

  return (
    <div className="container py-15">
      <Head
        title="Login"
      />
      <div className="max-w-sm mx-auto space-y-9">
        <div className="text-center">
          <img
            src={logoDark.src}
            className="h-14 rounded-sm mx-auto mb-1.5"
          />
          <h3 className="font-semibold text-[1.825rem] font-serif">
            Welcome Back
          </h3>
          <p className="text-bunker-600 text-[0.95rem]">
            Good to see you again 👋
          </p>
        </div>
        {error && !inputErrors && (
          <Alert color="error" description={error.message} />
        )}
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
          <Button type="submit" loading={loading} fullWidth>Login</Button>
        </Form>
        <p className="text-center text-bunker-600 text-[0.95rem]">
          Don't have an account? <Link href="/signup" className="link">Sign up</Link>
        </p>
      </div>
    </div>
  )
}
