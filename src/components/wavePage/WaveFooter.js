import React from 'react';
import seeTheScience from '../../assets/seeTheScience.jpg';
import '../../css/waveFooter.css';
import logoAndreBorelli from '../../assets/logoandreborelli.png';
import { Link } from 'react-router-dom';

function WaveFooter(){
    return(
<section className="waveFooter">
<Link to="/the-science"><img src={seeTheScience} alt="Image of a perfect wave" className="waveFooterImg"></img></Link>
    <div className="waveFooterArea">
        <a href="https://andreborelliwebdeveloper.netlify.app/"><img src={logoAndreBorelli} alt="logo do André Borelli Engenheiro Front-end" className="waveFooterLogo"></img></a>
    </div>

</section>

    );
}



export default WaveFooter;