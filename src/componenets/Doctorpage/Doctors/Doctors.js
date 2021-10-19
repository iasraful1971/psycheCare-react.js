import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import SingleDoctor from '../SingleDoctor/SingleDoctor';
import './Doctors.css';
const Doctors = () => {
    const [doctors , setDoctor] =useState([]);
    useEffect(() => {
        fetch("doctors.json")
        .then(res => res.json())
        .then(data => setDoctor(data))
    },[]);

    return (
        <>
        <Header></Header>
        <div className="doctors py-5 my-5">
            <div className="container doctor-container">
                <div className="doctor-grid">
                    {
                        doctors.map(doctor => <SingleDoctor
                        key={doctor.key}
                        doctor={doctor}
                        ></SingleDoctor>)
                    }
                </div>
            </div>
        </div>
        <Footer></Footer></>
    );
};

export default Doctors;