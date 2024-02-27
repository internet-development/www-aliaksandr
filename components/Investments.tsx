import Company from './Company';
import InfoSection from './InfoSection';
import styles from './Investments.module.scss';
import Link from './Link';
import PageGutterWrapper from './PageGutterWrapper';
import CarvSVG from './svgs/CarvSVG';
import EndlesssSVG from './svgs/EndlesssSVG';
import HereSVG from './svgs/HereSVG';
import MeteorSVG from './svgs/MeteorSVG';
import ParasSVG from './svgs/ParasSVG';
import SyndicateSVG from './svgs/SyndicateSVG';

export default function Investments() {
  return (
    <div className={styles.investmentsContainer} style={{ paddingTop: '1rem' }} id="investments">
      <PageGutterWrapper>
        <h2 className={styles.h2}>Selected Investments</h2>
        <div className={styles.boxes}>
          <Company companyLink={'http://carv.io'} companyName={'carv.io'} svgComponent={<CarvSVG />} />
          <Company companyLink={'http://herewallet.app'} companyName={'herewallet.app'} svgComponent={<HereSVG />} />
          <Company companyLink={'http://meteorwallet.app'} companyName={'meteorwallet.app'} svgComponent={<MeteorSVG />} />
          <Company companyLink={'http://paras.id'} companyName={'paras.id'} svgComponent={<ParasSVG />} />
          <Company companyLink={'http://syndicate.io'} companyName={'syndicate.io'} svgComponent={<SyndicateSVG />} />
          <Company companyLink={'http://endless.fm'} companyName={'endless.fm'} svgComponent={<EndlesssSVG />} />
        </div>

        <div className={styles.aboutContainer}>
          <div className={styles.aboutSection}>
            <InfoSection
              title={'Background'}
              content={
                'Originally from Belarus, I immigrated to the United States in 2007 and was quickly captivated by the unique energy of Silicon Valley and San Francisco. My journey encompassed diverse roles across finance, sales, and marketing, and included academic pursuits at CCSF and UC Berkeley. Although my early startup attempt in 2014 didn&apos;t succeed, my career pivoted significantly when I ended up on the founding team of NEAR Protocol in 2018. This experience, involving sales, events, writing, fundraising, and managing an accelerator, profoundly shaped my professional trajectory. It also marked the beginning of my foray into angel investing, primarily in the web3 space. Today, my focus is on supporting the next generation of founders with their innovative and product-centric ventures, leveraging my diverse experiences to contribute more than just capital.'
              }
            />
            <InfoSection
              title={'beyond capital'}
              content={
                'Beyond capital, I offer startups extensive support and resources. Leveraging my vast network of connections in Silicon Valley and beyond, which I actively expand every week, I provide opportunities for various nodes of my social graph to connect. My experience in fundraising equips me to guide founders through this critical process. Having been on a founding team at NEAR myself, I bring empathy and practical insights to the entrepreneurial journey. My approach emphasizes a strong go-to-market strategy and encourages direct engagement with customers. Additionally, I foster an experimental mindset, helping founders explore and identify effective distribution channels for their products.'
              }
            />
          </div>
        </div>
      </PageGutterWrapper>
    </div>
  );
}
