import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import SingleService from '../SingleService/SingleService';
import './AllServices.css';

const AllServices = () => {
    const [services, setServices] =useState([]);
    useEffect(() => {
        fetch("/services.json")
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <Header></Header>
            <div className="container py-5 my-5">
                <div className="service-griding">
                    {services.map(service => <SingleService
                    key ={service}
                    sr={service}
                    ></SingleService>)}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllServices;
