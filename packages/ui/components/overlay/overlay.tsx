import { ReactElement } from 'react';
import cx from 'classnames';

interface Props {
  active?: boolean;
  onClick?: () => void;
}

export function Overlay({ active=true, onClick }: Props): ReactElement {
  return (
    <div
      className={cx(
        'absolute inset-0 bg-black/50 flex justify-center items-center backdrop-blur-[1px]',
        active ? 'animate-fade-in' : 'animate-fade-out'
      )}
      onClick={onClick}
    />
  )
}
