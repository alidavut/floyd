import { ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Card({ children }: Props): ReactElement {
  return (
    <div className="bg-white rounded-2xl border border-gray-100">
      {children}
    </div>
  )
}

function Body({ children }: Props): ReactElement {
  return (
    <div className="p-6">
      {children}
    </div>
  )
}

function Header({ children }: Props): ReactElement {
  return (
    <div className="p-4 border-b border-gray-100">
      {children}
    </div>
  )
}

function Footer({ children }: Props): ReactElement {
  return (
    <div className="p-4 border-t border-gray-200">
      {children}
    </div>
  )
}

Card.Body = Body;
Card.Header = Header;
Card.Footer = Footer;
