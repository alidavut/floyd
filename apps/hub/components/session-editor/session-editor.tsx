import { SessionObject } from '@floyd/schema/types';
import { Input } from '@floyd/ui/components';
import { getInputErrors } from 'lib/errors';
import { useState } from 'react';
import { ServiceError } from 'services/errors';

interface Props {
  onValueChange: (value: Partial<SessionObject>) => void;
  value: Partial<SessionObject>;
  error: ServiceError;
}

export function SessionEditor({ onValueChange, value, error }: Props) {
  const [datetime, setDatetime] = useState({ date: '', time: '' });

  const inputErrors = getInputErrors(error);

  function handleChange(field: 'date' | 'time', value: string) {
    const newDatetime = { ...datetime, [field]: value };

    setDatetime(newDatetime);

    if (newDatetime.date && newDatetime.time) {
      onValueChange({
        startsAt: `${newDatetime.date}T${newDatetime.time}`
      });
    }
  }

  return (
    <div className="space-y-4">
      <Input
        label="Date"
        type="date"
        onValueChange={(date) => handleChange('date', date)}
        value={datetime.date}
        errors={inputErrors?.startsAt}
      />
      <Input
        label="Start time"
        type="time"
        onValueChange={(time) => handleChange('time', time)}
        value={datetime.time}
        errors={inputErrors?.startsAt}
      />
    </div>
  )
}
