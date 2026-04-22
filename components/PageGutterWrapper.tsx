import styles from '@components/PageGutterWrapper.module.css';

export default function PageGutterWrapper({ children }) {
  return <div className={styles.container}>{children}</div>;
}
