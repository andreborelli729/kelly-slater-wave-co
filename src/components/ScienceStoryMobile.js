import React from 'react';
import '../css/scienceStoryMobile.css';
import story1 from '../assets/scienceStory1.jpg';
import story2 from '../assets/scienceStory2.jpg';
import story3 from '../assets/scienceStory3.jpg';

function ScienceStoryMobile(){
    return(

  
    <section className="scienceStoryMobile">    
            <img src={story1} alt="kelly slater working" className="scienceStoryImgMobile"></img>
            <img src={story2} alt="kelly slater working" className="scienceStoryImgMobile"></img>
            <img src={story3} alt="kelly slater working" className="scienceStoryImgMobile"></img>
            <p className="scienceStoryParagraphMobile">In 2006, Kelly Slater shared his vision of a perfect, barreling, human-made wave with Adam Fincham, PhD., a professor at the University of Southern California Viterbi School of Engineering and expert in fluid dynamics.What Kelly described had been attempted for decades, but never achieved. Adam was fascinated by the challenge. So together with an international team of scientists, engineers and business professionals, they got to work.</p>
            <p className="scienceStoryParagraphMobile">What Kelly described had been attempted for decades, but never achieved. Adam was fascinated by the challenge. So together with an international team of scientists, engineers and business professionals, they got to work.</p>

            <button className="scienceStoryBtnMobile">See the Story</button>
        </section>

);
}

export default ScienceStoryMobile;