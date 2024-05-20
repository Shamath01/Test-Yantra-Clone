import React from 'react'
import Style from './Service.module.css'
import Tass from '/Users/shama/test_yentra/src/Components/Images/Taas.png'
import IT from '/Users/shama/test_yentra/src/Components/Images/IT.png'
import DSS from '/Users/shama/test_yentra/src/Components/Images/DSS.png'
import SDD from '/Users/shama/test_yentra/src/Components/Images/SDD.png'
import CrowdTesting from '/Users/shama/test_yentra/src/Components/Images/crowdTesting.png'

const Service = () => {
  return (
    <div className={Style.Professional}>
      <div className={Style.top}>
          <h1>Leverage Test Yantra Global's range </h1><h1>of Professional Services</h1>
      </div>
      <div className={Style.down}>
        <div className={Style.cont}>
            <img src={Tass} alt="image" />
            <h1>Software Testing Service (TaaS)</h1>
            <h3>We offer cost-effective, reliable and scalable software testing services.</h3>
            <div className={Style.line}></div>
        </div>
        <div className={Style.cont}>
          <img src={IT} alt="image" />
        <h1>IT Software Skills Enhancement</h1>
        <h3>Our customized and curated training models help organizations elevate their IT quotient.</h3>
        <div className={Style.line}></div>
        </div>
        <div className={Style.cont}>
          <img src={DSS} alt="image" />
          <h1>Deployment & Support Services</h1>
          <h3>Our team of experts help you craft a winning IT strategy for your organization.</h3>
          <div className={Style.line}></div>
        </div>
        <div className={Style.cont}>
          <img src={SDD} alt="image" />
          <h1>Software Design & Development</h1>
          <h3>We deliver IT solutions in a wide variety of verticals and elevate businesses to the next level.</h3>
          <div className={Style.line}></div>
        </div>
        <div className={Style.cont}>
          <img src={CrowdTesting} alt="image" />
          <h1>Crowd Testing</h1>
          <h3>We offer comprehensive crowd-testing services, leveraging a global network of skilled testers.</h3>
          <div className={Style.line}></div>
        </div>
      </div>
      <div className={Style.youtube_video_container}>
        <a href="https://youtu.be/tuwxrL7Kh4E?si=oCTlJuFZFVMrBRbc"></a>
      </div>
    </div>
  )
}

export default Service
