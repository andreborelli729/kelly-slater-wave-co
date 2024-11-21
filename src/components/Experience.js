import React from 'react';
import children from '../assets/kidsurfing.jpg';
import '../css/experience.css';
import wsl from '../assets/wsl.jpg';


function Experience(){
    return(
<section className="experiencia">
<div className="experienciaTextContainer">
<h2 className="experienciaTitle">THE EXPERIENCE</h2>
<p className="experienciaParagraph">Kelly Slater Wave Co provides the ultimate surf setting, providing the highest levels of service and experiences. Kelly Slater Wave Co technology comes alive in partnership with the World Surf League, delivering unparalleled surf programs, training and events that share the stoke of surfing.</p>
<button className="experienciaBtn">See The Experiences</button>

</div>

<div className="experienciaImgContainer">

<img src={children} alt="children surfing kelly slater's artificial wave" className="experienciaImg"></img>
<img src={wsl} alt="logo of World Surf League(WSL)" className="experienciaImg2"></img>
</div>



</section>

    );
}


export default Experience;