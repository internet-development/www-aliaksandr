import Link from './Link';
import PageGutterWrapper from './PageGutterWrapper';
import styles from './Submit.module.scss';
export default function Submit() {
  return (
    <PageGutterWrapper>
      <div className={styles.sectionContainer} style={{ paddingTop: '1rem' }} id="submit">
        <div className={styles.submit}>
          Submit your pitch to join my portfolio <br />
          <button className={styles.submitbutton}>Submit Form</button>
        </div>
        <div className={styles.followContainer}>
          <div className={styles.follow}>
            Follow me on X
            <Link href={'https://twitter.com/AliaksandrH?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'}>
              <div className={styles.followbutton}>Follow</div>
            </Link>
          </div>
          <div className={styles.follow}>
            Connect on LinkedIn <br />
            <Link href={'https://www.linkedin.com/in/aliaksandrhudzilin'}>
              <div className={styles.followbutton}>Connect</div>
            </Link>
          </div>
        </div>
      </div>
    </PageGutterWrapper>
  );
}
