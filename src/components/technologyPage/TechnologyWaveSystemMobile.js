import React from 'react';
import '../../css/technologyWaveSystemMobile.css';
import waveSystem1 from '../../assets/wavesystem.png';
import waveSystem2 from '../../assets/wavesystem2.png';

function TechnologyWaveSystemMobile(){
    return(
        <section className="technologyWaveSystemMobile">
            <div className="technologyWaveSystemTextContainerMobile">
                <h2 className="technologyWaveSystemTitleMobile">
                Kelly Slater Wave Systems
                </h2>

                <p className="technologyWaveSystemParagraphMobile">
                The greatest wave system technology as experienced by Gerry Lopez, one of the world's most respected surfers and waterman.
                </p>

           </div>

           <div className="technologyWaveSystemImgContainerMobile">
<a href="https://player.vimeo.com/video/231896676?autoplay=1&autopause=0&title=0&byline=0&portrait=0"><img src={waveSystem1} alt="video about kelly slater wave co surfing. click on it to see" className="technologyWaveSystemImg1Mobile"></img></a>
<img src={waveSystem2} alt="image of kelly slater wave co structure" className="technologyWaveSystemImg2Mobile"></img>

</div>


        </section>
    );
}


export default TechnologyWaveSystemMobile;