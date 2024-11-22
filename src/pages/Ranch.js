import React from 'react';
import RanchBannerMobile from '../components/ranchPage/RanchBannerMobile.js';
import RanchBanner from '../components/ranchPage/RanchBanner.js';
import RanchFooter from '../components/ranchPage/RanchFooter.js';
import RanchServiceMobile from '../components/ranchPage/RanchServiceMobile.js';
import RanchService from '../components/ranchPage/RanchService.js';
import RanchWaveMobile from '../components/ranchPage/RanchWaveMobile.js';
import RanchWave from '../components/ranchPage/RanchWave.js';
import RanchExperienceMobile from '../components/ranchPage/RanchExperienceMobile.js';
import RanchExperience from '../components/ranchPage/RanchExperience.js';
import RanchWslMobile from '../components/ranchPage/RanchWslMobile.js';
import RanchWsl from '../components/ranchPage/RanchWsl.js';

function Ranch(){
    return(
        <>
        <RanchBannerMobile/>
        <RanchBanner/>  
        <RanchWaveMobile/>
        <RanchWave/>
        <RanchExperienceMobile/>
        <RanchExperience/>
        <RanchServiceMobile/>
        <RanchService/>
        <RanchWslMobile/>
        <RanchWsl/>
        <RanchFooter/>
        </>
    );
}


export default Ranch;