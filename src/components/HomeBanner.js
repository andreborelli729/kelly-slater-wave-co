import React from 'react';
import '../css/homeBanner.css';
import videoBg from '../assets/background-video.mp4';
import logo from '../assets/logo.png';

function HomeBanner(){
    return(
        <section className="homeBanner">
            <aside className="homeBannerGrid1">
                <img src={logo} alt="Logo Kelly Slater Wave Co" className="homeBannerLogo"></img>
            </aside>
            
            <div className="homeBannerGrid2">
                <video src={videoBg} autoPlay loop muted alt="kelly slater surfing ranch co" className="homeBannerVideo">  </video>          
                <h2 className="homeBannerTitle">KELLY SLATER WAVE CO.</h2>
                <div className="homeBannerBtnContainer">
                <button className="homeBannerBtn1">
                <p className="homeBannerBtn1Text1">WORLD SURF LEAGUE</p>
                <p className="homeBannerBtn1Text2">Learn More About WSL</p>
                </button>
                <button className="homeBannerBtn2">
                    See the Wave
                    </button>
                    </div>
                    </div>
        </section>
    );
}


export default HomeBanner;