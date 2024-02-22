import styles from './Investments.module.scss';
import PageGutterWrapper from './PageGutterWrapper';
import CarvSVG from './svgs/CarvSVG';
import EndlesssSVG from './svgs/EndlesssSVG';
import HereSVG from './svgs/HereSVG';
import MeteorSVG from './svgs/MeteorSVG';
import ParasSVG from './svgs/ParasSVG';
import SyndicateSVG from './svgs/SyndicateSVG';

export default function Investments() {
  return (
    <div className={styles.investmentsContainer}>
      <PageGutterWrapper>
        <h2 className={styles.h2}>Selected Investments</h2>
        <div className={styles.boxes}>
          <div className={styles.box1}>
            <CarvSVG />
            <div className={styles.boxLink}>carv.io</div>
          </div>
          <div className={styles.box1}>
            <HereSVG />
            <div className={styles.boxLink}>herewallet.app</div>
          </div>{' '}
          <div className={styles.box1}>
            <MeteorSVG />
            <div className={styles.boxLink}>meteorwallet.app</div>
          </div>{' '}
          <div className={styles.box1}>
            <ParasSVG />
            <div className={styles.boxLink}>paras.id</div>
          </div>{' '}
          <div className={styles.box1}>
            <SyndicateSVG />
            <div className={styles.boxLink}>syndicate.io</div>
          </div>{' '}
          <div className={styles.box1}>
            <EndlesssSVG />
            <div className={styles.boxLink}>endless.fm</div>
          </div>
        </div>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutSection}>
            <div className={styles.background}>
              <span className={styles.title}> investment philosophy </span>
              <span className={styles.content}>
                My core investment principles are centered around supporting founders who demonstrate strong leadership and the ability to engage customers, team members, and
                investors. I prioritize founders with a deep obsession for their product, favoring those who launch rapidly and iterate effectively. Flexibility in adapting or
                changing strategies when necessary is key, as is a strong, cohesive founding team chemistry. 
              </span>
            </div>
            <div className={styles.softwareStartups}>
              <span className={styles.title}> beyond capital </span>
              <span className={styles.content}>
                Beyond capital, I offer startups extensive support and resources. Leveraging my vast network of connections in Silicon Valley and beyond, which I actively expand
                every week, I provide opportunities for various nodes of my social graph to connect. My experience in fundraising equips me to guide founders through this critical
                process. Having been on a founding team at NEAR myself, I bring empathy and practical insights to the entrepreneurial journey. My approach emphasizes a strong
                go-to-market strategy and encourages direct engagement with customers. Additionally, I foster an experimental mindset, helping founders explore and identify
                effective distribution channels for their products.
              </span>
            </div>
          </div>
        </div>
      </PageGutterWrapper>
    </div>
  );
}
