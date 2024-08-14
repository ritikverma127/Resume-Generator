import React,{memo} from 'react';
import ThemeColor from './ThemeColor';
import styles from './Showtheme.module.css'; // Add this line to import the CSS file

function ShowTheme({ visibleTheme }) {
  return (
    <div className={`${styles.themeColorContainer} ${visibleTheme ? '' : styles.hidden}`}>
      <ThemeColor />
    </div>
  );
}

export default memo(ShowTheme);
