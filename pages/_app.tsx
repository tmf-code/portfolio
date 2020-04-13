import 'modern-normalize';
import { DefaultSeo, NextSeoProps } from 'next-seo';
import App from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { FooterBar } from '../components/footer-bar';
import { HeaderBar } from '../components/header-bar';
import SEO from '../next-seo.config';
import '../styles/styles.scss';

export default class MyApp extends App {
  public render() {
    const { Component, pageProps, router } = this.props;

    const currentPage = router.pathname.split('/').pop();
    const pageName = currentPage === '' ? 'home' : currentPage;

    const pageSEO: NextSeoProps = {
      ...SEO,
      title: pageName,
    };

    return (
      <>
        <DefaultSeo {...pageSEO} />
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="A sample of work and play from the art duo TMF" />
          <title>{pageSEO.title} | TMF Portfolio</title>
          <script
            data-goatcounter="https://tmfportfolio.goatcounter.com/count"
            async
            src="//gc.zgo.at/count.js"
          ></script>
        </Head>
        <div className="page-content">
          <HeaderBar pathname={router.pathname}></HeaderBar>
          <Component {...pageProps} />
          <FooterBar></FooterBar>
        </div>
      </>
    );
  }
}
