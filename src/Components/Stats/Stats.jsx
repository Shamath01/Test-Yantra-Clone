import React from 'react'
import Style from './Stats.module.css'
import CountUp from 'react-countup'
import { ImPlus } from "react-icons/im";
import LocImg from '/Users/shama/test_yentra/src/Components/Images/Statistics/location.png'
import globe from '/Users/shama/test_yentra/src/Components/Images/Statistics/ClientAcrossGlobe.png'
import team from '/Users/shama/test_yentra/src/Components/Images/Statistics/TeamMembers.png'
import engineers from '/Users/shama/test_yentra/src/Components/Images/Statistics/OnDemandEngineers.png'

const Stats = () => {
  return (
    <div className={Style.numberDisplay}>
      <div className={Style.headding}>
        <h1 className={Style.numbers}>The numbers speak for themselves</h1>
      </div>
      <div className={Style.container}>
        <div className={Style.box}>
            <div>
              <img src={LocImg} alt="location" className={Style.Loc}/>
              <div className={Style.count} ><CountUp end={6} duratio={4}/></div></div>
              <h2> Countries &</h2><h2>Growing</h2>
              {/* <div className={Style.line}></div> */}
            </div>
            <div className={Style.box}>
            <div>
              <img src={globe} alt="globe" className={Style.globe}/>
              <div className={Style.count}><CountUp end={3000} duratio={4}/><ImPlus className={Style.plus} /></div></div>
              <h2>Clients Across Globe</h2>
              {/* <div className={Style.line}></div> */}
            </div>
            <div className={Style.box}>
            <div>
              <img src={team} alt="Team Members" className={Style.team}/>
              <div className={Style.count}><CountUp end={5000} duratio={4}/><ImPlus className={Style.plus} /></div></div>
              <h2>Total Team </h2><h2>Members</h2>
              {/* <div className={Style.line}></div> */}
            </div>
            <div className={Style.box}>
            <div>
              <img src={engineers} alt="engineers" className={Style.engineers}/>
              <div className={Style.count}><CountUp end={12000} duratio={4}/><ImPlus className={Style.plus} /></div></div>
              <h2>On Demand Test </h2><h2>Engineers</h2>
              {/* <div className={Style.line}></div> */}
          </div>  
      </div>
    </div>
  )
}

export default Stats
