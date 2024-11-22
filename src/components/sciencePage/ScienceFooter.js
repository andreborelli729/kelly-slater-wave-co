import React from 'react';
import scienceFooter  from '../../assets/scienceFooter.png';
import '../../css/waveFooter.css';
import logoAndreBorelli from '../../assets/logoandreborelli.png';
import { Link } from 'react-router-dom';

function ScienceFooter(){
    return(
<section className="waveFooter">
<Link to="/surf-ranch"><img src={scienceFooter} alt="Click to go see the ranch page" className="waveFooterImg"></img></Link>
    <div className="waveFooterArea">
        <a href="https://andreborelliwebdeveloper.netlify.app/"><img src={logoAndreBorelli} alt="logo do André Borelli Engenheiro Front-end" className="waveFooterLogo"></img></a>
    </div>

</section>

    );
}



export default ScienceFooter;