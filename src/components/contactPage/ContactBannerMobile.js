import React from 'react';
import '../../css/waveBannerMobile.css';
import contactMobile from '../../assets/contactBanner.png';

function ContactBannerMobile(){
    return(
<section className="ondaBannerMobile">
    <img src={contactMobile} alt="many surf suits together" className="ondaBannerImgMobile"></img>
        <h2 className="contatoBannerTitleMobile">Contact</h2>

        <div className="contatoBannerTextContainerMobile">
                <p className="theBestParagraphMobile">Contact our team about development opportunities below.Join our community in the footer for the latest news.</p>

                </div>
</section>

    );
}


export default ContactBannerMobile;