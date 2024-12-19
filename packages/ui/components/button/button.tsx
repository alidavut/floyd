import { ReactNode, Ref, forwardRef } from 'react';
import cx from 'classnames';
import { Spinner } from '../spinner/spinner';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large' | 'huge';
  fullWidth?: boolean;
  loading?: boolean;
}

function ButtonComponent({ type='button', variant='contained', size='medium', children, fullWidth, loading, ...rest }: Props, ref: Ref<HTMLButtonElement>) {
  const disabled = rest.disabled || loading;

  return (
    <button
      ref={ref}
      className={cx(
        'font-semibold rounded-full relative transition-all box-border',
        fullWidth && 'w-full',
        disabled && 'opacity-50',
        size === 'small' && 'text-sm px-2 py-1',
        size === 'medium' && 'text-base px-4 py-[0.575rem]',
        size === 'large' && 'text-[1.125rem] px-[1.5rem] py-[0.675rem]',
        size === 'huge' && 'text-[1.375rem] px-[2.25rem] py-[1.0375rem]',
        variant === 'outlined' && 'border border-yellow-950/50 bg-transparent text-yellow-950 ring-yellow-500/10',
        variant === 'outlined' && !disabled && 'hover:bg-yellow-500/5 active:bg-yellow-500/10 hover:ring-[2px]',
        variant === 'contained' && 'bg-yellow-300 text-gray-950 ring-yellow-300',
        variant === 'contained' && !disabled && 'hover:bg-yellow-400 active:bg-yellow-400/80 hover:ring-[3px]',
      )}
      disabled={disabled}
      type={type}
      {...rest}>
      <span className={cx('transition-all', loading && 'opacity-0')}>
        {children}
      </span>
      <span
        className={cx(
          'absolute inset-0 flex justify-center items-center opacity-0 transition-all', loading && 'opacity-100'
        )}>
        <Spinner />
      </span>
    </button>
  )
}

export const Button = forwardRef<HTMLButtonElement, Props>(ButtonComponent);
