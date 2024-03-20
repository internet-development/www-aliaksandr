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
        <FadeInSection order={2}>
          <nav className={styles.navbar}>
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
              <div className={styles.applyLink}>
                <span>Apply to join my portfolio</span>
              </div>
              <Link href="https://airtable.com/appca6jUjuI1jI1Hj/pagG1PZA9gznFI87l/form" target="_blank">
                <button className={styles.submitFormButton}>Submit Form</button>
              </Link>
              <Link className={styles.joinPortfolioLink} href="https://airtable.com/appca6jUjuI1jI1Hj/pagG1PZA9gznFI87l/form" target="_blank">
                <button className={styles.joinPortfolioButton}>Join my Portfolio</button>
              </Link>
              <Link href="https://www.linkedin.com/in/aliaksandrhudzilin/" target="_blank">
                <LinkedInSVG className={styles.socialImage} />
              </Link>
              <Link href="https://twitter.com/SashaAngel87" target="_blank">
                <XSVG className={styles.socialImage} />
              </Link>
            </div>
          </nav>
        </FadeInSection>
      </PageGutterWrapper>
    </div>
  );
}
