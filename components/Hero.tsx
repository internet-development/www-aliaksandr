'use client';

import styles from './Hero.module.scss';
import PageGutterWrapper from './PageGutterWrapper';
import AHSVG from './svgs/AH';

export default function Hero() {
  return (
    <PageGutterWrapper>
      <div className={styles.heroContainer}>
        <div className={styles.heroSection}>
          <div className={styles.mainHeroTitle}>
            <span className={styles.title}>Aliaksandr Hudzilin</span>
          </div>
          <div className={styles.content}>
            <img src="/media/hudzilin.png" alt="Aliaksandr Hudzilin" style={{ width: '100%', height: '100%' }} />
            <p className={styles.textContainer}>Fueling the next wave of visionary entrepreneurs.</p>
          </div>
        </div>
      </div>
    </PageGutterWrapper>
  );
}
