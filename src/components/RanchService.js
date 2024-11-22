import React from 'react';
import '../css/ranchService.css';
import ranchServiceImg from '../assets/ranchService.png';


function RanchService(){
    return(
        <section className="ranchService">
            <div className="ranchServiceImgContainer">
                <img src={ranchServiceImg} alt="guy interviewed" className="ranchServiceImg"></img>
            </div>
            <div className="ranchServiceTextContainer">
                <h2 className="ranchServiceTitle">THE SERVICE </h2>
                <p className="ranchServiceParagraph">Beyond the perfect wave and luxurious yet comfortable amenities, we’ve built a staff of friends and experts to improve your surfing, ensure your safety, provide hospitality, and deliver positive energy that is contagious both in and out of the water.</p>
            </div>
        </section>
    );
}

export default RanchService;