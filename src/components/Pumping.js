import React from 'react';
import pumping from '../assets/pumping.jpg';
import '../css/pumping.css';

function Pumping(){
    return(
<section className="pumping">
<div className="pumpingTextContainer">
    <h2 className="pumpingTitle">Always Pumping</h2>
    <p className="pumpingParagraph">Kelly Slater Wave Systems technology sets the stage for premium, progression focused, surf lifestyle experiences. The waves are always rolling and for everyone to enjoy.</p>
</div>
<div className="pumpingImgContainer">
<a href="https://player.vimeo.com/video/458720286?autoplay=1&autopause=0&title=0&byline=0&portrait=0"><img src={pumping} alt="kid enjoying a good kelly slater co wave. Click for Video" className="pumpingImg"></img></a>
</div>
</section>

    );
}


export default Pumping;