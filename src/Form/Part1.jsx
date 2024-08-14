import React, { useState,memo } from 'react';
import styles from './Part1.module.css';
import { IoSettings } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import ShowTheme from './ShowTheme';
import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Section4 from './Sections/Section4';
import { useNavigate } from 'react-router-dom';

function Part1() {
  const [visibleTheme, setVisibleTheme] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(1); // Controls which section is active
const navigate=useNavigate()
  const toggleThemeVisibility = () => {
    setVisibleTheme(prev => !prev);
  };

  const handleBackClick = () => {
    if (sectionIndex > 1) {
      setSectionIndex(prev => prev - 1);
    }
  };

  const handleNextClick = () => {
    if (sectionIndex < 4) { // Updated to reflect the correct number of sections
      setSectionIndex(prev => prev + 1);
    }
  };
const Handletonavigatehome = () => {
  navigate("/")
}
  return (
    <>
      <div>
        <div className={styles.navbarlike}>
          <div className={styles.smalldivhouse}><img src='house.jpg' alt="House" onClick={Handletonavigatehome}/></div>
          <div className={styles.theme}>
            <button
              className={styles.button22}
              onClick={toggleThemeVisibility}
            >
              {visibleTheme && <ShowTheme />}
              <IoSettings className={styles.icon} /> Theme
            </button>
          </div>
          {sectionIndex > 1 && (
            <button className={styles.button12} onClick={handleBackClick}>
              Back  
            </button>
          )}
          {sectionIndex < 4 && ( // Updated to reflect the correct number of sections
            <button className={styles.button1} onClick={handleNextClick}>
              Next
              <FaArrowRight style={{ marginBottom: '-3px' }} />
            </button>
          )}
        </div>
      </div>

      <div className={styles.formContainer}>
        {visibleTheme && <ShowTheme visibleTheme={visibleTheme} />}
        {sectionIndex === 1 && <Section1 />}
        {sectionIndex === 2 && <Section2 />}
        {sectionIndex === 3 && <Section3 />}
        {sectionIndex === 4 && <Section4 />}
      </div>
    </>
  );
}

export default memo(Part1);
