import { Html, Tailwind } from '@react-email/components';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <Tailwind>
      <Html lang="en" dir="ltr">
        {children}
      </Html>
    </Tailwind>
  )
}
