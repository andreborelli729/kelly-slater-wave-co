import React from 'react';
import '../../css/waveBanner.css';
import contact from '../../assets/contactBannerFullWidth.jpg';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


function ContactBanner(){
    return(
        <section className="ondaBanner">
             <aside className="ondaBannerGrid1">
               <Link to="/"> <img src={logo} alt="Logo Kelly Slater Wave Co" className="ondaBannerLogo"></img></Link>
            </aside>
            <div className="ondaBannerGrid2">
            <img src={contact} alt="many surf suits togheter" className="ondaBannerImg"></img>
            <h2 className=" contatoBannerTitle">Contact</h2>
            <div className="ondaBannerTextContainer">
                <p className="contatoBannerParagraph">

                Contact our team about development opportunities below. Join our community in the footer for the latest news.






</p>
</div>

            </div>
        </section>
    );
}


export default ContactBanner;