'use client';

import styles from './Hero.module.scss';
import PageGutterWrapper from './PageGutterWrapper';
import AHSVG from './svgs/AH';

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <PageGutterWrapper>
        <div className={styles.heroSection}>
          <div className={styles.mainHeroTitle}>
            <span className={styles.title}>Aliaksandr Hudzilin</span>
          </div>
          <div className={styles.content}>
            <img src="/media/AH.jpg" alt="Aliaksandr Hudzilin" style={{width: "55%", height: "50%"}} />
            <div className={styles.textContainer}>Fueling the next wave of visionary entrepreneurs.</div>
          </div>
        </div>
      </PageGutterWrapper>
    </div>
  );
}
