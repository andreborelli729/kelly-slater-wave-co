import React from 'react';
import WaveBannerMobile from '../components/wavePage/WaveBannerMobile.js';
import WaveBanner from '../components/wavePage/WaveBanner.js';
import PumpingMobile from '../components/wavePage/PumpingMobile.js';
import Pumping from '../components/wavePage/Pumping.js';
import WaveProfilesMobile from '../components/wavePage/WaveProfilesMobile.js';
import WaveProfiles from '../components/wavePage/WaveProfiles.js';
import WaveFooter from '../components/wavePage/WaveFooter.js';

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