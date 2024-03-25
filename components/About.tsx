import styles from './About.module.scss';
import InfoSection from './InfoSection';
import PageGutterWrapper from './PageGutterWrapper';
import { FadeInSection } from './FadeInSection';

export default function About() {
  return (
    <PageGutterWrapper>
      <FadeInSection order={4}>
        <div className={styles.aboutContainer} id="about">
          <div className={styles.aboutSection}>
            <InfoSection
              title={'Background'}
              content={
                'Originally from Belarus, I immigrated to the United States in 2007 and was quickly captivated by the unique energy of Silicon Valley and San Francisco. My journey encompassed diverse roles across finance, go to market, and marketing, and included academic pursuits at CCSF and UC Berkeley. My path took me from being a financial analyst for Frank Quattrone in tech mergers and acquisitions to go to market roles at MemSQL and Mulesoft. This eclectic mix of experiences laid the groundwork for my role in co-founding NEAR Protocol in 2018, marking a significant turn in my career. In this capacity, I tackled go to market strategies, launching early ecosystem, and crucial fundraising activities, which deepened my understanding of startup ecosystems and fueled my passion for angel investing, particularly in the web3 space. Leveraging this rich tapestry of experiences, I now focus on supporting innovative founders, bringing to the table knowledge and a keen eye for potential, aimed at nurturing the next wave of tech innovations.'
              }
            />
            <InfoSection
              title={'Software Startups'}
              content={
                'While my passion for web3 remains strong, I am expanding into other startups. This evolution reflects a tech-agnostic approach, recognizing the transformative potential across various technology sectors. My commitment to these emerging fields is driven by the same innovative spirit that drew me to web3, now broadened to encompass a wider spectrum of technologies. I aim to support a diverse range of visionary entrepreneurs, contributing to advancements that redefine our digital and real-world experiences.'
              }
            />
          </div>
        </div>
      </FadeInSection>
    </PageGutterWrapper>
  );
}
