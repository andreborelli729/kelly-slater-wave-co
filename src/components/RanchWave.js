import React from 'react';
import '../css/ranchService.css';
import ranchWave from '../assets/ranchWave.jpg';


function RanchWave(){
    return(
        <section className="ranchService">
            <div className="ranchServiceImgContainer">
                <img src={ranchWave} alt="inside a perfect tube wave" className="ranchServiceImg"></img>
            </div>
            <div className="ranchServiceTextContainer">
                <h2 className="ranchServiceTitle">The Wave</h2>
                <p className="ranchServiceParagraph">The central feature of Surf Ranch is the wave, the first of its kind. We built a 6-foot barreling wave that travels over 2300 feet yielding up to minute long rides. The wave can be controlled allowing a wave riding experience for surfers of all skill levels.</p>
            </div>
        </section>
    );
}

export default RanchWave;