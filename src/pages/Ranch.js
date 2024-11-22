import React from 'react';
import RanchBannerMobile from '../components/RanchBannerMobile.js';
import RanchBanner from '../components/RanchBanner.js';
import RanchFooter from '../components/RanchFooter.js';
import RanchServiceMobile from '../components/RanchServiceMobile.js';
import RanchService from '../components/RanchService.js';

function Ranch(){
    return(
        <>
        <RanchBannerMobile/>
        <RanchBanner/>  
        <RanchServiceMobile/>
        <RanchService/>
        <RanchFooter/>
        </>
    );
}


export default Ranch;