'use client';

import styles from './Hero.module.scss';
import PageGutterWrapper from './PageGutterWrapper';
import React from 'react';

import { FadeInSection } from '@components/FadeInSection';

export default function Hero() {
  return (
    <PageGutterWrapper>
      <FadeInSection>
        <div className={styles.heroContainer}>
          <div className={styles.heroSection}>
            <div className={styles.mainHeroTitle}>
              <span className={styles.title}>Aliaksandr Hudzilin</span>
            </div>
            <div className={styles.content}>
              <img src="/media/hudzilin_2.png" alt="Aliaksandr Hudzilin" style={{ width: '100%', height: '100%' }} />
              <p className={styles.textContainer}>Fueling the next wave of visionary entrepreneurs.</p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </PageGutterWrapper>
  );
}
