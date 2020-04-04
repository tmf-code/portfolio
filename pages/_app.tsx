import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';

import 'modern-normalize';
import '../styles/styles.css';
import { HeaderBar } from '../components/header-bar';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FooterBar } from '../components/footer-bar';

export default class MyApp extends App {
  public render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Next.js TypeScript Quickstart</title>
        </Head>
        <HeaderBar pathname={router.pathname}></HeaderBar>
        <Component {...pageProps} />
        <FooterBar></FooterBar>
      </>
    );
  }
}
