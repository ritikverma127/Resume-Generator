import React, { memo, useState } from 'react';
import styles from './Section.module.css';
import { useDispatch } from 'react-redux';
import { Section1Addfunction } from '../../Reducers';
// import Data from '../../Data';

function Section1() {
  const dispatch = useDispatch();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!firstname.trim()) newErrors.firstname = 'First name is required';
    if (!lastname.trim()) newErrors.lastname = 'Last name is required';
    if (!jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!address.trim()) newErrors.address = 'Address is required';
    if (!phone.trim() || !/^\d+$/.test(phone)) newErrors.phone = 'Valid phone number is required';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFirstNameChange = (e) => setFirstname(e.target.value);
  const handleLastNameChange = (e) => setLastname(e.target.value);
  const handleJobTitleChange = (e) => setJobTitle(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(Section1Addfunction({ firstname, lastname, jobTitle, address, phone, email }));
    }
  };

  return (
    <div className={styles.main}>
      <h4 className={styles.h4}>Personal Details</h4>
      <h6 className={styles.h6}>Get Started with the basic Information</h6>
      <form onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="firstName" className={styles.label}>First Name</label>
          <input 
            type="text" 
            id="firstName" 
            className={styles.input} 
            placeholder="First Name" 
            aria-label="First Name" 
            value={firstname} 
            onChange={handleFirstNameChange} 
            required 
          />
          {errors.firstname && <span className={styles.error}>{errors.firstname}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName" className={styles.label}>Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            className={styles.input} 
            placeholder="Last Name" 
            aria-label="Last Name" 
            value={lastname} 
            onChange={handleLastNameChange} 
            required 
          />
          {errors.lastname && <span className={styles.error}>{errors.lastname}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="jobTitle" className={styles.label}>Job Title</label>
          <input 
            type="text" 
            id="jobTitle" 
            className={styles.input} 
            placeholder="Job Title" 
            aria-label="Job Title" 
            value={jobTitle} 
            onChange={handleJobTitleChange} 
            required 
          />
          {errors.jobTitle && <span className={styles.error}>{errors.jobTitle}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="address" className={styles.label}>Address</label>
          <input 
            type="text" 
            id="address" 
            className={styles.input} 
            placeholder="Address" 
            aria-label="Address" 
            value={address} 
            onChange={handleAddressChange} 
            required 
          />
          {errors.address && <span className={styles.error}>{errors.address}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="phone" className={styles.label}>Phone</label>
          <input 
            type="tel" 
            id="phone" 
            className={styles.input} 
            placeholder="Phone" 
            aria-label="Phone" 
            value={phone} 
            onChange={handlePhoneChange} 
            required 
          />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input 
            type="email" 
            id="email" 
            className={styles.input} 
            placeholder="Email" 
            aria-label="Email" 
            value={email} 
            onChange={handleEmailChange} 
            required 
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <button type="submit" className={styles.button1}>Save</button>
      </form>
      {/* <Data /> */}
    </div>
  );
}

export default memo(Section1);
