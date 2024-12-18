import React, { ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props): ReactElement {
  return (
    <div className="flex flex-col min-h-screen antialiased">
      {children}
    </div>
  )
}
