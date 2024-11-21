import React from 'react';
import story1 from '../assets/story.png';
import story2 from '../assets/story2.jpg';
import '../css/story.css';

function Story(){
    return(
        <section className="story">
            <div className="storyImgContainer">
                <a href="https://player.vimeo.com/video/149396475?autoplay=1&autopause=0&title=0&byline=0&portrait=0">
                    <img src={story1} alt="video about kelly slater wave co" className="storyImg1"></img>
                </a>
                 <img src={story2} alt="image about kelly slater wave partners" className="storyImg2"></img>
            </div>

            <div className="storyTextContainer">
                <h2 className="storyTitle">THE STORY</h2>
                <p className="storyParagraph">The first images of Kelly surfing the wave at Surf Ranch were shot on December 5, 2015. The video sent shock waves through the surfing community. The story began more than a decade earlier with Kelly Slater pulling together some of the brightest minds in fluid dynamics and committing to a formal scientific exploration into recreating the best ocean waves.</p>
                <button className="storyBtn">See The Story</button>
            </div>

        



        </section>
    );
}

export default Story;