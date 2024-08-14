import React, { useState, memo } from 'react';
import styles from './Section4.module.css';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import Removediv from './Removediv';
import { AddMultipleDivs } from '../../Reducers';
import { useNavigate } from 'react-router-dom';
// import Data from '../../Data';

function Section4() {

const navigate=useNavigate()
const Handlebutton = () => {
  navigate('/Part1/Downloadpage')
}


  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState('');
  const dispatch = useDispatch();

  const handleAddMultipleDivs = () => {
    // dispatch(AddMultipleDivs({ id: Date.now(), skill, rating: value })); // Ensure each item has a unique id
    dispatch(AddMultipleDivs({ id: Date.now(), skill, rating: value })); // Ensure each item has a unique id
    setSkill(''); // Clear input field
    setValue(null); // Reset rating
  };

  return (
    <>
      <div className={styles.flexconcept}>
        <div className={styles.container}>
          <h1 className={styles.title}>Skills</h1>
          <div>
            <h4 className={styles.subtitle}>Add your Skills</h4>
            <form>

{/* ********************************************Input box /////////////////////////////////////// */}


              <input
                type="text"
                className={styles.summaryInput}
                placeholder="Enter Skills"  
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
              />




              
              <h3>Rating:</h3>
              {/* ********************************************Rating /////////////////////////////////////// */}
              <Rating
                value={value}
                onChange={(e, newValue) =>setValue(newValue)}
              />
              {/* ********************************************Rating /////////////////////////////////////// */}

            </form>
          </div>
          <button className={styles.generateButton} onClick={handleAddMultipleDivs}>Add</button>
          <button className={styles.generateButton1}>Save</button>
        </div>
      </div>
      
      <Removediv />
      <button onClick={Handlebutton}>Click</button>
     
      {/* <Data/> */}
    </>
  );
}

export default memo(Section4);
