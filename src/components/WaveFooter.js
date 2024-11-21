import React from 'react';
import seeTheScience from '../assets/seeTheScience.jpg';
import '../css/waveFooter.css';
import logoAndreBorelli from '../assets/logoandreborelli.png';

function WaveFooter(){
    return(
<section className="waveFooter">
<img src={seeTheScience} alt="Image of a perfect wave" className="waveFooterImg"></img>
    <div className="waveFooterArea">
        <a href="https://andreborelliwebdeveloper.netlify.app/"><img src={logoAndreBorelli} alt="logo do André Borelli Engenheiro Front-end" className="waveFooterLogo"></img></a>
    </div>

</section>

    );
}



export default WaveFooter;