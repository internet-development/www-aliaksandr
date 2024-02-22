import styles from '@components/PageGutterWrapper.module.scss';

export default function PageGutterWrapper({ children }) {
  return <div className={styles.container}>{children}</div>;
}
