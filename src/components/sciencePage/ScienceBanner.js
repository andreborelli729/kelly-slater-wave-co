import React from 'react';
import '../../css/scienceBanner.css';
import scienceBannerFullWidth from '../../assets/scienceBannerFullWidth.jpg';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


function ScienceBanner(){
    return(
        <section className="cienciaBanner">
             <aside className="cienciaBannerGrid1">
               <Link to="/"> <img src={logo} alt="Logo Kelly Slater Wave Co" className="cienciaBannerLogo"></img></Link>
            </aside>
            <div className="cienciaBannerGrid2">
                <img src={scienceBannerFullWidth} alt="a nice artistic image of an wave" className="cienciaBannerImg"></img>
                <h2 className=" cienciaBannerTitle">The Science</h2>
                <div className="cienciaBannerTextContainer">
                    <h4 className="cienciaBannerSpamTitle">
                    Innovation</h4>
                    <p className="cienciaBannerSpamParagraph">An international team of scientists, engineers, and designers re-creating a true best-in-class ocean surfing experience.</p>
                </div>
             </div>
        </section>
    );
}


export default ScienceBanner;