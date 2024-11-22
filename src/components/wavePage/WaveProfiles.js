import React from 'react';
import '../../css/waveProfiles.css';
import profile1 from '../../assets/profile1.jpg';
import profile2 from '../../assets/profile2.jpg';
import profile3 from '../../assets/profile3.jpg';
import profile4 from '../../assets/profile4.jpg';

function WaveProfiles(){
    return(
        <section className="waveProfiles">
            <h2 className="waveProfilesTitle">Wave Profiles</h2>
            <p className="waveProfilesParagraph">Kelly Slater Wave Systems produce an endless number of wave profiles. The below are a cross section of wave types.</p>
            <div className="waveProfilesGridContainer">
            
            
            <figure className="waveProfilesFigure1">
                <h5 className="waveProfilesFigureTitle">  WSL Certified  </h5>
                <img src={profile1} alt="girlSurfing" className="waveProfilesImg"></img>
                <figcaption className="waveProfilesFigcaption">WSL Certified waves, also known as "CT" (Championship Tour) waves, were developed with the WSL to deliver contest worthy waves for WSL competitive events. Not only do these waves provide an ideal canvas for the pros to showcase their skills, they are also high demand profiles for advanced and intermediate recreational surfers to challenge themselves, continue to develop their skills and to get stoked. CT Waves feature two high performance maneuver sections and two barreling sections.</figcaption>
            </figure>

            <figure className="waveProfilesFigure2">
            <h5 className="waveProfilesFigureTitle">  Hero </h5>

                <img src={profile2} alt="guy surfing" className="waveProfilesImg"></img>
                <figcaption className="waveProfilesFigcaption">The Hero Wave is largely designed after the CT Wave profiles but with the every day surfer in mind. The Hero Wave travels at a slightly slower speed, making it easier for guests to paddle in and get down the line. The speed difference makes the barrel and maneuver sections more forgiving. This is largely the wave of choice for the everyday guest at Surf Ranch. Like the CT, this wave features two high performance maneuver sections and two barreling sections.</figcaption>
            </figure>

            <figure className="waveProfilesFigure3">
            <h5 className="waveProfilesFigureTitle"> Waikiki Wave</h5>

                <img src={profile3} alt="many frinds surfing together" className="waveProfilesImg"></img>
                <figcaption className="waveProfilesFigcaption">Named after the world famous beginner wave in Waikiki, Hawaii, this wave profile produces long, knee to waist high, open wave faces and whitewater. These waves are ideal for beginners, cruising on longboards, starting turns, and for sharing. The Waikiki Wave makes use of the entire length of the basin which means rides over a minute long.

</figcaption>
            </figure>

            <figure className="waveProfilesFigure4">
            <h5 className="waveProfilesFigureTitle"> Shore Rollers</h5>

                <img src={profile4} alt="kid learning to surf" className="waveProfilesImg"></img>
                <figcaption className="waveProfilesFigcaption">Shore Rollers, located on either end of the wave basin, is the perfect wave for guests just getting started. It allows for a safe and comfortable environment to practice fundamentals, like paddling, sitting and balancing on your board, catching waves and standing up. This whitewater wave has a gentle slope for guests to familiarize themselves with surfing basics before advancing to the main wave.</figcaption>
            </figure>
            </div>
        </section>
    );
}

export default WaveProfiles;