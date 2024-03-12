import styles from './Company.module.scss';
import Link from './Link';

export default function Company({ companyLink, companyName, svgComponent: SVGComponent }) {
  return (
    <Link href={companyLink}>
      <div className={styles.box}>
        {SVGComponent}
        <div className={styles.boxLink}>{companyName}</div>
      </div>
    </Link>
  );
}
