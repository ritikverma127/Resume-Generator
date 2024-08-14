import React,{memo} from 'react';
import styles from './Home.module.css';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Home() {
    const Redirectongithub = () => {
        window.location.href = "https://github.com/";
    };
const navigate=useNavigate();
const NavigatetoDashboard = () => {
  navigate("/Dashboard")
}
    return (
        <>
            <nav className={styles.nav}>
                <button className={styles.button} onClick={NavigatetoDashboard}>Get Started</button>
            </nav>
            <div className={styles.opensmallbox}>
                <button className={styles.button2} onClick={Redirectongithub}>New</button>
                <a href='https://github.com/'>Ritik All New Repo</a>
            </div>
            <div className={styles.secondbox}>
                <h1>Build Your <span className={styles.span}>Resume</span></h1>
                <br />
                <h1 className={styles.h1}>Create Your Own Resume</h1>
                <button className={styles.button3}  onClick={NavigatetoDashboard}>Get Started <FaArrowRight style={{ marginBottom: '-3px' }} /></button>
                <button className={styles.button4}>Watch Videos</button>
            </div>
            <div className={styles.paragraphcontentset}>
                <p className={styles.p}>Feature In</p>
            </div>
            <div className={styles.thirddiv}>
                <div className={styles.box1}>
                    <img src='youtube.png' alt='YouTube' height="50px" width="50px" />
                    <h4 className={styles.h4}>YouTube</h4>
                </div>
                <div className={styles.box2}>
                    <img src='Github.png' alt='GitHub' height="50px" width="50px" />
                    <h4 className={styles.h4}>GitHub</h4>
                </div>
                <div className={styles.box3}>
                    <img src='Link.png' alt='LinkedIn' height="50px" width="50px" />
                    <h4 className={styles.h4}>LinkedIn</h4>
                </div>
            </div>
            <div>
                <h1 className={styles.getjob}>Get a Job for a Successful <span style={{ color: "#c44eff" }}>Journey</span></h1>
            </div>
        </>
    );
}

export default memo(Home);
