import React from 'react'
import logo from './image/log.jpg';
import './header.css'

function Header() {
    return (
        <>
        <div className="header">
        
            <img src={logo} alt="logo" width='70' height='50'/>
            <div className="texthead">  <h1>KEEP NOTE</h1> </div>
            
            
        </div>
     </>
    );
};

export default Header
