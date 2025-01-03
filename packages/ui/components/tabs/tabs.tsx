import Link from 'next/link';
import { ReactNode } from 'react';
import cx from 'classnames';

interface TabsProps {
  children: ReactNode;
  className?: string;
}

export function Tabs({ children, className }: TabsProps) {
  const rootClassName = cx(
    'flex space-x-6 border-b border-b-gray-200',
    className
  );

  return (
    <ul className={rootClassName}>
      {children}
    </ul>
  )
}

interface TabItemProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export function TabItem({ children, href, onClick, active }: TabItemProps) {
  const Component = href ? Link : 'a';

  const className = cx(
    'block relative font-medium text-[0.975rem]',
    active ? 'text-purple-500' : 'text-bunker-500'
  );

  return (
    <li>
      <Component href={href} onClick={onClick} className={className}>
        <span className="block pb-2.5">{children}</span>
        {active && (
          <span className="absolute left-0 right-0 -bottom-[1.5px] border-b-[2px] border-purple-500" />
        )}
      </Component>
    </li>
  )
}
