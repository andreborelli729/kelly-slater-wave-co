import React from 'react';
import '../css/ranchMobile.css';
import ranch1 from '../assets/ranch.jpg';
import ranch2 from '../assets/ranch2.jpg';
import ranch3 from '../assets/ranch3.jpg';

function RanchMobile(){
    return(
<section className="ranchMobile">
        
        <div className="ranchMobileTextContainer">
            <h2 className="ranchMobileTitle">SURF RANCH</h2>
            <p className="ranchMobileParagraph">Surf Ranch is the first of its kind, an immersive surf lifestyle experience in the middle of farm fields in Central California (over 100 miles from the ocean). Surf Ranch is a bucket-list surf destination resort, offering epic waves, overnight lodging and farm to table cuisine, delivering lifelong memories for those who visit.</p>
            <button className="ranchMobileBtn">Surf Ranch</button>
        </div>

        <div className="ranchMobileImgContainer">
            <img src={ranch1} alt="Image of the surf ranch structure" className="ranchMobileImg1"></img>
            <img src={ranch2} alt="Image of the surf ranch structure" className="ranchMobileImg2"></img>
            <img src={ranch3} alt="Image of the surf ranch structure" className="ranchMobileImg3"></img>

        </div>

</section>

    );
}


export default RanchMobile;