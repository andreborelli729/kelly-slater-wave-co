import React from 'react';
import '../../css/scienceBanner.css';
import ranchBannerFullWidth from '../../assets/ranchBannerFullWidth.jpg';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


function RanchBanner(){
    return(
        <section className="cienciaBanner">
             <aside className="cienciaBannerGrid1">
              <Link to="/"> <img src={logo} alt="Logo Kelly Slater Wave Co" className="cienciaBannerLogo"></img></Link> 
            </aside>
            <div className="cienciaBannerGrid2">
                <img src={ranchBannerFullWidth} alt="a nice artistic image of an entrance" className="cienciaBannerImg"></img>
                <h2 className=" cienciaBannerTitle">
                Surf Ranch</h2>
                <div className="cienciaBannerTextContainer">
                    <h4 className="cienciaBannerSpamTitle">
                    Unforgettable</h4>
                    <p className="cienciaBannerSpamParagraph">Between barns, horse ranches, and farm fields in California’s Central Valley there is an epic wave that is available to all. A bigger, better, longer wave than any created before. We call this place Surf Ranch.</p>
                </div>
             </div>
        </section>
    );
}


export default RanchBanner;