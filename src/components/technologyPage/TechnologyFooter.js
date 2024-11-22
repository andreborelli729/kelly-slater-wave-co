import React from 'react';
import technologyFooterImg from '../../assets/technologyFooter.png';
import '../../css/waveFooter.css';
import logoAndreBorelli from '../../assets/logoandreborelli.png';
import { Link } from 'react-router-dom';

function TechnologyFooter(){
    return(
<section className="waveFooter">
<Link to ='/the-wave'><img src={technologyFooterImg} alt="Click to go to the wave page" className="waveFooterImg"></img></Link>
    <div className="waveFooterArea">
        <a href="https://andreborelliwebdeveloper.netlify.app/"><img src={logoAndreBorelli} alt="logo do André Borelli Engenheiro Front-end" className="waveFooterLogo"></img></a>
    </div>

</section>

    );
}



export default TechnologyFooter;