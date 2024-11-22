import React from 'react';
import '../css/ranchBannerMobile.css';
import ranchBanner from '../assets/ranchBanner.png';

function RanchBannerMobile(){
    return(
<section className="ranchoBannerMobile">
    <img src={ranchBanner} alt="nice image of a welcome entrance" className="ranchoBannerImgMobile"></img>
        <h2 className="ranchoBannerTitleMobile">
        Surf Ranch</h2>

        <div className="ranchoBannerTextContainerMobile">
                <h4 className="ranchoSpamTitleMobile">
                Unforgettable</h4>
                <p className="ranchoSpamParagraphMobile">Between barns, horse ranches, and farm fields in California’s Central Valley there is an epic wave that is available to all. A bigger, better, longer wave than any created before. We call this place Surf Ranch.









</p>

                </div>
</section>

    );
}


export default RanchBannerMobile;