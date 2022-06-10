import React from 'react'
import logo from '../assets/img/logo.svg'
import facebook from "../assets/img/icon-facebook.svg"
import twitter from "../assets/img/icon-twitter.svg"
import pinterest from "../assets/img/icon-pinterest.svg"
import instagram from "../assets/img/icon-instagram.svg"
import Boost from './Boost'
function Footer() {
  return (
      <>
      <Boost/>
    <div className='footer'>
       <img className='footer__logo' src={logo} alt=""/>
       <div className='footer__feature'>
           <div className='feature__list'>
            <h2>Features</h2>
            <span>Link Shortening</span>
            <span>Branded Links</span>
            <span>Analytics</span>
           </div>
           <div className='feature__list'>
            <h2>Resources</h2>
            <span>Blog</span>
            <span>Developers</span>
            <span>Support</span>
           </div>
           <div className='feature__list'>
            <h2>Company</h2>
            <span>About</span>
            <span>Our Team</span>
            <span>Careers</span>
            <span>Contact</span>
           </div>
           <div className='social__links'>
               <img src={facebook} alt="" />
               <img src={twitter} alt="" />
               <img src={pinterest} alt="" />
               <img src={instagram} alt="" />
           </div>
       </div>
    </div>
    </>
  )
}

export default Footer