import React from 'react'
import Style from './Article.module.css'
import blog15 from '/Users/shama/test_yentra/src/Components/Images/Blog/blog15.jpg'
import blog14 from '/Users/shama/test_yentra/src/Components/Images/Blog/blog14.jpg'
import blog13 from '/Users/shama/test_yentra/src/Components/Images/Blog/blog13.jpg'
import { FaArrowRight } from "react-icons/fa";


const Article = () => {
  return (
    <div className={Style.art}>
      <div className={Style.articl}><h1>Our Recent Articles</h1></div>
      <div className={Style.cont}>
      <div className={Style.container}>
          <div><img src={blog15} alt="blog" /></div>
          <div>
            <h3>Blog| Categories of Tests</h3>
            <h1>Guidelines For Writing Effective Unit Tests</h1>
            <h2>Learn effective unit testing techniques to enhance code quality and development speed. Discover essential tools...</h2>
            </div>
          <div className={Style.btn}><button className={Style.readButton}>Read More<FaArrowRight className={Style.arrow}/></button></div>
        </div>
        <div className={Style.container}>
          <div><img src={blog14} alt="blog" /></div>
          <div><h3>Blog| Test Data</h3>
          <h1>Automation Testing Tools: Selenium, Cypress, Playwright, Robot Framework Vs. FireFlink</h1>
          <h2>Dive into the specifics of renowned automation tools like Selenium, Cypress, Playwright, and Robot Framework...</h2>
        </div>
          <div className={Style.btn}><button className={Style.readButton}>Read More<FaArrowRight className={Style.arrow}/></button></div>
        </div>
        <div className={Style.container}>
          <div><img src={blog13} alt="blog" /></div>
          <div>
            <h3>Blog| UI Element Locator</h3>
            <h1>Understanding Software Testing Life Cycle</h1>
            <h2>Make the switch to automation testing effortlessly with FireFlink's tailored solutions, empowering your QA team...</h2>
          </div>
          <div className={Style.btn}><button className={Style.readButton}>Read More<FaArrowRight className={Style.arrow}/></button></div>
        </div>
      </div>
    </div>
  )
}

export default Article
