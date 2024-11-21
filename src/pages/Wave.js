import React from 'react';
import WaveBannerMobile from '../components/WaveBannerMobile.js';
import WaveBanner from '../components/WaveBanner.js';
import PumpingMobile from '../components/PumpingMobile.js';
import Pumping from '../components/Pumping.js';
import WaveProfilesMobile from '../components/WaveProfilesMobile.js';
import WaveProfiles from '../components/WaveProfiles.js';
import WaveFooter from '../components/WaveFooter.js';

function Wave(){
    return(
        <>
        <WaveBannerMobile/>
        <WaveBanner/>
        <PumpingMobile/>
        <Pumping/>
        <WaveProfilesMobile/>
        <WaveProfiles/>
        <WaveFooter/>
        </>
    );
}


export default Wave;