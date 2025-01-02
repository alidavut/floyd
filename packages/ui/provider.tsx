import { ReactNode } from 'react';
import { PortalProvider } from './components';

interface Props {
  children: ReactNode;
}

export function UIProvider({ children }: Props) {
  return (
    <PortalProvider>
      {children}
    </PortalProvider>
  )
}
