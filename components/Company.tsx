import styles from './Company.module.scss';
import Link from './Link';

import { FadeInSection } from '@components/FadeInSection';

export default function Company({ companyLink, companyName, companyLogo, backgroundImage }) {
  return (
    <Link href={companyLink} target="_blank">
      <FadeInSection>
        <div className={styles.boxContainer}>
          <div className={styles.backgroundImageContainer}>
            <img src={backgroundImage} alt="styling gradient" className={styles.backgroundImage} />
          </div>
          <div className={styles.box}>
            <img src={companyLogo} alt="company logo" className={styles.logo} />
            <div className={styles.boxLink}>{companyName}</div>
          </div>
        </div>
      </FadeInSection>
    </Link>
  );
}
