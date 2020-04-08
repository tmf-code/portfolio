import 'modern-normalize';
import { DefaultSeo } from 'next-seo';
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

    return (
      <>
        <DefaultSeo {...SEO} />
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>TMF Portfolio - {router.pathname.split('/').pop()}</title>
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
