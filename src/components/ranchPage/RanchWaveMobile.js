import React from 'react';
import '../../css/ranchWaveMobile.css';
import ranchWave from '../../assets/ranchWave.jpg';

function RanchWaveMobile(){
    return(
        <section className="ranchWaveMobile">
          <img src={ranchWave} alt="inside a wave tube image" className="ranchWaveImgMobile"></img>
        <h2 className="ranchWaveTitleMobile">The Wave</h2>
        <p className="ranchWaveParagraphMobile">The central feature of Surf Ranch is the wave, the first of its kind. We built a 6-foot barreling wave that travels over 2300 feet yielding up to minute long rides. The wave can be controlled allowing a wave riding experience for surfers of all skill levels.</p>
        
        </section>
    );

}


export default RanchWaveMobile;