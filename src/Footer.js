import React from 'react'
import './Footer.css'
function Footer() {
    const year=new Date().getFullYear();
    return (
        <footer className="footer">
            <p>copyright © {year}</p>
            <h1>Made by Irfan khan</h1>
        </footer>
    )
}

export default Footer;
