import React, { useState, memo } from 'react';
import styles from './Section3.module.css';
import { Section3Addfunction } from '../../Reducers';
// import Data from '../../Data';
import { useDispatch } from 'react-redux';

function Section3() {
    const dispatch = useDispatch();
    const [tenth, setTenth] = useState("");
    const [tenthYear, setTenthYear] = useState("");
    const [twelfthClass, setTwelfthClass] = useState("");
    const [twelfthYear, setTwelfthYear] = useState("");
    const [ug, setUg] = useState("");
    const [ugYear, setUgYear] = useState("");
    const [pg, setPg] = useState("");
    const [pgYear, setPgYear] = useState("");
    const [errors, setErrors] = useState({});

    const handleTenthSchool = (e) => setTenth(e.target.value);
    const handleTenthYear = (e) => setTenthYear(e.target.value);
    const handleTwelfthSchool = (e) => setTwelfthClass(e.target.value);
    const handleTwelfthYear = (e) => setTwelfthYear(e.target.value);
    const handleUgName = (e) => setUg(e.target.value);
    const handleUgYear = (e) => setUgYear(e.target.value);
    const handlePgName = (e) => setPg(e.target.value);
    const handlePgYear = (e) => setPgYear(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          dispatch(Section3Addfunction({ tenth, tenthYear, twelfthClass, twelfthYear, ug, ugYear, pg, pgYear }));
        }
      };

    const validate = () => {
        let valid = true;
        const errors = {};

        if (!tenth) {
            errors.tenth = "10th class school name is required";
            valid = false;
        }
        if (!tenthYear || !/^\d{4}$/.test(tenthYear)) {
            errors.tenthYear = "Valid year of passing (4 digits) is required";
            valid = false;
        }
        if (!twelfthClass) {
            errors.twelfthClass = "12th class school name is required";
            valid = false;
        }
        if (!twelfthYear || !/^\d{4}$/.test(twelfthYear)) {
            errors.twelfthYear = "Valid year of passing (4 digits) is required";
            valid = false;
        }
        if (!ug) {
            errors.ug = "UG college name is required";
            valid = false;
        }
        if (!ugYear || !/^\d{4}$/.test(ugYear)) {
            errors.ugYear = "Valid year of passing (4 digits) is required";
            valid = false;
        }
        if (!pg) {
            errors.pg = "PG college name is required";
            valid = false;
        }
        if (!pgYear || !/^\d{4}$/.test(pgYear)) {
            errors.pgYear = "Valid year of passing (4 digits) is required";
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    return (
        <div className={styles.flexconcept}>
            <div className={styles.container}>
                <h1 className={styles.title}>Education Details</h1>
                <h4 className={styles.subtitle}>Add your education details</h4>
                
                <h3 className={styles.heading}>School</h3>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                        <input 
                            type='text'
                            className={styles.summaryInput}
                            placeholder="10 class school name"
                            value={tenth}
                            onChange={handleTenthSchool}
                        />
                        {errors.tenth && <span className={styles.error}>{errors.tenth}</span>}
                        <input 
                            type='text'
                            className={styles.summaryInput}
                            placeholder="Year of passing"
                            value={tenthYear}
                            onChange={handleTenthYear}
                        />
                        {errors.tenthYear && <span className={styles.error}>{errors.tenthYear}</span>}
                    </div>
                    <div className={styles.formRow}>
                        <input 
                            type='text'
                            className={styles.summaryInput}
                            placeholder="12 class school name"
                            value={twelfthClass}
                            onChange={handleTwelfthSchool}
                        />
                        {errors.twelfthClass && <span className={styles.error}>{errors.twelfthClass}</span>}
                        <input 
                            type='text'
                            className={styles.summaryInput}
                            placeholder="Year of passing"
                            value={twelfthYear}
                            onChange={handleTwelfthYear}
                        />
                        {errors.twelfthYear && <span className={styles.error}>{errors.twelfthYear}</span>}
                    </div>

                    <h3 className={styles.heading}>College</h3>
                    <div className={styles.formRow}>
                        <input 
                            type='text'
                            className={styles.summaryInput}
                            placeholder="UG college name"
                            value={ug}
                            onChange={handleUgName}
                        />
                        {errors.ug && <span className={styles.error}>{errors.ug}</span>}
                        <input 
                            type='text'
                            className={styles.summaryInput}
                            placeholder="Year of passing"
                            value={ugYear}
                            onChange={handleUgYear}
                        />
                        {errors.ugYear && <span className={styles.error}>{errors.ugYear}</span>}
                    </div>
                    <div className={styles.formRow}>
                        <input 
                            type='text'
                            className={styles.summaryInput}
                            placeholder="PG college name"
                            value={pg}
                            onChange={handlePgName}
                        />
                        {errors.pg && <span className={styles.error}>{errors.pg}</span>}
                        <input 
                            type='text'
                            className={styles.summaryInput}
                            placeholder="Year of passing"
                            value={pgYear}
                            onChange={handlePgYear}
                        />
                        {errors.pgYear && <span className={styles.error}>{errors.pgYear}</span>}
                    </div>
                    <button type="submit" className={styles.button1}>Save</button>
                </form>
            </div>
            {/* <Data/> */}
        </div>
    );
}

export default memo(Section3);
