import React from 'react';
import '../../css/scienceBest.css';
import scienceBest from '../../assets/scienceBest.png';

function ScienceBest(){
    return(
        <section className="scienceBest">
            <h2 className="scienceBestTitle">recreating the best wave</h2>
            <p className="scienceBestParagraph">The wave is produced by a one-of-a-kind soliton generating hydrofoil that cuts through the water at an exact speed, angle, and water depth, that when combined with a precisely positioned bottom contour (or reef), create beautifully formed high performance waves.</p>
            <img src={scienceBest} alt="kelly surfing" className="scienceBestImg"></img>
            <p className="scienceBestParagraph">Riding inside a barrel is the ultimate experience for surfers. Creating an open-face barrel, that could be ridden inside, was one of Kelly Slater Wave Co's primary goals. The company classifies its barreling waves based on the waves vortex ratio, wave height, and peel angle. The vortex ratio is the ratio of the barrel height to the barrel width. The peel angle, the angle the wave has with respect to their source, depends on the speed of the wave and hydro-foil. Adjusting these parameters creates a spectrum of different wave forms and sizes, which enables the team to Dial-A-Wave for every level of surfer.</p>
        </section>
    );
}


export default ScienceBest;