import { ReactElement, useState } from 'react';
import { Button, Form, Input } from '@floyd/ui/components';
import { SignupParams } from './utils';
import { ServiceError } from 'services/errors';
import { getInputErrors } from 'lib/errors';

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
      <div className="max-w-md mx-auto border rounded-sm p-3">
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
          <Button type="submit">Sign Up</Button>
        </Form>
      </div>
    </div>
  )
}
