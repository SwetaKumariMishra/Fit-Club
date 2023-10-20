import React from 'react'
import './Footer.css';
import instagram from '../../assets/instagram.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="footer-container">
    <hr/>
        <div className="footer">
            <div className="f-image">
                <img src={instagram} alt="" />
                <img src={github} alt="" />
                <img src={linkedin} alt="" />
            </div>
            <div className="f-logo">
                <img src={logo} alt="" />
            </div>
        </div>

        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer