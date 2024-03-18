import AtlasSVG from './svgs/AtlasSVG';
import CarvSVG from './svgs/CarvSVG';
import Company from './Company';
import EndlesssSVG from './svgs/EndlesssSVG';
import FractionSVG from './svgs/FractionSVG';
import HereSVG from './svgs/HereSVG';
import InfoSection from './InfoSection';
import Link from './Link';
import MeteorSVG from './svgs/MeteorSVG';
import PageGutterWrapper from './PageGutterWrapper';
import ParasSVG from './svgs/ParasSVG';
import styles from './Investments.module.scss';
import SyndicateSVG from './svgs/SyndicateSVG';
import FluentlySVG from './svgs/Fluently';

import { FadeInSection } from '@components/FadeInSection';

export default function Investments() {
  return (
    <div className={styles.investmentsContainer} id="investments">
      <PageGutterWrapper>
        <FadeInSection>
          <h2 className={styles.h2}>Selected Investments</h2>
        </FadeInSection>
        <div className={styles.boxes}>
          <Company companyLink={'http://carv.io'} companyName={'carv.io'} svgComponent={<CarvSVG width="75%" />} backgroundImage={'/media/carv-gradient.png'} />
          <Company companyLink={'http://herewallet.app'} companyName={'herewallet.app'} svgComponent={<HereSVG width="75%" />} backgroundImage={'/media/here-gradient.png'} />
          <Company
            companyLink={'http://meteorwallet.app'}
            companyName={'meteorwallet.app'}
            svgComponent={<MeteorSVG width="75%" />}
            backgroundImage={'/media/meteor-gradient.png'}
          />
          <Company companyLink={'http://paras.id'} companyName={'paras.id'} svgComponent={<ParasSVG width="75%" />} backgroundImage={'/media/paras-gradient.png'} />
          <Company companyLink={'http://syndicate.io'} companyName={'syndicate.io'} svgComponent={<SyndicateSVG width="75%" />} backgroundImage={'/media/syndicate-gradient.png'} />
          <Company companyLink={'http://endless.fm'} companyName={'endless.fm'} svgComponent={<EndlesssSVG width="75%" />} backgroundImage={'/media/endless-gradient.png'} />
          <Company
            companyLink={'https://fractionai.xyz/'}
            companyName={'fractionai.xyz'}
            svgComponent={<FractionSVG width="75%" />}
            backgroundImage={'/media/fraction-gradient.png'}
          />
          <Company companyLink={'https://www.atlaszk.com/'} companyName={'atlaszk.com'} svgComponent={<AtlasSVG width="75%" />} backgroundImage={'/media/atlas-gradient.png'} />
          <Company companyLink={'https://getfluently.app/'} companyName={'getfluently.app'} svgComponent={<FluentlySVG width="75%" />} backgroundImage={'/media/carv-gradient.png'}></Company>
        </div>
      </PageGutterWrapper>
    </div>
  );
}
