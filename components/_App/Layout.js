import { Fragment } from 'react';
import Head from 'next/head';
import GoTop from './GoTop';
import TrackingScript from '../../lib/TrackingScript';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <TrackingScript />
      <Head>
        <title>
          Life Aboard Onnie - DIY Refit - Live Aboard -
          Learning to Sail
        </title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta
          name='description'
          content='Life Aboard Onnie - DIY Refit - Live Aboard - Learning to Sail'
        />
        <meta
          name='og:title'
          property='og:title'
          content='Life Aboard Onnie - DIY Refit - Live Aboard - Learning to Sail'></meta>
        <meta
          name='twitter:card'
          content='Life Aboard Onnie - DIY Refit - Live Aboard - Learning to Sail'></meta>
        <link
          rel='canonical'
          href='https://www.mylifeaboard.com/'></link>
      </Head>

      {children}

      <GoTop scrollStepInPx='100' delayInMs='10.50' />
    </Fragment>
  );
};

export default Layout;
