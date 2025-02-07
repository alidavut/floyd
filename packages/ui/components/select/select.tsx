import cx from 'classnames';
import { PiCaretDown } from 'react-icons/pi';

interface Props<T> extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  onValueChange?: (value: T) => void;
  options: { label: string; value: T }[];
  errors?: string[];
  fullWidth?: boolean;
}

export function Select<T>({
  label,
  onValueChange,
  errors,
  fullWidth,
  options,
  value,
  disabled,
  ...rest
}: Props<T>) {
  const selectedIndex = options.findIndex(option => option.value === value) + 1;

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const index = Number(event.target.value) - 1;
    onValueChange?.(options[index].value);
  }

  return (
    <label className={cx('block', fullWidth && 'w-full')}>
      {label && (
        <span className="block font-medium text-[0.925rem] mb-1">{label}</span>
      )}
      <span className="flex transition-all rounded-lg bg-white border border-gray-200 overflow-hidden
        focus-within:ring-1 focus-within:ring-bunker-950 focus-within:border-bunker-950 relative">
        <select
          className={cx(
            'bg-transparent outline-none px-2.5 p-2 w-full appearance-none',
            disabled && 'cursor-not-allowed text-gray-500'
          )}
          onChange={handleChange}
          value={selectedIndex.toString()}
          disabled={disabled}
          {...rest}
        >
          <option value="0">Select...</option>
          {options.map((option, idx) => (
            <option key={option.value.toString()} value={(idx + 1).toString()}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="flex absolute inset-y-0 right-2 items-center pointer-events-none">
          <PiCaretDown className="text-gray-500" />
        </span>
      </span>
      {errors?.map(error => (
        <p key={error} className="text-red-500 text-sm mt-1">
          {error}
        </p>
      ))}
    </label>
  );
}
