import styles from './Navbar.module.scss';

import React from 'react';
import Link from './Link';
import PageGutterWrapper from './PageGutterWrapper';

export default function Navbar({ navigation }) {
  return (
    <div className={styles.navbarContainer}>
      <PageGutterWrapper>
        <nav className={styles.navbar}>
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

          {navigation?.links && (
            <div className={styles.navLinks}>
              {navigation.links.slice(-2).map((link, index) => {
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
        </nav>
      </PageGutterWrapper>
    </div>
  );
}
