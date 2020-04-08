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
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{pageSEO.title} | TMF Portfolio</title>
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
