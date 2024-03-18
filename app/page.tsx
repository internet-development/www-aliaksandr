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

import { NAVIGATION_HOMEPAGE_CONTENT, FOOTER_CONTENT } from './ content/homepage';
import { onListData } from '@common/utilities';

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

  // @TODO: Replace both of these in the .env
  const key = 'INT-f21c3473-b7a0-4b9f-88a3-DEV-e199040a-5b1e-4e88-bc0e';
  const domain = '9a007a7e-9355-4a52-be27-7d76f8897c38';
  const companies = await onListData({ key });

  // Query files by domain
  const filteredCompanies = companies.data.filter(company => company.organization_id === domain);
  console.log('Filtered companies:', filteredCompanies);

  // Handle parsing company files, links, etc.
  const getCompanyLinks = (companies) => {
    return companies
      .map(company => {
        const match = company.data.name.match(/(.+\..+)-logo\.png/);
        return match ? match[1] : null;
      })
      .filter(link => link !== null)
      .sort();
  };

  const companyLinks = getCompanyLinks(filteredCompanies);
  console.log('Company links:', companyLinks);
  

  return (
    <div className={styles.blockGap}>
      <Navbar navigation={navigation} />
      <Hero />
      <About />
      <Investments companies={companies.data || []} />
      <Thesis />
      <Submit />
      <Footer navigation={footer} />
    </div>
  );
}
