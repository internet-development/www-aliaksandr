'use client';

import styles from './Hero.module.scss';
import PageGutterWrapper from './PageGutterWrapper';
import React from 'react';

import { FadeInSection } from '@components/FadeInSection';

export default function Hero() {
  return (
    <PageGutterWrapper>
      <FadeInSection order={4}>
        <div className={styles.heroContainer}>
          <div className={styles.heroSection}>
            <div className={styles.mainHeroTitle}>
              <span className={styles.title}>Aliaksandr "Sasha" Hudzilin</span>
            </div>
            <div className={styles.content}>
              <img src="/media/hudzilin_5.png" alt="Aliaksandr Hudzilin" className={styles.heroImage} />
              <div className={styles.textContainer}>
                <p>Fueling the next wave of visionary entrepreneurs.</p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </PageGutterWrapper>
  );
}
