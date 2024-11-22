import React from 'react';
import '../../css/waveBanner.css';
import wave2 from '../../assets/waveFullWidth.jpg';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


function WaveBanner(){
    return(
        <section className="ondaBanner">
             <aside className="ondaBannerGrid1">
             <Link to="/"> <img src={logo} alt="Logo Kelly Slater Wave Co" className="ondaBannerLogo"></img></Link>  
            </aside>
            <div className="ondaBannerGrid2">
            <img src={wave2} alt="kelly slater wave co wave" className="ondaBannerImg"></img>
            <h2 className=" ondaBannerTitle">The Wave</h2>
            <div className="ondaBannerTextContainer">
                <h4 className="theBestTitle">Only The Best</h4>
                <p className="theBestParagraph">First, Kelly Slater Wave Co focused on developing the longest open barrel high performance human-made wave in the world to challenge elite surfers. From there, they scaled it back, providing enjoyment and progression for everyone else.






</p>
</div>

            </div>
        </section>
    );
}


export default WaveBanner;