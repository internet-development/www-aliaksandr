'use client'

import Company from './Company';
import PageGutterWrapper from './PageGutterWrapper';
import styles from './Investments.module.scss';

import { FadeInSection } from '@components/FadeInSection'

export default function Investments({ companies }) {
  return (
    <div className={styles.investmentsContainer} id="investments">
      <PageGutterWrapper>
        <FadeInSection>
          <h2 className={styles.h2}>Selected Investments</h2>
        </FadeInSection>
        <div className={styles.boxes}>
          {companies.map((company) => (
            <Company
              companyLink={company.companyLink}
              companyName={company.companyName}
              companyLogo={company.companyLogo}
              backgroundImage={company.backgroundImage}
            />
          ))}
        </div>
      </PageGutterWrapper>
    </div>
  );
}
