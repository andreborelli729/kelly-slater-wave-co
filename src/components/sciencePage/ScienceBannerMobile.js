import React from 'react';
import '../../css/scienceBannerMobile.css';
import scienceBanner from '../../assets/scienceBanner.png';

function ScienceBannerMobile(){
    return(
<section className="cienciaBannerMobile">
    <img src={scienceBanner} alt="nice artistic image of an kelly slater's wave" className="cienciaBannerImgMobile"></img>
        <h2 className="cienciaBannerTitleMobile">
        The Science</h2>

        <div className="cienciaBannerTextContainerMobile">
                <h4 className="cienciaSpamTitleMobile">Innovation</h4>
                <p className="cienciaSpamParagraphMobile">An international team of scientists, engineers, and designers re-creating a true best-in-class ocean surfing experience.







</p>

                </div>
</section>

    );
}


export default ScienceBannerMobile;