import React from 'react';
import logoAndreBorelli from '../assets/logoandreborelli.png';
import kellyProject from '../assets/kelly-project.jpg';
import '../css/homeFooter.css';


function HomeFooter(){
return(
  <section className="homeFooter">
   
    <img src={kellyProject} alt="Kelly slater working on his project" className="homeFooterImg"></img>
    <div className="homeFooterArea">
        <a href="https://andreborelliwebdeveloper.netlify.app/"><img src={logoAndreBorelli} alt="logo do André Borelli Engenheiro Front-end" className="homeFooterLogo"></img></a>
    </div>
  </section>
);


}



export default HomeFooter;