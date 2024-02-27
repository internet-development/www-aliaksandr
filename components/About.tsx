import styles from './About.module.scss';
import InfoSection from './InfoSection';
import PageGutterWrapper from './PageGutterWrapper';

export default function About() {
  return (
    <div className={styles.aboutContainer} style={{ paddingTop: '1rem' }} id="about">
      <PageGutterWrapper>
        <div className={styles.aboutSection}>
          <InfoSection
            title={'Background'}
            content={
              "Originally from Belarus, I immigrated to the United States in 2007 and was quickly captivated by the unique energy of Silicon Valley and San Francisco. My journey encompassed diverse roles across finance, sales, and marketing, and included academic pursuits at CCSF and UC Berkeley. Although my early startup attempt in 2014 didn't succeed, my career pivoted significantly when I ended up on the founding team of NEAR Protocol in 2018. This experience, involving sales, events, writing, fundraising, and managing an accelerator, profoundly shaped my professional trajectory. It also marked the beginning of my foray into angel investing, primarily in the web3 space. Today, my focus is on supporting the next generation of founders with their innovative and product-centric ventures, leveraging my diverse experiences to contribute more than just capital."
            }
          />
          <InfoSection
            title={'Software Startups'}
            content={
              'While my passion for web3 remains strong, I am expanding into other startups. This evolution reflects a tech-agnostic approach, recognizing the transformative potential across various technology sectors. My commitment to these emerging fields is driven by the same innovative spirit that drew me to web3, now broadened to encompass a wider spectrum of technologies. I aim to support a diverse range of visionary entrepreneurs, contributing to advancements that redefine our digital and real-world experiences.'
            }
          />
        </div>
      </PageGutterWrapper>
    </div>
  );
}
