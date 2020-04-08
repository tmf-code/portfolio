import { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
  title: 'TMF Portfolio',
  titleTemplate: '%s | TMF Portfolio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'http://tmf.design/',
    // eslint-disable-next-line @typescript-eslint/camelcase
    site_name: 'TMF Portfolio',
    description: 'A sample of work and play from the art duo TMF',
    images: [
      {
        url: 'http://tmf.design/og-images/og-image-play.png',
        width: 800,
        height: 600,
        alt: 'OG Image Work',
      },
      {
        url: 'http://tmf.design/og-images/og-image-play.png',
        width: 800,
        height: 600,
        alt: 'OG Image Play',
      },
    ],
  },
  twitter: {
    cardType: 'summary',
  },
};

export default SEO;
