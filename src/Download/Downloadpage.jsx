import styles from './Downloadpage.module.css'
import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useSelector } from 'react-redux';
 import Slider from '@mui/material/Slider'
import Section4 from '../Form/Sections/Section4';
function Downloadpage() {

// ***************************************************************************************************

   const items = useSelector((fff) => fff.user.section1);
    const itemer = useSelector((state) => state.user.section2);
    const itemes = useSelector((state) => state.user.section3);
    const sec4 = useSelector((state) => state.user.cart);
    const theme=useSelector((state)=>state.user.themecolor)






// ***************************************************************************************************


  const resumeRef = useRef();

  const handleGenerateResume = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');
  };

  return (
    <>
      <div ref={resumeRef} className={styles.resume}>
        <div className={styles.firstredline} style={{backgroundColor:theme}}></div>
        <div className={styles.firstdiv}>

{/* *********************************************************** */}
{
                items.map((item, i) => (
                    <div key={i}>
                    <div className={styles.firstlast}>
                        <span className={styles.name}>{item.firstname}</span>
                        <span className={styles.name}>{item.lastname}</span>
                        </div>
                        <h1 className={styles.title}>{item.jobtitle}</h1>
                        <h1 className={styles.address}>{item.address}</h1>
                        <div className={styles.phoneemail}>
            <h2 className={styles.phone}>{item.phone}</h2>
            <h2 className={styles.email}>{item.email}</h2>
          </div>

                    </div>
                ))
            } 
          <div className={styles.secondredline} style={{backgroundColor:theme}}></div>
{/* *********************************************************** */}
         {/* <h1 className={styles.name}>Ritik Verma</h1>
          <h3 className={styles.title}>Full Stack Frontend Developer</h3>
          <h3 className={styles.address}>110 Shri Nath Colony, Mhowgaon, Mhow</h3>
          <div className={styles.phoneemail}>
            <h2 className={styles.phone}>6268135650</h2>
            <h2 className={styles.email}>Rv1338739@gmail.com</h2>
          </div> */}
{/* ************************************************************************ */}


           {/*
          <h4 className={styles.summary}>
            Python is a high-level, interpreted programming language renowned for its readability, simplicity, and versatility. Its clean and straightforward syntax, which uses indentation to define code blocks, makes it particularly accessible for beginners and enhances the clarity of the code.
            <br /><br />
            Python's dynamic typing allows variables to change types, with data types determined at runtime, while its interactive mode facilitates rapid testing and development. Being a cross-platform language, Python runs on various operating systems, including Windows, macOS, and Linux, ensuring its portability.
            <br /><br />
            The extensive standard library supports a wide range of tasks, from web development and data analysis to machine learning and scientific computing.
            <br /><br />
            Additionally, Python embraces both object-oriented and functional programming paradigms, offering features like classes and objects for encapsulation, inheritance, and polymorphism, as well as functional programming capabilities such as higher-order functions and lambda expressions. This combination of features makes Python a versatile and powerful tool for developers across different domains.
            <br /><br />
          </h4> */}
{/* /////////////////////////////////////////////////////////////////////////////// */}
          {itemer.map((item, i) => (
                    <div key={i}>
                        <h1 className={styles.summary}>{item.join(', ')}</h1>
                        {/* {console.log(item)} */}
                    </div>
                ))}
{/* /////////////////////////////////////////////////////////////////////////////// */}











          <h1 className={styles.Education}>Education</h1>
          <div className={styles.thirdredline} style={{backgroundColor:theme}}></div>
         { itemes.map((item, i) => (
            <div key={i}>
          <div className={styles.educationBox}>
            <h3 className={styles.schoolName}>{item.tenth}</h3>
            <h3 className={styles.schoolYear}>{item.tenthYear}</h3>
          </div>
          <div className={styles.educationBox}>
            <h3 className={styles.schoolName}>{item.twelfthClass}</h3>
            <h3 className={styles.schoolYear}>{item.twelfthYear}</h3>
          </div>
          <div className={styles.educationBox}>
            <h3 className={styles.schoolName}>{item.ug}</h3>
            <h3 className={styles.schoolYear}>{item.ugyear}</h3>
          </div>
          <div className={styles.educationBox}>
            <h3 className={styles.schoolName}>{item.pg}</h3>
            <h3 className={styles.schoolYear}>{item.pgyear}</h3>
          </div>
          </div>
            ))}

{/* //******************************************************************** */}

          {/* {itemes.map((item, i) => (
                <div key={i}>
                    <h1>{item.tenth}</h1>
                    <h1>{item.tenthYear}</h1>
                    <h1>{item.twelfthClass}</h1>
                    <h1>{item.twelfthYear}</h1>
                    <h1>{item.ug}</h1>
                    <h1>{item.ugYear}</h1>
                    <h1>{item.pg}</h1>
                    <h1>{item.pgYear}</h1>
                </div>
            ))} */}

{/* //******************************************************************** */}



          <div className={styles.secondredline} style={{backgroundColor:theme}}></div>
          <h2 className={styles.skills}>Skills</h2>
          <div className={styles.skill}>
          {sec4.map((item) => (
                <div key={item.id}> 
                    <h3>{item.skill}</h3>
                    <div className={styles.gud}>
                    <Slider
                        aria-label={item.skill}
                        defaultValue={item.rating}
                        valueLabelDisplay="auto"
                        min={0}
                        max={5}
                        step={1}
                        color="secondary"       
                    />
                </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    <div className={styles.buttonmanage}>  <button className={styles.button} onClick={handleGenerateResume}>Generate Resume</button></div>
  
    </>
  );
}

export default Downloadpage;
