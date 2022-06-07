import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Components/Navigation'
// import Testing from './Pages/Testing'
import Footer from './Components/Footer'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import FindActivities from "./NavbarPages/FindActivities"
import Home from './Components/Home';
import KidzappAwards from './NavbarPages/KidzappAwards';
import KidzappTv from './NavbarPages/KidzappTv';
import NavbarBlog from './NavbarPages/NavbarBlog';
import GetInTouch from './NavbarPages/GetInTouch';
import GetListed from './NavbarPages/GetListed';


const Routing = () => {
  return (
    <div>
      <Router>
        <Navigation/>
            <Routes>
              <Route exact path='/' element={<Home/>} />    
              <Route path='/findActivities' element={<FindActivities />}/>
              <Route path='/kidzappAwards' element={<KidzappAwards />}/>
              <Route path='/kidzappTV' element={<KidzappTv />}/>
              <Route path='/Blog' element={<NavbarBlog />}/>
              <Route path='/GetInTouch' element={<GetInTouch/>}/>
              <Route path='/GetListed' element={<GetListed />}/>
            </Routes>
          <Footer /> 
      </Router>
              
    </div>
  )
}

export default Routing