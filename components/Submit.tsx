import PageGutterWrapper from './PageGutterWrapper';
import styles from './Submit.module.scss';
export default function Submit() {
  return (
    <PageGutterWrapper>
      <div className={styles.submitContainer}>
        <div className={styles.submit}>
          Submit your pitch to join my portfolio
          <button className={styles.button}>Submit Form</button>
        </div>
        <div className={styles.follow}>
          Follow me on X <button className={styles.button}>Follow</button>
        </div>
        <div className={styles.follow}>
          Connect on LinkedIn <button className={styles.button}>Connect</button>
        </div>
      </div>
    </PageGutterWrapper>
  );
}
