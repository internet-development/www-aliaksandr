import Link from './Link';
import PageGutterWrapper from './PageGutterWrapper';
import styles from './Submit.module.scss';
export default function Submit() {
  return (
    <PageGutterWrapper>
      <div className={styles.sectionContainer} id="submit">
        <div className={styles.submitContainer}>
          <div className={styles.submit}>
            <div className={styles.backgroundImageContainer}>
              <img src={'/media/portfolio-gradient.png'} alt="" className={styles.backgroundImage} />
            </div>
            <div className={styles.submitText}>
              Submit your pitch to join my portfolio
            </div>
            <button className={styles.submitbutton}>Submit Form</button>
          </div>
        </div>
        <div className={styles.followContainer}>
          <div className={styles.follow}>
            <div className={styles.followText}>Follow me on X</div>
            <Link href={'https://twitter.com/AliaksandrH?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'}>
              <div className={styles.followbutton}>Follow</div>
            </Link>
          </div>
          <div className={styles.follow}>
            <div className={styles.followText}>Connect on LinkedIn</div>
            <Link href={'https://www.linkedin.com/in/aliaksandrhudzilin'}>
              <div className={styles.followbutton}>Connect</div>
            </Link>
          </div>
        </div>
      </div>
    </PageGutterWrapper>
  );
}
