import React from 'react'
import Style from './Footer.module.css'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from '/Users/shama/test_yentra/src/Components/Images/partnerlogo2.svg'
// import globe from '/Users/shama/test_yentra/src/Components/Images/740.jpg'

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.headding}>
        <h1>Subscribe to our Newsletter!</h1>
        <div className={Style.inp}>
          <form>
            <div className={Style.inputGroup}>
              <input type="text" placeholder="Enter Your Business Email" className={Style.input} />
              <input type="submit" value="Subscribe" className={Style.btn} />
            </div>
          </form>
        </div>
      </div>
      <div className={Style.info}>
        <div className={Style.logo}>
          <div className={Style.im}>
            <img src={logo} alt="logo" />
          </div>
            <div className={Style.content}>
              <h3>Test Yantra Global is an Exclusive <br />Platinum Partner of FireFlink.</h3>
              <h3 id={Style.ln}>Let's get socially connected...</h3>
            </div>
            <div className={Style.social}>
            <FaLinkedin className={Style.icn}/>
            <FaYoutube className={Style.icn}/>
            <FaTwitter className={Style.icn}/>
            <FaFacebookSquare className={Style.icn}/>
            <FaInstagram className={Style.icn}/>
            </div>
        </div>
        <div className={Style.box}>
          <div className={Style.service}>
            <h1>Services</h1>
            <ul>
              <li>Software Testing (TaaS)</li>
              <li>Software Development</li>
              <li>Skills Enhancement</li>
              <li>IT Consulting</li>
              <li>Crowd Testing</li>
            </ul>
          </div>
          <div className={Style.quickLinks}>
            <h1>Quick Links</h1>
            <ul>
              <li>About Us</li>
              <li>Fireflink</li>
              <li>Article</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={Style.contacts}>
            <h1>Contacts</h1>
            <ul>
              <li><span>Address:</span>120 Adelaide Street West, Suite 2500, Toronto, ON, M5H 1T1, Canada.</li>
              <li><span>Email:</span>hello@testyantraglobal.com</li>
              <li><span>Phone:</span> 1800 572 7905</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className={Style.globeBox}></div> */}
      <div className={Style.foot}>
        <h3>Copyright ©2024 Test Yantra Global. All rights reserved</h3>
      </div>
    </div>
  )
}

export default Footer
