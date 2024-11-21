import React from 'react';
import logo from '../assets/logo.png';
import wave from '../assets/perfect-wave.jpg';
import wave2 from '../assets/perfect-wave2.jpg';
import '../css/system.css';


function System(){
    return(
<section className="sistema">



<div className="sistemaImgContainer">
<img src={wave} alt="perfect wave" className="sistemaImg1"></img>
<img src={wave2} alt="perfect wave" className="sistemaImg2"></img>
<img src={logo} alt="Kelly Slater Wave Company Logo" className="sistemaImg3"></img>
</div>



<div className="sistemaTextContainer">
<h2 className="sistemaTitle">KELLY SLATER WAVE SYSTEM</h2>
<p className="sistemaParagraph">This next level technology produces the longest, open barrel, high performance, human-made wave in the world. Founded on a formal scientific investigation to recreate the best ocean waves, Kelly Slater Wave Systems are designed, constructed and maintained to the highest industry standard delivering reliability, safety and performance. This is the only wave system to earn the WSL Certified designation, meaning the waves are fit for WSL elite competition.</p>
<button className="sistemaBtn">See Kelly Slater Wave System</button>
</div>


 
</section>

    );
}


export default System;
