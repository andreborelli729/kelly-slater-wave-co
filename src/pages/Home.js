import React from 'react';
import ExperienceMobile from '../components/ExperienceMobile.js';
import Experience from '../components/Experience.js';
import SystemMobile from '../components/SystemMobile.js';
import System from '../components/System.js';
import RanchMobile from '../components/RanchMobile.js';
import Ranch from '../components/Ranch.js';
import StoryMobile from '../components/StoryMobile.js';
import Story from '../components/Story.js';
import HomeBannerMobile from '../components/HomeBannerMobile.js';
import HomeBanner from '../components/HomeBanner.js';
import National from '../components/National.js';
import HomeFooter from '../components/HomeFooter.js';

function Home(){
    return(
<>
<HomeBanner/>
  <HomeBannerMobile/>
  <ExperienceMobile/>

  <Experience/>
  <SystemMobile/>
  <System/>
  <RanchMobile/>
  <Ranch/>
  <StoryMobile/>
  <Story/>
  <National/>
  <HomeFooter/>

</>

    );


}


export default Home;