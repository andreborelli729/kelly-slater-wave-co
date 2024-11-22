import React from 'react';
import RanchBannerMobile from '../components/RanchBannerMobile.js';
import RanchBanner from '../components/RanchBanner.js';
import RanchFooter from '../components/RanchFooter.js';
import RanchServiceMobile from '../components/RanchServiceMobile.js';
import RanchService from '../components/RanchService.js';
import RanchWaveMobile from '../components/RanchWaveMobile.js';
import RanchWave from '../components/RanchWave.js';
import RanchExperienceMobile from '../components/RanchExperienceMobile.js';
import RanchExperience from '../components/RanchExperience.js';
import RanchWslMobile from '../components/RanchWslMobile.js';
import RanchWsl from '../components/RanchWsl.js';

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