import React from 'react'
import Navbar from './Navbar';

const Header = () => {
  return (
    <div id='main'>
        <Navbar />
        <div className="name">
            <h1>It's a <span>ReactJS</span> Website</h1>
            <p className='details'>Most Calenders are designed for teams. This is designed for freelancers 
            who want a simple way to plan their schools</p>
            <div className="header-btns">
                <a href="#" className='cv-btn'>Hire Me</a>
                <a href="#" className='cv-btn1'>Download App</a>
            </div>
        </div>
        <div className="arrow"></div>
    </div>
  )
}

export default Header