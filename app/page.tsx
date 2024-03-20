import '@root/global.scss';

import About from '@root/components/About';
import Footer from '@root/components/Footer';
import Hero from '@root/components/Hero';
import Investments from '@root/components/Investments';
import Navbar from '@root/components/Navbar';
import Package from '@root/package.json';
import styles from '@components/DefaultLayout.module.scss';
import Submit from '@root/components/Submit';
import Thesis from '@root/components/Thesis';

import { NAVIGATION_HOMEPAGE_CONTENT, FOOTER_CONTENT } from './content/homepage';

export async function generateMetadata({ params, searchParams }) {
  const title = Package.name;
  const description = Package.description;
  const url = 'https://sasha.page';
  const handle = '@SashaAngel87';

  return {
    metadataBase: new URL('https://sasha.page'),
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
          url: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/ed6af9de-feda-40f9-bc5f-85031f048543.jpg',
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
      images: ['https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/ed6af9de-feda-40f9-bc5f-85031f048543.jpg'],
    },
    icons: {
      icon: '/ah_favicon.png',
      shortcut: '/ah_favicon.png',
      apple: [{ url: '/ah_favicon.png' }, { url: '/ah_favicon.png', sizes: '180x180', type: 'image/png' }],
      other: [
        {
          rel: 'ah_favicon',
          url: '/ah_favicon.png',
        },
      ],
    },
  };
}

export default async function Page(props) {
  const navigation = NAVIGATION_HOMEPAGE_CONTENT;
  const footer = FOOTER_CONTENT;

  let data = { companies: [] };

  const api_key = process.env.FILE_API_KEY || '';
  const domain = process.env.DOMAIN || 'sasha.page';

  console.log(api_key);
  console.log(domain);

  try {
    const response = await fetch('https://api.internet.dev/api/data', {
      method: 'POST',
      headers: { 'X-API-KEY': api_key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ site: domain }),
    });
    const result = await response.json();
    if (result && result.data) {
      console.log(result.data);
      data = { companies: result.data };
    }
  } catch (e) {
    console.error('Failed to fetch list data:', e.message);
  }

  return (
    <div className={styles.blockGap}>
      <Navbar navigation={navigation} />
      <Hero />
      <About />
      <Investments data={data} />
      <Thesis />
      <Submit />
      <Footer navigation={footer} />
    </div>
  );
}