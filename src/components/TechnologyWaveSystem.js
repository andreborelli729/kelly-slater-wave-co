import React from 'react';
import '../css/technologyWaveSystem.css';
import waveSystem1 from '../assets/wavesystem.png';
import waveSystem2 from '../assets/wavesystem2.png';

function TechnologyWaveSystem(){
    return(
        <section className="technologyWaveSystem">
            <div className="technologyWaveSystemTextContainer">
                <h2 className="technologyWaveSystemTitle">
                Kelly Slater Wave Systems
                </h2>

                <p className="technologyWaveSystemParagraph">
                The greatest wave system technology as experienced by Gerry Lopez, one of the world's most respected surfers and waterman.
                </p>

           </div>

           <div className="technologyWaveSystemImgContainer">
<a href="https://player.vimeo.com/video/231896676?autoplay=1&autopause=0&title=0&byline=0&portrait=0"><img src={waveSystem1} alt="video about kelly slater wave co surfing. click on it to see" className="technologyWaveSystemImg1"></img></a>
<img src={waveSystem2} alt="image of kelly slater wave co structure" className="technologyWaveSystemImg2"></img>

</div>


        </section>
    );
}


export default TechnologyWaveSystem;