import isBrowser from '@floyd/ui/lib/is-browser';
import { Router } from 'next/router';
import NProgress from 'nprogress';

if (isBrowser) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
}
