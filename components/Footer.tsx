import styles from './Footer.module.scss';

import React from 'react';
import Link from './Link';
import PageGutterWrapper from './PageGutterWrapper';

export default function Footer({ navigation }) {
  return (
    <footer className={styles.footerSection}>
      <PageGutterWrapper>
        <div className={styles.navbar}>
          <Link href="/">
            <span className={styles.brandLogo}>
              <span className={styles.brandName}>{navigation.brandName}</span>
            </span>
          </Link>
          {navigation?.links && (
            <div className={styles.navLinks}>
              {navigation.links.slice(0, 3).map((link, index) => {
                return (
                  <Link key={index} href={link.href} linkStyle="animated-green">
                    {link.text}
                  </Link>
                );
              })}
            </div>
          )}
          Back to Top
          {navigation?.links && (
            <div className={styles.navLinks}>
              {navigation.links.slice(-2).map((link, index) => {
                return (
                  <Link key={index} href={link.href} linkStyle="animated-green">
                    {link.text}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </PageGutterWrapper>
    </footer>
  );
}
