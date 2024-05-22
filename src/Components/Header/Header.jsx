import React from 'react'
// import testYentra from '/Users/shama/test_yentra/src/Components/Images/Yantra.svg'
import { Link } from 'react-router-dom'
import "../../Global.css"
import Style from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    
    <div className={Style.Header}>
      <header>
        <div>
          {/* <img className={Style.testYentralogo} src={testYentra } alt="Test Yentra"/> */}
        </div>
        
        <div className={Style.navBar}>
          <Link className={Style.home} to='/'>Home</Link>
          <Link className={Style.service}>Services<FontAwesomeIcon className={Style.arrowDown} icon={faChevronDown} /></Link>
          <Link className={Style.parnters}>Partners<FontAwesomeIcon className={Style.arrowDown} icon={faChevronDown} /></Link>
          <Link className={Style.article}>Articles</Link>
          <button className={Style.getbtn}>Get In Touch</button>
        </div>

      </header>
    </div>
  )
}

export default Header