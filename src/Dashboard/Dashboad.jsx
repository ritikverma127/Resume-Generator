import React, { useState, useRef ,memo} from 'react';
import Popup from './Popup';
import styles from './Dashboard.module.css';

function Dashboard() {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  const togglePopup = () => {
    setVisible(visible => !visible);

    if (containerRef.current) {
      containerRef.current.style.filter = visible ? 'none' : 'blur(10px)';
    }
  };

  return (
    <>
      <div ref={containerRef} className={styles.main}>
        <div className={styles.firstdiv}>
          <h1>
            My <span style={{ color: "#c44eff" }}>Resume</span>
          </h1>
          <h3>Start Creating Resume your next job role</h3>
        </div>
        <div className={styles.container}>
          <div className={styles.seconddiv}>
            <button onClick={togglePopup}>
              <img src='Plus.png' alt="Plus Icon" />
            </button>
          </div>
          <a href='https://novoresume.com/resume-templates'><div className={styles.thirddiv}>
         <img src='study.png' alt="Study Icon" />
            <div className={styles.thirddivbottom}>
         <h1 style={{ fontSize: "20px", color: "white", padding: "10px" }}>My First Resume</h1>
            </div>
          </div></a>
        </div>
      </div>
      {visible && <Popup togglePopup={togglePopup} />}
    </>
  );
}

export default memo(Dashboard);
