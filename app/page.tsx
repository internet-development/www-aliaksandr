import '@root/global.css';

import About from '@root/components/About';
import Footer from '@root/components/Footer';
import Hero from '@root/components/Hero';
import Investments from '@root/components/Investments';
import Navbar from '@root/components/Navbar';
import Package from '@root/package.json';
import Script from 'next/script';
import styles from '@components/DefaultLayout.module.css';
import Connect from '@root/components/Connect';
import Thesis from '@root/components/Thesis';
import Writings from '@root/components/Writings';

import { NAVIGATION_HOMEPAGE_CONTENT, FOOTER_CONTENT } from './content/homepage';

export const dynamic = 'force-dynamic';

const filteredPosts = ['https://sashapage.substack.com/p/coming-soon']

interface Article {
  title: string;
  author: string;
  date: string;
  url: string;
}

function extractTag(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`));
  if (!match) return '';
  return match[1].replace(/^<!\[CDATA\[([\s\S]*?)\]\]>$/, '$1').trim();
}

async function fetchSubstackArticles(feedUrl: string): Promise<Article[]> {
  const res = await fetch(feedUrl, { next: { revalidate: 0 } });
  const xml = await res.text();
  const articles: Article[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match: RegExpExecArray | null;
  while ((match = itemRegex.exec(xml)) !== null) {
    const body = match[1];
    const link = extractTag(body, 'link');
    if (filteredPosts.includes(link)) continue;
    const pubDate = extractTag(body, 'pubDate');
    articles.push({
      title: extractTag(body, 'title'),
      author: extractTag(body, 'dc:creator'),
      date: pubDate ? new Date(pubDate).toDateString() : '',
      url: link,
    });
  }
  return articles;
}

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

async function fetchDataFromAPI() {
  const api_key = process.env.FILE_API_KEY || '';
  const site = process.env.DOMAIN || 'sasha.page';
  const response = await fetch('https://api.internet.dev/api/data', {
    method: 'POST',
    headers: {
      'X-API-KEY': api_key,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
    body: JSON.stringify({ site }),
    next: { revalidate: 0 },
  });
  const data = await response.json();
  return data;
}


export default async function Page(props) {
  const navigation = NAVIGATION_HOMEPAGE_CONTENT;
  const footer = FOOTER_CONTENT;

  let data = { companies: [] };

  try {
    const response = await fetchDataFromAPI();
    if (response && response.data) {
      data = { companies: response.data };
    }
  } catch (e) {
    console.error('Failed to fetch list data:', e.message);
  }

  let articles: Article[] = [];
  try {
    articles = await fetchSubstackArticles('https://sashapage.substack.com/feed');
  } catch (e) {
    console.error('Failed to fetch articles:', e.message);
  }

  return (
    <div className={styles.blockGap}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-RWF2R28FM2" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-RWF2R28FM2');
        `}
      </Script>
      <Navbar navigation={navigation} />
      <Hero />
      <About />
      <Investments data={data} />
      <Thesis />
      <Writings articles={articles} />
      <Connect />
      <Footer navigation={footer} />
    </div>
  );
}