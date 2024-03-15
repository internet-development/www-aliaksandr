import styles from './Footer.module.scss';

import React from 'react';
import Link from './Link';
import PageGutterWrapper from './PageGutterWrapper';
import LinkedInSVG from './svgs/LinkedInSVG';
import XSVG from './svgs/XSVG';

import { FadeInSection } from './FadeInSection';

export default function Footer({ navigation }) {
  return (
    <footer className={styles.footerSection}>
      <PageGutterWrapper>
        <FadeInSection>
          <div className={styles.navbar}>
            <Link href="/">
              <span className={styles.brandLogo}>
                <span className={styles.brandName}>{navigation.brandName}</span>
              </span>
            </Link>
            {navigation?.links && (
              <div className={styles.navLinks}>
                {navigation.links.slice(0, 3).map((link, index) => {
                  return link.image ? (
                    <Link key={index} href={link.href}>
                      <img src={link.image} alt={link.text} />
                    </Link>
                  ) : (
                    <Link key={index} href={link.href}>
                      <span className={styles.navLinkText}>{link.text}</span>
                    </Link>
                  );
                })}
              </div>
            )}
            <Link href="/">
              <span className={styles.backToTopContainer}>
                <span className={styles.backToTop}>Back To Top</span>
              </span>
            </Link>
            <div className={styles.socialLinks}>
              <div className={styles.socialsImageContainer}>
                <Link href="https://www.linkedin.com/in/aliaksandrhudzilin/">
                  <LinkedInSVG className={styles.socialIcon} />
                </Link>
                <Link href="https://twitter.com/AliaksandrH">
                  <XSVG className={styles.socialIcon} />
                </Link>
              </div>
            </div>
          </div>
        </FadeInSection>
      </PageGutterWrapper>
    </footer>
  );
}
