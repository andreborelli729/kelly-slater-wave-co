import React from 'react';
import contactFooter  from '../assets/contactFooter.png';
import '../css/waveFooter.css';
import logoAndreBorelli from '../assets/logoandreborelli.png';
import { Link } from 'react-router-dom';

function ContactFooter(){
    return(
<section className="waveFooter">
<Link to="/"><img src={contactFooter} alt="Click to go home" className="waveFooterImg"></img></Link>
    <div className="waveFooterArea">
        <a href="https://andreborelliwebdeveloper.netlify.app/"><img src={logoAndreBorelli} alt="logo do André Borelli Engenheiro Front-end" className="waveFooterLogo"></img></a>
    </div>

</section>

    );
}



export default ContactFooter;