import React, { useRef,memo } from 'react';
import Styles from './ThemeColor.module.css';
import { useDispatch } from 'react-redux';
import { ChangeThemecolorbutton } from '../Reducers';

function ThemeColor() {
  const backgroundRef = useRef();
const dispatch=useDispatch()
  const handleColor = (color) => {
    backgroundRef.current.style.backgroundColor = color;
    dispatch(ChangeThemecolorbutton(color))
  };

  return (
    <div>
      <div className={Styles.mainborder}>
        <h2 className={Styles.h2}>Select Theme Color</h2>
        <button className={Styles.button50} onClick={() => handleColor('red')}>
          <div className={Styles.ciclecolor1}></div>
        </button>
        <button className={Styles.button50} onClick={() => handleColor('green')}>
          <div className={Styles.ciclecolor2}></div>
        </button>
        <button className={Styles.button50} onClick={() => handleColor('blue')}>
          <div className={Styles.ciclecolor3}></div>
        </button>
        <button className={Styles.button50} onClick={() => handleColor('yellow')}>
          <div className={Styles.ciclecolor4}></div>
        </button>
        <button className={Styles.button50} onClick={() => handleColor('pink')}>
          <div className={Styles.ciclecolor5}></div>
        </button>
        <button className={Styles.button50} onClick={() => handleColor('black')}>
          <div className={Styles.ciclecolor6}></div>
        </button>
        <button className={Styles.button50} onClick={() => handleColor('purple')}>
          <div className={Styles.ciclecolor7}></div>
        </button>
        <button className={Styles.button50} onClick={() => handleColor('orange')}>
          <div className={Styles.ciclecolor8}></div>
        </button>
        <button className={Styles.button50} onClick={() => handleColor('brown')}>
          <div className={Styles.ciclecolor9}></div>
        </button>
      </div>
      <div ref={backgroundRef} className={Styles.backgroundcolor}></div>
    </div>
  );
}

export default memo(ThemeColor);
