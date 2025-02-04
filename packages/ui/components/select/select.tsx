import cx from 'classnames';

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
  ...rest
}: Props<T>) {
  const selectedIndex = options.findIndex(option => option.value === value) + 1;

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const index = Number(event.target.value) - 1;
    onValueChange?.(options[index].value);
  }

  return (
    <label className={cx('block leading-none', fullWidth && 'w-full')}>
      {label && (
        <span className="block font-medium text-[0.925rem] mb-2">{label}</span>
      )}
      <span className="flex transition-all rounded-lg bg-white border overflow-hidden
        focus-within:ring-1 focus-within:ring-bunker-950 focus-within:border-bunker-950">
        <select
          className="bg-transparent outline-none p-2.5 w-full"
          onChange={handleChange}
          value={selectedIndex.toString()}
          {...rest}
        >
          <option value="0">Select...</option>
          {options.map((option, idx) => (
            <option key={option.value.toString()} value={(idx + 1).toString()}>
              {option.label}
            </option>
          ))}
        </select>
      </span>
      {errors?.map(error => (
        <p key={error} className="text-red-500 text-sm mt-1">
          {error}
        </p>
      ))}
    </label>
  );
}
