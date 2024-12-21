import cx from 'classnames';

interface Props<T extends HTMLInputElement['type']> extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: T;
  prefix?: string;
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
        <span className="block font-medium text-[0.925rem] mb-0.5">{label}</span>
      )}
      <span className="flex">
        {prefix && (
          <span className="block text-gray-500 text-[0.825rem] mb-0.5">{prefix}</span>
        )}
        <input
          className="bg-white transition-all outline-none border rounded-sm p-2 w-full border-gray-300/80
            focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
          onChange={handleChange}
          type={type}
          {...rest}
        />
      </span>
      {errors?.map((error, index) => (
        <div key={index} className="text-sm text-red-600">{error}</div>
      ))}
    </label>
  )
}
