import { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface Props {
  icon: IconType;
  title: string;
  actions?: ReactNode;
  children: ReactNode;
}

export function Section({ icon, title, actions, children }: Props) {
  const Icon = icon;

  return (
    <div className="bg-white/70 rounded-xl p-4.5 shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h2 className="flex items-center text-[1.05rem] font-medium leading-none">
          {icon && <Icon className="inline-block w-5 h-5 mr-1.5" />}
          {title}
        </h2>
        <div>
          {actions}
        </div>
      </div>
      {children}
    </div>
  )
}
