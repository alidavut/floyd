import './global.scss';
import './initialize';
import App, { AppContext } from 'next/app';
import { createStore, getStore } from 'store';
import { Fragment, useEffect } from 'react';
import { Provider } from 'hacksaw-react';
import isBrowser from '@floyd/ui/lib/is-browser';
import { services } from 'services';
import Head from 'next/head';
import favicon from '@floyd/ui/assets/images/badge.svg';

export default function MyApp({ Component, pageProps, storeData }) {
  const storeMap = isBrowser ? getStore(storeData) : createStore(storeData);

  useEffect(() => {
    services.auth.initialize(null, { storeMap });
  }, []);

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href={favicon.src} key="favicon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Source+Code+Pro:ital,wght@0,100..700;1,100..700&display=swap"
        />
      </Head>
      <Provider storeMap={storeMap}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const isServer = !!appContext.ctx.req;
  const storeMap = isServer ? createStore() : getStore();
  const currentUser = storeMap.users.context('global').first;

  appContext.ctx.storeMap = storeMap;

  if (!currentUser) {
    await services.auth.initialize(null, { storeMap, pageContext: appContext.ctx });
  }

  appContext.ctx.currentUser = storeMap.users.context('global').first;
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, storeData: isServer && storeMap?.export?.() };
}
