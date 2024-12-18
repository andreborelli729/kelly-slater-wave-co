import React from 'react';
import App from './App';
import Navbar from './Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Wave from './pages/Wave.js';
import Technology from './pages/Technology.js';
import Contact from './pages/Contact.js';
import Science from './pages/Science.js';
import Ranch from './pages/Ranch.js';
import Page404 from './pages/Page404.js';

function MyRoutes(){
    return(

<Router>
    <Navbar/>
<Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/the-technology" element={<Technology/>}></Route>
        <Route path="/the-wave" element={<Wave/>}></Route>
        <Route path="/the-science" element={<Science/>}></Route>
        <Route path="/surf-ranch" element={<Ranch/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="*" element={<Page404/>}></Route>




        
        </Routes>
</Router>

    );
}

export default MyRoutes;