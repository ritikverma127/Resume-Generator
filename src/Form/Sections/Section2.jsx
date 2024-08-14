import React, { useState,memo } from 'react';
import styles from './Section2.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Section2Addfunction } from '../../Reducers';
// import Data from '../../Data';
function Section2() {
    const [prompt, setPrompt] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [italicMode, setItalicMode] = useState(false);
    const [boldMode, setBoldMode] = useState(false);
    // ********************Checkbox*****************************
    const [selectedItems, setSelectedItems] = useState([]);
    
    //console.log(selectedItems)  // this is print line when you checked some item so its can display
    const dispatch=useDispatch()
    const Handlecheckdata = () => {
      dispatch(Section2Addfunction(selectedItems))
    }
    // ********************Checkbox*****************************
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios({
                url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDTw-uP7sU7k7fyoFgNORwi-e5KC0R4Kgc",
                method: "post",
                data: { "contents": [{ "parts": [{ "text": prompt }] }] }
            });
            const text = response.data.candidates[0].content.parts[0].text;
            console.log(response);

            const bullets = text.split('\n').filter(line => line.trim() !== '');

            setData(bullets);
        } catch (error) {
            console.error("Error generating content:", error);
            setData(["Error generating content."]);
        } finally {
            setLoading(false);
        }
    }

    const toggleItalic = () => {
        setItalicMode(prevMode => !prevMode);
    }

    const toggleBold = () => {
        setBoldMode(prevMode => !prevMode);
    }


    const renderContent = () => {
        return data.map((item, index) => {
            // Replace text between asterisks with spaces
            let formattedItem = item.replace(/\*/g, ' ');
            const handleCheckboxChange = (e, item) => {
                setSelectedItems(prevSelectedItems => 
                    e.target.checked
                        ? [...prevSelectedItems, item]
                        : prevSelectedItems.filter(selectedItem => selectedItem !== item)
                );
            };


            return (
                <li key={index} type="none" style={{ fontSize: "20px", fontStyle: italicMode ? "italic" : "normal", fontWeight: boldMode ? "bold" : "normal" }}>
                   
                    <label>
                            <input
                                type="checkbox"
                                onChange={(e) => handleCheckboxChange(e, item)}
                                checked={selectedItems.includes(item)}
                            />
                             {formattedItem}
                        </label>
                </li>
                
            );
        });
    }

    return (
        <div className={styles.flexconcept}>
            <div className={styles.container}>
                <h1 className={styles.title}>Summary</h1>
                <h4 className={styles.subtitle}>Add Summary for your job title</h4>
                <div className={styles.h3content}>
                    <h3 className={styles.heading}>Add Summary</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        onChange={(e) => setPrompt(e.target.value)}
                        className={styles.summaryInput}
                        placeholder="Ex:- Summary of python"
                    />
                    <button type="submit" className={styles.generateButton} disabled={loading}>
                        {loading ? "Generating..." : "Generate from AI"}
                    </button>
                    <button className={styles.generateButton} onClick={Handlecheckdata}>Save</button>
                </form>
            </div>
 
{/* ******************************Second div************************************* */}


            <div className={styles.containers}>
                <div className={styles.secondcontainers}>
                    <h1 className={styles.titles}>Summary</h1>
                    <button className={styles.generateButton} onClick={toggleBold}>
                        {boldMode ? "Bold" : "Bold"}
                    </button>
                    <button className={styles.generateButton} onClick={toggleItalic}>
                        {italicMode ? "Italic" : "Italic"}
                    </button>
                </div>
                <div className={styles.box}>
                    <ul>
                        {renderContent()}
                    </ul>
                </div>
            </div>
       
        </div>
    );
}

export default memo(Section2);
