import Link from './Link';
import PageGutterWrapper from './PageGutterWrapper';
import styles from './Submit.module.scss';

import { FadeInSection } from '@components/FadeInSection';

export default function Submit() {
  return (
    <PageGutterWrapper>
      <FadeInSection>
        <div className={styles.sectionContainer} id="submit">
          <div className={styles.submitContainer}>
            <div className={styles.submit}>
              <div className={styles.backgroundImageContainer}>
                <img src={'/media/portfolio-gradient.png'} alt="" className={styles.backgroundImage} />
              </div>
              <div className={styles.submitText}>Submit your pitch to join my portfolio</div>
              <Link href={'https://airtable.com/appca6jUjuI1jI1Hj/pagG1PZA9gznFI87l/form'}>
                <button className={styles.submitbutton}>Submit Form</button>
              </Link>
            </div>
          </div>
          <div className={styles.followContainer}>
            <div className={styles.follow}>
              <div className={styles.followText}>Follow me on X</div>
              <Link href={'https://twitter.com/SashaAngel87'}>
                <div className={styles.followbutton}>Follow</div>
              </Link>
            </div>
            <div className={styles.follow}>
              <div className={styles.followText}>Connect on LinkedIn</div>
                <a href={'https://www.linkedin.com/in/aliaksandrhudzilin'} className={styles.followbutton}>Connect</a>
            </div>
          </div>
        </div>
      </FadeInSection>
    </PageGutterWrapper>
  );
}
