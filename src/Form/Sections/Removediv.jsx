import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RemoveDiv } from '../../Reducers';
import styles from './Section4.module.css';
import Rating from '@mui/material/Rating';

function Removediv() {
  const items = useSelector((state) => state.user.cart); // Retrieve items from the Redux store
  const dispatch = useDispatch();

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className={styles.flexconcept}>
          <div className={styles.container}>
            <h1 className={styles.title}>Skills</h1>
            <div>
              <h4 className={styles.subtitle}>Add your Skills</h4>
              <form>
               
                <h3 className={styles.h3}>Skills:-{item.skill}</h3>
                {/* <h3 className={styles.h3}>Date:-{item.id}</h3> */}

                <span className={styles.span}>Rating:</span>
                <Rating
                  className={styles.Ratingsystem}
                  name="simple-controlled"
                  value={item.rating}
                  readOnly
                />
              </form>
            </div>
            <button className={styles.generateButton1} onClick={() => dispatch(RemoveDiv(item.id))}>Remove</button>
          </div>
        </div>
      ))}
    </div>  
  );
}

export default Removediv;
