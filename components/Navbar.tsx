import styles from './Navbar.module.scss';

import React from 'react';
import Link from './Link';
import PageGutterWrapper from './PageGutterWrapper';
import LinkedInSVG from './svgs/LinkedInSVG';
import XSVG from './svgs/XSVG';

export default function Navbar({ navigation }) {
  return (
    <div className={styles.navbarContainer}>
      <PageGutterWrapper>
        <nav className={styles.navbar}>
          {/* Navbar should be smaller; text size, space out */}
          {navigation?.links && (
            <div className={styles.navLinks}>
              {navigation.links.slice(0, 3).map((link, index) => {
                return link.image ? (
                  <Link key={index} href={link.href} linkStyle="animated-green">
                    <img key={index} src={link.image} alt={link.text} />
                  </Link>
                ) : (
                  <Link key={index} href={link.href} linkStyle="animated-green">
                    {link.text}
                  </Link>
                );
              })}
            </div>
          )}

          <div className={styles.socialLinks}>
            <Link href="https://www.linkedin.com" linkStyle="animated-green">
              <LinkedInSVG />
            </Link>
            <Link href="https://www.x.com" linkStyle="animated-green">
              <XSVG />
            </Link>
          </div>
        </nav>
      </PageGutterWrapper>
    </div>
  );
}
