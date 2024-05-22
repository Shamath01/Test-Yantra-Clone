import React, { useEffect, useState } from 'react'
import Style from './Entry.module.css'
import { FaArrowRight } from "react-icons/fa";
import banner1 from '/Users/shama/test_yentra/src/Components/Images/banner1.png'
import banner2 from '/Users/shama/test_yentra/src/Components/Images/banner2.png'
import banner3 from '/Users/shama/test_yentra/src/Components/Images/banner3.png'


const lines = [
  "Accelerate Business Efficiency..",
  "Achieve Digital Transformation..",
  "Drive AI Automation Testing..",
  "Build Custom Applications..  ",
  "Realize Cost-Effective Testing..",
  "Unify Web, Mobile, API, and DB Testing..",
  "Access 1,000's of expert Test Engineers.."
];

const images = [
  banner1,
  banner2,
  banner3
];

const Entry = () => {
  
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine(prevLine => (prevLine + 1) % lines.length);
    }, 3000); // Change line every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);


    // Images
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000,[]); // Adjust the interval as needed (e.g., 3000ms = 3 seconds)

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  

  

return (
  <div className={Style.main}>
      <article className={Style.first}>
        <h2 className={Style.head2}>With Test Yantra Global</h2>
        <div className={Style.rotating_text}>
          <h1 className={Style.head1}>{lines[currentLine]}</h1>
        </div>
        <h3 className={Style.head3}>Test Yantra Global's 5,000+ employees provide a range of innovative technology solutions to digitally transform your organization.</h3>
        <br />
        <h3 className={Style.H3}>From IT consulting, application design and development, to automated AI enabled test management platform that unifies web, android, iOS, API, and DB testing, we have the expertise, technology, experience, and tools to help transform your business.</h3>
        <button className={Style.startButton}>Get Started Free<FaArrowRight className={Style.arrow}/></button>
      </article>
      <article className={Style.second}>
      <img
        src={images[currentImageIndex]}
        alt={`Banner ${currentImageIndex}`}
        className="slide"
      />
      </article>
    </div>
  )
}

export default Entry
