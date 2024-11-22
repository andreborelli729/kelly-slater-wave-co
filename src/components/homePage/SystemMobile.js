import React from 'react';
import logo from '../../assets/logo.png';
import wave from '../../assets/perfect-wave.jpg';
import wave2 from '../../assets/perfect-wave2.jpg';
import '../../css/systemMobile.css';
import { Link } from 'react-router-dom';

function SystemMobile(){
    return(
<section className="sistemaMobile">

<div className="sistemaMobileTextContainer">
<h2 className="sistemaMobileTitle">KELLY SLATER WAVE SYSTEM</h2>
<p className="sistemaMobileParagraph">This next level technology produces the longest, open barrel, high performance, human-made wave in the world. Founded on a formal scientific investigation to recreate the best ocean waves, Kelly Slater Wave Systems are designed, constructed and maintained to the highest industry standard delivering reliability, safety and performance. This is the only wave system to earn the WSL Certified designation, meaning the waves are fit for WSL elite competition.</p>
<Link to="/the-technology"><button className="sistemaMobileBtn">See Kelly Slater Wave System</button></Link>
</div>

<div className="sistemaMobileImgContainer">
<img src={wave} alt="perfect wave" className="sistemaMobileImg1"></img>
<img src={wave2} alt="perfect wave" className="sistemaMobileImg2"></img>
<img src={logo} alt="Kelly Slater Wave Company Logo" className="sistemaMobileImg3"></img>
</div>


 
</section>

    );
}


export default SystemMobile;