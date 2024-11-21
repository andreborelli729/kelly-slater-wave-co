import React, { useState, useRef, useEffect } from 'react'
import { links} from './data/dataHeader.js'
import logoAndreBorelli from './assets/logoandreborelli.png';
import { Link } from 'react-router-dom';
import './css/navbar.css';
import hamburgerMenu from './assets/hamburger-menu.jpg';


const Navbar = () => {
const [showLinks, setShowLinks] = useState(false);
const linksContainerRef = useRef(null);
const linksRef = useRef(null);

useEffect(() => {
  const linksHeight = linksRef.current.getBoundingClientRect().height;
  if (showLinks) {
    linksContainerRef.current.style.height = `${linksHeight}px`;
  } else {
    linksContainerRef.current.style.height = '0px';
  }
}, [showLinks]);

const toggleLinks = () => {
  setShowLinks(!showLinks);
};
  return (
    <>
    <nav>
      <div className='nav-center'>
      <div className='nav-header'>
        <a src="https://andreborelliwebdeveloper.netlify.app/">
        <img src={logoAndreBorelli} className='my-logo' alt='logo olimpiadas'/>
        </a>
        <img src={hamburgerMenu} className='nav-toggle' onClick={toggleLinks} >

        </img>
      </div>
    
      <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
{links.map((link)=> {
const { id, url, text} = link;
return (
<li key={id}>
  <Link to={url}>{text}</Link>
</li>   
);
})}

</ul>
      </div>
    

    

      </div>
    </nav>
    </>
  );
}

export default Navbar;