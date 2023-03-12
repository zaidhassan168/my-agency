import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Home from './Home';
// import Destinations from './Destinations';
// import About from './About';
// import Contact from './Contact';

function MyRoutes() {
  return (
    <Routes>


      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<Home/>} />


      {/* <Route path="/destinations">
        <Destinations />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route> */}
    </Routes>
  );
}

export default MyRoutes;
