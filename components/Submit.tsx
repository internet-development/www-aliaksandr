import PageGutterWrapper from './PageGutterWrapper';
import styles from './Submit.module.scss';
export default function Submit() {
  return (
    <PageGutterWrapper>
      <div className={styles.sectionContainer}>
        <div className={styles.submit}>
          Submit your pitch to join my portfolio <br></br>
          <button className={styles.submitbutton}>Submit Form</button>
        </div>
        <div className={styles.followContainer}>
          <div className={styles.follow}>
            Follow me on X <br></br>
            <button className={styles.followbutton}>Follow</button>
          </div>
          <div className={styles.follow}>
            Connect on LinkedIn <br></br>
            <button className={styles.followbutton}>Connect</button>
          </div>
        </div>
      </div>
    </PageGutterWrapper>
  );
}
