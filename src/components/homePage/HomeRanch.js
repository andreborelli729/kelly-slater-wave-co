import React from 'react';
import '../../css/homeRanch.css';
import ranch1 from '../../assets/ranch.jpg';
import ranch2 from '../../assets/ranch2.jpg';
import ranch3 from '../../assets/ranch3.jpg';
import { Link } from 'react-router-dom';

function HomeRanch(){
    return(
<section className="ranch">
        
        <div className="ranchTextContainer">
            <h2 className="ranchTitle">SURF RANCH</h2>
            <p className="ranchParagraph">Surf Ranch is the first of its kind, an immersive surf lifestyle experience in the middle of farm fields in Central California (over 100 miles from the ocean). Surf Ranch is a bucket-list surf destination resort, offering epic waves, overnight lodging and farm to table cuisine, delivering lifelong memories for those who visit.</p>
            <Link to="/surf-ranch"><button className="ranchBtn">Surf Ranch</button></Link>
        </div>

        <div className="ranchImgContainer">
        <img src={ranch2} alt="Image of the surf ranch structure" className="ranchImg2"></img>

            <img src={ranch1} alt="Image of the surf ranch structure" className="ranchImg1"></img>
            <img src={ranch3} alt="Image of the surf ranch structure" className="ranchImg3"></img>

        </div>

</section>

    );
}


export default HomeRanch;