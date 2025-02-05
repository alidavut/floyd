import { ReactNode } from 'react';
import cx from 'classnames';

interface Props {
  title: string;
  className?: string;
  actions?: ReactNode;
}

export function PageHeader({ title, className, actions }: Props) {
  const rootClassName = cx(
    'flex justify-between items-center',
    className
  );
  return (
    <div className={rootClassName}>
      <h1 className="text-[1.675rem] font-bold font-heading">{title}</h1>
      <div>
        {actions}
      </div>
    </div>
  )
}
