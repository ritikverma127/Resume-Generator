import React from 'react';
import { useSelector } from 'react-redux';
// import Slider from '@mui/material/Slider';


function Data() {
    // const items = useSelector((state) => state.user.section1);
    // const itemer = useSelector((state) => state.user.section2);
    // const itemes = useSelector((state) => state.user.section3);
    const sec4 = useSelector((state) => state.user.cart);

    return (
        <>
            {/* {
                items.map((item, i) => (
                    <div key={i}>
                        <h1>{item.firstname}</h1>
                        <h1>{item.lastname}</h1>
                        <h1>{item.jobtitle}</h1>
                        <h1>{item.address}</h1>
                        <h1>{item.phone}</h1>
                        <h1>{item.email}</h1>
                    </div>
                ))
            } 
            
            
            */}

            {/* **************************Section2*************************************** */}
            {/* 
            <div>
                <h1>Data Page</h1>
                {itemer.map((item, i) => (
                    <div key={i}>
                        <h1>{item.join(', ')}</h1>
                        {console.log(item)}
                    </div>
                ))}
            </div>
            */}
            {/* **************************Section3*************************************** */}

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

            {/* **************************Section4*************************************** */}

            {/* {sec4.map((item) => (
                <div key={item.id}> 
                    <h3>{item.skill}</h3>
                    <div className={Styles.gud}> give the css of this code to ajust it 
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
            ))} */}
        </>
    );
}

export default Data;
