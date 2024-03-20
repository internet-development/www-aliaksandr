'use client';

import Company from './Company';
import PageGutterWrapper from './PageGutterWrapper';
import styles from './Investments.module.scss';

import { FadeInSection } from '@components/FadeInSection'

export default function Investments({ data }) {
  const backgroundImages = [
    '/media/carv-gradient.png',
    '/media/here-gradient.png',
    '/media/meteor-gradient.png',
    '/media/paras-gradient.png',
    '/media/syndicate-gradient.png',
    '/media/endless-gradient.png',
    '/media/atlas-gradient.png',
    '/media/fraction-gradient.png',
  ];

  return (
    <div className={styles.investmentsContainer} id="investments">
      <PageGutterWrapper>
        <FadeInSection>
          <h2 className={styles.h2}>Selected Investments</h2>
        </FadeInSection>
        <div className={styles.boxes}>
          {data.companies.map((company, index) => {
            return <Company
              key={company.companyName}
              companyLink={company.data.companyLink}
              companyName={company.data.companyName}
              companyLogo={company.data.src}
              backgroundImage={backgroundImages[index % 8]}
            />;
          })}
        </div>
      </PageGutterWrapper>
    </div>
  );
}