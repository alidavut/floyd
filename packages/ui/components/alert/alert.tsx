import cx from 'classnames';
import { ReactNode } from 'react';
import { PiWarning } from 'react-icons/pi';

interface Props {
  title?: string;
  description: string | ReactNode;
  color: 'error' | 'warning';
}

const COLOR_MAP = {
  warning: 'bg-amber-700/10',
  error: 'bg-rose-700/10'
};

const ICON_BG_MAP = {
  warning: 'bg-amber-700/50',
  error: 'bg-rose-700/50'
};

const ICON_MAP = {
  warning: PiWarning,
  error: PiWarning
};

export function Alert({ title, description, color }: Props) {
  const Icon = ICON_MAP[color];

  const rootClassName = cx(
    'flex rounded-lg p-4 space-x-4',
    COLOR_MAP[color]
  );

  return (
    <div className={rootClassName}>
      <div className={cx(ICON_BG_MAP[color], 'flex items-center justify-center w-7 h-7 rounded-lg')}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div className="flex-1 space-y-2">
        {title && <h3 className="font-semibold leading-none">{title}</h3>}
        <div className="text-sm leading-none">{description}</div>
      </div>
    </div>
  )
}
