import { withLayout } from '@floyd/ui/layout';
import { Layout } from '../layout/layout';
import { ReactNode } from 'react';
import logo from '@floyd/ui/assets/images/logo-dark.svg';

interface Props {
  children?: ReactNode;
}

function ChannelLayoutComponent({ children }: Props) {
  return (
    <div className="pb-12">
      {children}
      <p className="text-center">
        <a
          href="https://floyd.so"
          className="text-sm opacity-50 hover:opacity-100 flex items-center space-x-1 justify-center transition-all">
          <span>Powered by </span>
          <img src={logo.src} alt="Floyd" className="h-[1.125rem] inline" />
        </a>
      </p>
    </div>
  )
}

export const ChannelLayout = withLayout(Layout, { header: false, footer: false })(ChannelLayoutComponent);
