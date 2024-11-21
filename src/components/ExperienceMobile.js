import React from 'react';
import children from '../assets/kidsurfing.jpg';
import '../css/experienceMobile.css';
import wsl from '../assets/wsl.jpg';

function ExperienceMobile(){
    return(
<section className="experienciaMobile">
<h2 className="experienciaMobileTitle">THE EXPERIENCE</h2>
<p className="experienciaMobileParagraph">Kelly Slater Wave Co provides the ultimate surf setting, providing the highest levels of service and experiences. Kelly Slater Wave Co technology comes alive in partnership with the World Surf League, delivering unparalleled surf programs, training and events that share the stoke of surfing.</p>
<button className="experienciaMobileBtn">See The Experiences</button>
<img src={children} alt="children surfing kelly slater's artificial wave" className="experienciaMobileImg"></img>
<img src={wsl} alt="logo of World Surf League(WSL)" className="experienciaMobileImg2"></img>
</section>

    );
}


export default ExperienceMobile;