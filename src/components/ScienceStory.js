import React from 'react';
import '../css/scienceStory.css';
import science1 from '../assets/scienceStory1.jpg';
import science2 from '../assets/scienceStory2.jpg';
import science3 from '../assets/scienceStory3.jpg';

function ScienceStory(){
    return(
<section className="scienceStory">
        <div className="scienceStoryImgContainer">
            <img src={science1} alt="kelly slater working" className="scienceStoryImg"></img>
            <img src={science2} alt="kelly slater working" className="scienceStoryImg"></img>
            <img src={science3} alt="kelly slater working" className="scienceStoryImg"></img>

        </div>
        <div className="scienceStoryTextContainer">
        <p className="scienceStoryParagraph">In 2006, Kelly Slater shared his vision of a perfect, barreling, human-made wave with Adam Fincham, PhD., a professor at the University of Southern California Viterbi School of Engineering and expert in fluid dynamics.What Kelly described had been attempted for decades, but never achieved. Adam was fascinated by the challenge. So together with an international team of scientists, engineers and business professionals, they got to work.</p>
            <p className="scienceStoryParagraph">What Kelly described had been attempted for decades, but never achieved. Adam was fascinated by the challenge. So together with an international team of scientists, engineers and business professionals, they got to work.</p>

            <button className="scienceStoryBtn">See the Story</button>
        </div>

</section>

    );
}

export default ScienceStory;
