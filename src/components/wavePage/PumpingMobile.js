import React from 'react';
import '../../css/pumpingMobile.css';
import pumping from '../../assets/pumping.jpg';


function PumpingMobile(){
    return(
<section className="pumpingMobile">
    <h2 className="pumpingTitleMobile">Always Pumping</h2>
    <p className="pumpingParagraphMobile">Kelly Slater Wave Systems technology sets the stage for premium, progression focused, surf lifestyle experiences. The waves are always rolling and for everyone to enjoy.</p>
    <a href="https://player.vimeo.com/video/458720286?autoplay=1&autopause=0&title=0&byline=0&portrait=0"><img src={pumping} alt="kids enjoying good surfing" className="pumpingImgMobile"></img></a>
</section>

    );
}

export default PumpingMobile;