import { isBrowser } from '@floyd/ui/lib/is-browser';
import { Router } from 'next/router';
import NProgress from 'nprogress';

if (isBrowser) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
    document.body.classList.add('loading');
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
    document.body.classList.remove('loading');
  });

  Router.events.on('routeChangeError', () => {
    NProgress.done();
    document.body.classList.remove('loading');
  });
}
