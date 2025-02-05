import './global.scss';
import './initialize';
import App, { AppContext } from 'next/app';
import { createStore, getStore } from 'store';
import { Fragment, useEffect } from 'react';
import { Provider } from 'hacksaw-react';
import { isBrowser } from '@floyd/ui/lib/is-browser';
import { services } from 'services';
import Head from 'next/head';
import favicon from '@floyd/ui/assets/images/badge.svg';
import Script from 'next/script';
import { UIProvider } from '@floyd/ui/provider';

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
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&family=Space+Grotesk:wght@300..700&display=swap"
        />
      </Head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
        `}
      </Script>
      <UIProvider>
        <Provider storeMap={storeMap}>
          <Component {...pageProps} />
        </Provider>
      </UIProvider>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }} />
      </noscript>
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
