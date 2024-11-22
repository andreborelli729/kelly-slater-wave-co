import React from 'react';
import '../../css/ranchWsl.css';
import ranchWsl1 from '../../assets/ranchWsl1.jpg';
import ranchWsl2 from '../../assets/ranchWsl2.jpg';
import ranchWsl3 from '../../assets/ranchWsl3.jpg';
import ranchWsl4 from '../../assets/ranchWsl4.jpg';

function RanchWsl(){
    return(
        <section className="ranchWsl">
            <div className="ranchWslTextContainer">

            <h2 className="ranchWslTitle">WSL COMPETITION </h2>
            <p className="ranchWslParagraph">WSL Certified facilities are eligible to host WSL competitive events featuring the world's best surfers on the world's best human-made waves. These venues bring athletes and spectators closer together than ever with new viewing angles, heart-pounding action, and unforgettable moments. And with a programmable start time, the contests will be broadcast live to more screens around the globe than ever before.</p>
            </div>

            <div className="ranchWslImgContainer">
            <img src={ranchWsl1} alt="party in the ranch" className="ranchWslImg1"></img>
        <img src={ranchWsl2} alt="guy surfing" className="ranchWslImg2"></img>
       <a href="https://player.vimeo.com/video/463105027?autoplay=1&autopause=0&title=0&byline=0&portrait=0"><img src={ranchWsl3} alt="champions hanging their tropheus" className="ranchWslImg3"></img></a> 
        <img src={ranchWsl4} alt="competitors" className="ranchWslImg4"></img>
            </div>

        </section>
    );
}

export default RanchWsl;