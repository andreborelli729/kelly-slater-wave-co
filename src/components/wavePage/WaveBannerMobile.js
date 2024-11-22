import React from 'react';
import '../../css/waveBannerMobile.css';
import wave from '../../assets/wave.jpg';

function WaveBannerMobile(){
    return(
<section className="ondaBannerMobile">
    <img src={wave} alt="onda do kelly slater wave co" className="ondaBannerImgMobile"></img>
        <h2 className="ondaBannerTitleMobile">The Wave</h2>

        <div className="ondaBannerTextContainerMobile">
                <h4 className="theBestTitleMobile">Only The Best</h4>
                <p className="theBestParagraphMobile">First, Kelly Slater Wave Co focused on developing the longest open barrel high performance human-made wave in the world to challenge elite surfers. From there, they scaled it back, providing enjoyment and progression for everyone else.</p>

                </div>
</section>

    );
}


export default WaveBannerMobile;