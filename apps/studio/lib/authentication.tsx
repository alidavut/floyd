import { ComponentType } from 'react';
import { redirect } from './navigation';

export function withAuth<T>(Component: ComponentType<T>) {
  const NewComponent = (props: T) => <Component {...props} />;

  NewComponent.getInitialProps = async (ctx) => {
    if (!ctx.currentUser) {
      const nextUrl = ctx.asPath === '/' ? '' : `?next=${ctx.asPath}`;
      redirect(`/login${nextUrl}`, ctx.res);
      return {};
    }

    if (Component['getInitialProps']) {
      return await Component['getInitialProps'](ctx);
    }
  }

  return NewComponent;
}
