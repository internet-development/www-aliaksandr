'use client';

import styles from './Hero.module.scss';
import PageGutterWrapper from './PageGutterWrapper';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <PageGutterWrapper>
        <div className={styles.heroSection}>
          <div className={styles.mainHeroTitle}>
            <span className={styles.title}>Aliaksandr Hudzilin</span>
          </div>
          <div className={styles.content}>
            <Image src="/media/AH.png" alt="Aliaksandr Hudzilin" width={560} height={464} />
            <div className={styles.textContainer}>
              Fueling the next wave of <br />
              visionary entrepreneurs.
            </div>
          </div>
        </div>
      </PageGutterWrapper>
    </div>
  );
}
