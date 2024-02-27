import styles from './Company.module.scss';
import Link from './Link';

export default function Company({ companyLink, companyName, svgComponent: SVGComponent }) {
  return (
    <div className={styles.box}>
      {SVGComponent}
      <Link href={companyLink}>
        <div className={styles.boxLink}>{companyName}</div>
      </Link>
    </div>
  );
}
