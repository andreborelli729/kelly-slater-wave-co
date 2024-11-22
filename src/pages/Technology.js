import React from 'react';
import TechnologyBannerMobile from '../components/technologyPage/TechnologyBannerMobile.js';
import TechnologyBanner from '../components/technologyPage/TechnologyBanner.js';
import TechnologyWaveSystemMobile from '../components/technologyPage/TechnologyWaveSystemMobile.js';
import TechnologyWaveSystem from '../components/technologyPage/TechnologyWaveSystem.js';
import TechnicalMobile from '../components/technologyPage/TechnicalMobile.js';
import Technical from '../components/technologyPage/Technical.js';
import Stephanie from '../components/technologyPage/Stephanie.js';
import TechnologyFooter from '../components/technologyPage/TechnologyFooter.js';




function Technology(){
    return(
<>
<TechnologyBannerMobile/>
<TechnologyBanner/>
<TechnologyWaveSystemMobile/>
<TechnologyWaveSystem/>
<TechnicalMobile/>
<Technical/>
<Stephanie/>
<TechnologyFooter/>
</>
    );
}


export default Technology;