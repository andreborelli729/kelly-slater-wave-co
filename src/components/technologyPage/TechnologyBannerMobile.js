import React from 'react';
import '../../css/technologyBannerMobile.css';
import tecnologia from '../../assets/technology.png';

function TechnologyBannerMobile(){
    return(
<section className="tecnologiaBannerMobile">
    <img src={tecnologia} alt="tecnologia do kelly slater wave co" className="tecnologiaBannerImgMobile"></img>
        <h2 className="tecnologiaBannerTitleMobile">
        The Technology</h2>

        <div className="tecnologiaBannerTextContainerMobile">
                <h4 className="tecnologiaSpamTitleMobile">Technology</h4>
                <p className="tecnologiaSpamParagraphMobile">The longest open barrel high performance human-made wave in the world. Take a closer look at the latest version of Kelly Slater Wave Systems and what sets it apart.</p>

                </div>
</section>

    );
}


export default TechnologyBannerMobile;