import Package from '@root/package.json';
import styles from '@components/DefaultLayout.module.scss';

import '@root/global.scss';

import { NAVIGATION_HOMEPAGE_CONTENT, FOOTER_CONTENT } from './ content/homepage';
import Navbar from '@root/components/Navbar';
import Hero from '@root/components/Hero';
import About from '@root/components/About';
import Investments from '@root/components/Investments';
import Submit from '@root/components/Submit';
import Footer from '@root/components/Footer';

export async function generateMetadata({ params, searchParams }) {
  const title = Package.name;
  const description = Package.description;
  const url = 'https://wireframes.internet.dev';
  const handle = '@internetxstudio';

  return {
    metadataBase: new URL('https://wireframes.internet.dev'),
    title,
    description,
    url,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: 'https://intdev-global.s3.us-west-2.amazonaws.com/template-twitter-summary-large.png',
          width: 1200,
          height: 628,
        },
      ],
    },
    twitter: {
      title,
      description,
      url,
      handle,
      card: 'summary_large_image',
      images: ['https://intdev-global.s3.us-west-2.amazonaws.com/template-twitter-summary-large.png'],
    },
    icons: {
      icon: '/favicon-32x32.png',
      shortcut: '/favicon-16x16.png',
      apple: [{ url: '/apple-touch-icon.png' }, { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/apple-touch-icon-precomposed.png',
        },
      ],
    },
  };
}

export default async function Page(props) {
  const navigation = NAVIGATION_HOMEPAGE_CONTENT;
  const footer = FOOTER_CONTENT;

  return (
    <div>
      <Navbar navigation={navigation} />
      <div className={styles.blockGap}>
        <Hero />
        <About />
        <Investments />
        <Submit />
        <Footer navigation={footer} />
      </div>
    </div>
  );
}
