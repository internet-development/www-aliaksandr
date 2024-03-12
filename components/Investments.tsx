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
          <Company
            companyLink={'http://carv.io'}
            companyName={'carv.io'}
            svgComponent={<CarvSVG width="75%" />}
          />
          <Company companyLink={'http://herewallet.app'} companyName={'herewallet.app'} svgComponent={<HereSVG width="75%" />} />
          <Company companyLink={'http://meteorwallet.app'} companyName={'meteorwallet.app'} svgComponent={<MeteorSVG width="75%" />} />
          <Company companyLink={'http://paras.id'} companyName={'paras.id'} svgComponent={<ParasSVG width="75%" />} />
          <Company companyLink={'http://syndicate.io'} companyName={'syndicate.io'} svgComponent={<SyndicateSVG width="75%" />} />
          <Company companyLink={'http://endless.fm'} companyName={'endless.fm'} svgComponent={<EndlesssSVG width="75%" />} />
        </div>
      </PageGutterWrapper>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutSection}>
          <InfoSection
            title={'Investment Philosophy'}
            content={
              'My core investment principles are centered around supporting founders who demonstrate strong leadership and the ability to engage customers, team members, and investors. I prioritize founders with a deep obsession for their product, favoring those who launch rapidly and iterate effectively. Flexibility in adapting or changing strategies when necessary is key, as is a strong, cohesive founding team chemistry.'
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
    </div>
  );
}
