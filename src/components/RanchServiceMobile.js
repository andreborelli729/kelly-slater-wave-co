import React from 'react';
import '../css/ranchServiceMobile.css';
import ranchService from '../assets/ranchService.png';

function RanchServiceMobile(){
    return(
        <section className="ranchServiceMobile">
            <img src={ranchService} alt="Interviewed surfer guy" className="ranchServiceImgMobile"></img>
            <h2 className="ranchServiceTitleMobile">The Service</h2>
            <p className="ranchServiceParagraphMobile">Beyond the perfect wave and luxurious yet comfortable amenities, we’ve built a staff of friends and experts to improve your surfing, ensure your safety, provide hospitality, and deliver positive energy that is contagious both in and out of the water.</p>

        </section>
    );
}

export default RanchServiceMobile;
