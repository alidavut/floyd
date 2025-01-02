import { ReactNode } from 'react';

interface Props {
  title: string;
  actions?: ReactNode;
}

export function PageHeader({ title, actions }: Props) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-[1.675rem] font-semibold font-serif">{title}</h1>
      <div>
        {actions}
      </div>
    </div>
  )
}
