import styles from './Company.module.scss';
import Link from './Link';

import { FadeInSection } from '@components/FadeInSection';

export default function Company({ companyLink, companyName, companyLogo, backgroundImage }) {
  const companyURL = companyLink.startsWith('https://') ? companyLink : `https://${companyLink}`;
  const displayLink = companyLink.replace(/^https:\/\/|\/$/g, '');

  return (
    <Link href={companyURL} target="_blank" key={companyName}>
      <FadeInSection>
        <div className={styles.boxContainer}>
          <div className={styles.backgroundImageContainer}>
            <img src={backgroundImage} alt="styling gradient" className={styles.backgroundImage} />
          </div>
          <div className={styles.box}>
            <img src={companyLogo} alt={`${companyName} logo`} className={styles.logo} />
            <div className={styles.boxLink}>{displayLink}</div>
          </div>
        </div>
      </FadeInSection>
    </Link>
  );
}
