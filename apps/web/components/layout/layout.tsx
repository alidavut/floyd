import { ComponentProps, ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface Props {
  children?: ReactNode;
  header?: false | ComponentProps<typeof Header>;
  footer?: false;
}

export function Layout({ children, header, footer }: Props) {
  return (
    <div className="min-h-screen flex flex-col antialiased">
      {header !== false && (
        <Header
          {...header}
        />
      )}
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      {footer !== false && <Footer />}
    </div>
  )
}
