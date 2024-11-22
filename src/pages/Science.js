import React from 'react';
import ScienceBannerMobile from '../components/sciencePage/ScienceBannerMobile.js';
import ScienceBanner from '../components/sciencePage/ScienceBanner.js';
import ScienceStoryMobile from '../components/sciencePage/ScienceStoryMobile.js';
import ScienceStory from '../components/sciencePage/ScienceStory.js';
import Phd from '../components/sciencePage/Phd.js';
import ScienceFooter from '../components/sciencePage/ScienceFooter.js';
import ScienceProcessMobile from '../components/sciencePage/ScienceProcessMobile.js';
import ScienceProcess from '../components/sciencePage/ScienceProcess.js';
import ScienceBest from '../components/sciencePage/ScienceBest.js';

function Science(){
    return(
        <>
        <ScienceBannerMobile/>
        <ScienceBanner/>
        <ScienceStoryMobile/>
        <ScienceStory/>
        <ScienceProcessMobile/>
        <ScienceProcess/>
        <ScienceBest/>
        <Phd/>
        <ScienceFooter/>
        </>
    );



}


export default Science;