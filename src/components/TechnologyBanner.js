import React from 'react';
import '../css/technologyBanner.css';
import technology2 from '../assets/technologyFullWidth.png';
import logo from '../assets/logo.png';


function TechnologyBanner(){
    return(
        <section className="tecnologiaBanner">
             <aside className="tecnologiaBannerGrid1">
                <img src={logo} alt="Logo Kelly Slater Wave Co" className="tecnologiaBannerLogo"></img>
            </aside>
            <div className="tecnologiaBannerGrid2">
                <img src={technology2} alt="kelly slater wave co wave" className="tecnologiaBannerImg"></img>
                <h2 className=" tecnologiaBannerTitle">The Technology</h2>
                <div className="tecnologiaBannerTextContainer">
                    <h4 className="tecnologiaBannerSpamTitle">Technology</h4>
                    <p className="tecnologiaBannerSpamParagraph">The longest open barrel high performance human-made wave in the world. Take a closer look at the latest version of Kelly Slater Wave Systems and what sets it apart.</p>
                </div>
             </div>
        </section>
    );
}


export default TechnologyBanner;