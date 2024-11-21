import React from 'react';
import '../css/homeBannerMobile.css';
import videoBg from '../assets/background-video.mp4';


function HomeBannerMobile(){
    return(
        <section className="homeBannerMobile">
            <video src={videoBg} autoPlay loop muted alt="kelly slater surfing ranch co" className="homeBannerVideoMobile">
            </video>
            <h2 className="homeBannerTitleMobile">KELLY SLATER WAVE CO.</h2>
            <div className="homeBannerSpanMobile">
            <button className="homeBannerBtn1Mobile">
                <p className="homeBannerBtn1Text1Mobile">WORLD SURF LEAGUE</p>
                <p className="homeBannerBtn1Text2Mobile">Learn More About WSL</p>
                </button>
                <button className="homeBannerBtn2Mobile">
                    See the Wave
                    </button>

            </div>

        </section>
    );
}

export default  HomeBannerMobile;