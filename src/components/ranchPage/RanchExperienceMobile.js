import React from 'react';
import '../../css/ranchExperienceMobile.css';
import ranchExperience1 from '../../assets/ranchExperience1.jpg';
import ranchExperience2 from '../../assets/ranchExperience2.png';
import ranchExperience3 from '../../assets/ranchExperience3.jpg';

function RanchExperienceMobile(){
    return(
        <section className="ranchExperienceMobile">
            <h2 className="ranchExperienceTitleMobile">THE EXPERIENCE</h2>
            <p className="ranchExperienceParagraphMobile">The clubhouse, locker room, and connecting outdoor patio space, hot tub, and fire pit will provide an active communal area for you and your guests to socialize while taking in views of The Wave. You can bring and store your own boards, but we’ve also assorted a world-class boardroom with wave-riding craft of all shapes and sizes. The nutritious, healthy food is made-to-order by our expert chef sourcing local, organic ingredients.</p>
            <img src={ranchExperience1} alt="room with a lot of surfboards" className="ranchExperienceImg1Mobile"></img>
            <img src={ranchExperience2} alt="road with a lot of vans traveling" className="ranchExperienceImg2Mobile"></img>
            <img src={ranchExperience3} alt="surfland gate" className="ranchExperienceImg3Mobile"></img>

        </section>
    );
}

export default RanchExperienceMobile;
