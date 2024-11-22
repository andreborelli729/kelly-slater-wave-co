import React from 'react';
import logoAndreBorelli from '../assets/logoandreborelli.png';
import kellyProject from '../assets/kelly-project.jpg';
import '../css/homeFooter.css';
import { Link } from 'react-router-dom';


function HomeFooter(){
return(
  <section className="homeFooter">
   
    <Link to="the-technology"><img src={kellyProject} alt="Kelly slater working on his project" className="homeFooterImg"></img></Link>
    <div className="homeFooterArea">
        <a href="https://andreborelliwebdeveloper.netlify.app/"><img src={logoAndreBorelli} alt="logo do André Borelli Engenheiro Front-end" className="homeFooterLogo"></img></a>
    </div>
  </section>
);


}



export default HomeFooter;