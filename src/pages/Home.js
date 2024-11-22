import React from 'react';
import ExperienceMobile from '../components/homePage/ExperienceMobile.js';
import Experience from '../components/homePage/Experience.js';
import SystemMobile from '../components/homePage/SystemMobile.js';
import System from '../components/homePage/System.js';
import HomeRanchMobile from '../components/homePage/HomeRanchMobile.js';
import HomeRanch from '../components/homePage/HomeRanch.js';
import StoryMobile from '../components/homePage/StoryMobile.js';
import Story from '../components/homePage/Story.js';
import HomeBannerMobile from '../components/homePage/HomeBannerMobile.js';
import HomeBanner from '../components/homePage/HomeBanner.js';
import National from '../components/homePage/National.js';
import HomeFooter from '../components/homePage/HomeFooter.js';

function Home(){
    return(
<>
<HomeBanner/>
  <HomeBannerMobile/>
  <ExperienceMobile/>

  <Experience/>
  <SystemMobile/>
  <System/>
  <HomeRanchMobile/>
  <HomeRanch/>
  <StoryMobile/>
  <Story/>
  <National/>
  <HomeFooter/>

</>

    );


}


export default Home;