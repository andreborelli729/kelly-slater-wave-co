import React from 'react';
import '../../css/technical.css';
import technical1 from '../../assets/technical.jpg';
import technical2 from '../../assets/technical2.jpg';
import technical3 from '../../assets/technical3.jpg';
import technical4 from '../../assets/technical4.png';
import technical5 from '../../assets/technical5.png';
import technical6 from '../../assets/technical6.jpg';
import technical7 from '../../assets/technical7.jpg';
import technical8 from '../../assets/technical8.png';

function Technical(){
    return(
        <section className="technical">
            <h2 className="technicalTitle">The Technical Advantage</h2>
            <p className="technicalParagraph">This wave is made possible by a number of integrated technologies, creating a larger dynamic system, known as Kelly Slater Wave Systems</p>
            <div className="technicalGridContainer">
            
            
            <figure className="technicalFigure1">
                <h5 className="technicalFigureTitle"> Power  </h5>
                <a href="https://player.vimeo.com/video/241569700?autoplay=1&autopause=0&title=0&byline=0&portrait=0">     <img src={technical1} alt="kelly surfing" className="technicalImg"></img></a>
                <figcaption className="technicalFigcaption">Our patented hydrofoil generator creates waves with significant power. The main wave breaks without power degradation and provides a consistent energy profile for the surfer. Surfers can see the power when it barrels, hear it when the lip splits the water and feel it speeding down the line.</figcaption>
            </figure>

            <figure className="technicalFigure2">
            <h5 className="technicalFigureTitle"> Size </h5>

                <img src={technical2} alt="girl surfing" className="technicalImg"></img>
                <figcaption className="technicalFigcaption">The technology produces sizable wave faces up to 8 feet in height. The main wave breaks with no size degradation throughout the ride, providing a wave suited for competitive events and exhilarating guests.</figcaption>
            </figure>

            <figure className="technicalFigure3">
            <h5 className="technicalFigureTitle"> Form</h5>

                <img src={technical3} alt="perfect wave" className="technicalImg"></img>
                <figcaption className="technicalFigcaption">The wave form is inspired and designed by world class ocean waves. This includes large open-barrels for tube riding and long sloped faces for turns and airs. These characteristics coupled with other wave profiles provide the ultimate conditions for skill progression and fun for all types of surfers.

</figcaption>
            </figure>

            <figure className="technicalFigure4">
            <h5 className="technicalFigureTitle"> Duration</h5>

                <img src={technical4} alt="kelly slater wave co structure" className="technicalImg"></img>
                <figcaption className="technicalFigcaption">The system delivers the longest human-made wave in the world with rides up to a minute in duration. This allows surfers to get settled on their board and to dedicate their time to on-wave progression. The stoke is next level when you ride the wave all the way through to completion.</figcaption>
            </figure>

            <figure className="technicalFigure5">
                <h5 className="technicalFigureTitle"> Dampening   </h5>
                <img src={technical5} alt="psicodelic art" className="technicalImg"></img>
                <figcaption className="technicalFigcaption">The system includes proprietary dampening technology that reduces chop and seiche created by the wave. This allows for calm conditions to be present before the next wave rolls. These calm surface conditions allow for guests to have a smooth ride free of surface chop.</figcaption>
            </figure>

            <figure className="technicalFigure6">
            <h5 className="technicalFigureTitle">  Variability</h5>

                <img src={technical6} alt="friends surfing the same wave" className="technicalImg"></img>
                <figcaption className="technicalFigcaption">The system provides tailored waves for all levels of surfers, its Dial-a-Wave technology is extremely “tunable” modifying wave form, height and power from one wave to the next. One wave can feature a pro doing progressive airs with the next wave delivering a smooth roller for youngsters on soft tops.</figcaption>
            </figure>

            <figure className="technicalFigure7">
            <h5 className="technicalFigureTitle"> Reliability</h5>

                <img src={technical7} alt="kelly slater wave co team" className="technicalImg"></img>
                <figcaption className="technicalFigcaption">The system is designed, fabricated and operated to the highest commercial standards to ensure performance and reliability. Kelly Slater Wave Co works with global leaders in dynamics systems and brings significant expertise to the design, fabrication and maintenance of these robust systems.

</figcaption>
            </figure>

            <figure className="technicalFigure8">
            <h5 className="technicalFigureTitle"> Activation</h5>

                <img src={technical8} alt="kelly slater wave co structure" className="technicalImg"></img>
                <figcaption className="technicalFigcaption">Endless design opportunities to create supplemental wave, water-based and beach lifestyle activations.



</figcaption>
            </figure>
            </div>
        </section>
    );
}

export default Technical;