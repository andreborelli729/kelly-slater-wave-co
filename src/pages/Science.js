import React from 'react';
import ScienceBannerMobile from '../components/ScienceBannerMobile.js'
import ScienceBanner from '../components/scienceBanner.js';
import ScienceStoryMobile from '../components/ScienceStoryMobile.js';
import ScienceStory from '../components/ScienceStory.js';
import Phd from '../components/Phd.js';
import ScienceFooter from '../components/ScienceFooter.js';

function Science(){
    return(
        <>
        <ScienceBannerMobile/>
        <ScienceBanner/>
        <ScienceStoryMobile/>
        <ScienceStory/>
        <Phd/>
        <ScienceFooter/>
        </>
    );



}


export default Science;