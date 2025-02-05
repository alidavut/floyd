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
    <label className={cx('block leading-none', fullWidth && 'w-full')}>
      {label && (
        <span className="block font-medium text-[0.925rem] mb-2">{label}</span>
      )}
      <span className="flex transition-all rounded-lg bg-white border overflow-hidden
        focus-within:ring-1 focus-within:ring-bunker-950 focus-within:border-bunker-950">
        {prefix && (
          <span className="flex flex-col">
            {prefix}
          </span>
        )}
        <input
          className="bg-transparent outline-none p-2.5 w-full"
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
