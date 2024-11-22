import React from 'react';
import '../../css/homeBannerMobile.css';
import videoBg from '../../assets/videoBg.mp4';
import { Link } from 'react-router-dom';


function HomeBannerMobile(){
    return(
        <section className="homeBannerMobile">
            <video src={videoBg} autoPlay loop muted alt="kelly slater surfing ranch co" className="homeBannerVideoMobile">
            </video>
            <h2 className="homeBannerTitleMobile">KELLY SLATER WAVE CO.</h2>
            <div className="homeBannerSpanMobile">
            <a href="https://www.worldsurfleague.com/"><button className="homeBannerBtn1Mobile">
                <p className="homeBannerBtn1Text1Mobile">WORLD SURF LEAGUE</p>
                <p className="homeBannerBtn1Text2Mobile">Learn More About WSL</p>
                </button></a>
                <Link to="/the-wave"><button className="homeBannerBtn2Mobile">
                    See the Wave
                    </button></Link>

            </div>

        </section>
    );
}

export default  HomeBannerMobile;