import { withLayout } from '@floyd/ui/layout';
import { Layout } from '../layout/layout';
import { ReactNode } from 'react';
import { ChannelObject } from '@floyd/schema/types';
import logo from '@floyd/ui/assets/images/logo-dark.svg';
import { apiClient } from 'lib/client';
import { Header } from './header';

interface Props {
  channel: ChannelObject;
  children?: ReactNode;
}

function ChannelLayoutComponent({ channel, children }: Props) {
  return (
    <div className="pb-12">
      <Header channel={channel} />
      {children}
      <p className="text-center">
        <a
          href="https://floyd.so"
          className="text-sm opacity-50 hover:opacity-100 inline-flex items-center space-x-1 justify-center transition-all">
          <span>Powered by </span>
          <img src={logo.src} alt="Floyd" className="h-[1.125rem] inline" />
        </a>
      </p>
    </div>
  )
}

ChannelLayoutComponent.getInitialProps = async ({ query }) => {
  const handle = query.handle as string;
  const channel = await apiClient.channel.get({ id: handle });

  return { channel };
};

export const ChannelLayout = withLayout(Layout, { header: false, footer: false })(ChannelLayoutComponent);
