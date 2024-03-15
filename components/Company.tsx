import styles from './Company.module.scss';
import Link from './Link';

import { FadeInSection } from '@components/FadeInSection';

export default function Company({ companyLink, companyName, svgComponent: SVGComponent, backgroundImage }) {
  return (
    <Link href={companyLink} target="_blank">
      <FadeInSection>
        <div className={styles.boxContainer}>
          <div className={styles.backgroundImageContainer}>
            <img src={backgroundImage} alt="" className={styles.backgroundImage} />
          </div>
          <div className={styles.box}>
            <div className={styles.logo}>{SVGComponent}</div>
            <div className={styles.boxLink}>{companyName}</div>
          </div>
        </div>
      </FadeInSection>
    </Link>
  );
}
