import React, { useState, memo } from 'react';
import styles from './Popup.module.css';
import { useNavigate } from 'react-router-dom';

function Popup({ togglePopup }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() === '') {
      setError('Title is required');
    } else {
      setError('');
    }
  };

  const handleCreate = () => {
    if (inputValue.trim() === '') {
      setError('Title is Required');
    } else {
      setError('');
      navigate('/Part1');
    }
  };

  return (
    <div className={styles.popup}>
      <div className={styles.box}>
        <h3 className={styles.h3}>Create new resume</h3>
        <h4 className={styles.h4}>Add a title for your new resume</h4>
        <button onClick={togglePopup} className={styles.button1}>x</button>
        <input
          type="text"
          placeholder="Ex Full stack Resume"
          className={styles.input}
          value={inputValue}
          onChange={handleInputChange}
          required
        />
        {error && <p className={styles.error}>{error}</p>}
        <button className={styles.button2} onClick={togglePopup}>Cancel</button>
        <button className={styles.button3} onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
}

export default memo(Popup);
