import React from 'react';
import ranchFooter  from '../assets/ranchFooter.png';
import '../css/waveFooter.css';
import logoAndreBorelli from '../assets/logoandreborelli.png';
import { Link } from 'react-router-dom';

function RanchFooter(){
    return(
<section className="waveFooter">
<Link to="/contact"><img src={ranchFooter} alt="Click to go to contact page" className="waveFooterImg"></img></Link>
    <div className="waveFooterArea">
        <a href="https://andreborelliwebdeveloper.netlify.app/"><img src={logoAndreBorelli} alt="logo do André Borelli Engenheiro Front-end" className="waveFooterLogo"></img></a>
    </div>

</section>

    );
}



export default RanchFooter;