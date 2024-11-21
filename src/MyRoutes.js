import React from 'react';
import App from './App';
import Navbar from './Navbar.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Wave from './pages/Wave.js';

function MyRoutes(){
    return(

<Router>
    <Navbar/>
<Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/the-technology" element={<Home/>}></Route>
        <Route path="/the-wave" element={<Wave/>}></Route>
        <Route path="/the-science" element={<Wave/>}></Route>
        <Route path="/surf-ranch" element={<Home/>}></Route>
        <Route path="/moments" element={<Wave/>}></Route>
        <Route path="/contact" element={<Home/>}></Route>




        
        </Routes>

</Router>

    );
}

export default MyRoutes;