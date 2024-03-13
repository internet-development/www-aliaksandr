import styles from './Company.module.scss';
import Link from './Link';

export default function Company({ companyLink, companyName, svgComponent: SVGComponent, backgroundImage }) {
  return (
    <Link href={companyLink}>
      <div className={styles.boxContainer}>
        <div className={styles.backgroundImageContainer}>
          <img src={backgroundImage} alt="" className={styles.backgroundImage} />
        </div>
        <div className={styles.box}>
          <div className={styles.logo}>{SVGComponent}</div>
          <div className={styles.boxLink}>{companyName}</div>
        </div>
      </div>
    </Link>
  );
}
