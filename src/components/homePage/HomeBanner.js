import React from 'react';
import '../../css/homeBanner.css';
import videoBg from '../../assets/videoBg.mp4';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function HomeBanner(){
    return(
        <section className="homeBanner">
            <aside className="homeBannerGrid1">
                <Link to="/"><img src={logo} alt="Logo Kelly Slater Wave Co" className="homeBannerLogo"></img></Link>
            </aside>
            
            <div className="homeBannerGrid2">
                <video src={videoBg} autoPlay loop muted alt="kelly slater surfing ranch co" className="homeBannerVideo">  </video>          
                <h2 className="homeBannerTitle">KELLY SLATER WAVE CO.</h2>
                <div className="homeBannerBtnContainer">
                <a href="https://www.worldsurfleague.com/"><button className="homeBannerBtn1">
                <p className="homeBannerBtn1Text1">WORLD SURF LEAGUE</p>
                <p className="homeBannerBtn1Text2">Learn More About WSL</p>
                </button></a>
                <Link to="the-wave"><button className="homeBannerBtn2">
                    See the Wave
                    </button></Link>
                    </div>
                    </div>
        </section>
    );
}


export default HomeBanner;