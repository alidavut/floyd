import { SessionObject } from '@floyd/schema/types';
import { Input } from '@floyd/ui/components';
import { getInputErrors } from 'lib/errors';
import { ServiceError } from 'services/errors';

interface Props {
  onValueChange: (value: Partial<SessionObject>) => void;
  value: Partial<SessionObject>;
  error: ServiceError;
}

export function SessionEditor({ onValueChange, value, error }: Props) {
  const inputErrors = getInputErrors(error);

  return (
    <div className="space-y-4">
      <Input
        label="Start Time"
        type="datetime-local"
        onValueChange={(startsAt) => onValueChange({ ...value, startsAt })}
        value={value.startsAt}
        errors={inputErrors?.name}
      />
    </div>
  )
}
