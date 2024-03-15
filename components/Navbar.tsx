import styles from './Navbar.module.scss';

import React from 'react';
import Link from './Link';
import PageGutterWrapper from './PageGutterWrapper';
import LinkedInSVG from './svgs/LinkedInSVG';
import XSVG from './svgs/XSVG';

import { FadeInSection } from '@components/FadeInSection';

export default function Navbar({ navigation }) {
  return (
    <div className={styles.navbarContainer}>
      <PageGutterWrapper>
        <FadeInSection>
          <nav className={styles.navbar}>
            {/* Navbar should be smaller; text size, space out */}
            {navigation?.links && (
              <div className={styles.navLinks}>
                {navigation.links.slice(0, 3).map((link, index) => {
                  return link.image ? (
                    <Link className={styles.link} key={index} href={link.href}>
                      <img key={index} src={link.image} alt={link.text} />
                    </Link>
                  ) : (
                    <Link className={styles.link} key={index} href={link.href}>
                      {link.text}
                    </Link>
                  );
                })}
              </div>
            )}

            <div className={styles.socialLinks}>
              <Link href="https://www.linkedin.com/in/aliaksandrhudzilin/">
                <LinkedInSVG className={styles.socialImage} />
              </Link>
              <Link href="https://twitter.com/AliaksandrH">
                <XSVG className={styles.socialImage} />
              </Link>
            </div>
          </nav>
        </FadeInSection>
      </PageGutterWrapper>
    </div>
  );
}
