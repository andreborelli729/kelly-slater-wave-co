import React from 'react';
import '../../css/scienceProcess.css';
import scienceProcess1 from '../../assets/scienceProcess1.jpg';
import scienceProcess3 from '../../assets/scienceProcess3.jpg';
import scienceProcess4 from '../../assets/scienceProcess4.jpg';
import scienceProcess5 from '../../assets/scienceProcess5.jpeg';

function ScienceProcess(){
    return(
        <section className="scienceProcess">
            <div className="scienceProcessTextContainer">
            <h2 className="scienceProcessTitle">THE SCIENTIFIC PROCESS</h2>
            <p className="scienceProcessParagraph">The team had to first understand the physics of shallow water ocean waves. There was limited scientific information on the subject and Kelly Slater Wave Co needed to amass its own data. By 2008, the team started to develop its first research lab to construct a physical model of the wave for rapid prototyping and analysis. This would become the cornerstone of Kelly Slater Wave Co know how, testing various hydro-foils, beach profiles, dampening technologies and much more. The team also developed computer modeling resources to study and confirm its physical wave findings. Using Computational Fluid Dynamics simulations, physical models and wave theory, the team triangulated and confirmed their approach and started construction on a full-scale prototype.</p>
            <p className="scienceProcessParagraph">On December 5, 2015, the first full-scale wave rolled with Kelly surfing it flawlessly and the surfing world was stunned. Kelly Slater Wave Co continues to expand its understanding of shallow water physics and evolve its wave and technology with the full-scale prototype as its new research center.</p>
            </div>

            <div className="scienceProcessImgContainer">

            <img src={scienceProcess1} alt="psicodelic wave" className="scienceProcessImg1"></img>
           <a href="https://player.vimeo.com/video/179952277?autoplay=1&autopause=0&title=0&byline=0&portrait=0"> <img src={scienceProcess3} alt="Click to see the video" className="scienceProcessImg3"></img></a>
            <img src={scienceProcess4} alt="wave machine" className="scienceProcessImg4"></img>
            <img src={scienceProcess5} alt="kelly working on his project" className="scienceProcessImg5"></img>
            </div>
        </section>
    );
}

export default ScienceProcess;