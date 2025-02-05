import { ReactNode } from 'react';
import cx from 'classnames';

interface Props<T extends HTMLInputElement['type']> extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  label?: string;
  type?: T;
  prefix?: string | ReactNode;
  onValueChange?: (value: T extends 'number' ? number : string) => void;
  errors?: string[];
  fullWidth?: boolean;
}

export function Input<T extends HTMLInputElement['type']>({ label, onValueChange, errors, fullWidth, type, prefix, ...rest }: Props<T>) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (type === 'number') {
      return onValueChange?.(parseFloat(event.target.value) as any);
    } else {
      onValueChange?.(event.target.value as any);
    }
  }

  return (
    <label className={cx('block', fullWidth && 'w-full')}>
      {label && (
        <span className="block font-medium text-[0.925rem] mb-1">{label}</span>
      )}
      <span className="flex transition-all rounded-lg bg-white border border-gray-200 overflow-hidden
        focus-within:ring-1 focus-within:ring-gray-900 focus-within:border-gray-900">
        {prefix && (
          <span className="flex flex-col">
            {prefix}
          </span>
        )}
        <input
          className="bg-transparent outline-none px-2.5 p-2 w-full"
          onChange={handleChange}
          type={type}
          {...rest}
        />
      </span>
      {errors?.length > 0 && (
        <div className="text-sm text-red-600 pt-1.5 px-1.5">
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </label>
  )
}
