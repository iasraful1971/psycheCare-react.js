import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] =useState([]);
    useEffect(() => {
        fetch("/services.json")
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="service-griding">
                    {services.map(service => <Service
                    key ={service}
                    sr={service}
                    ></Service>)}
                </div>
            </div>
        </div>
    );
};

export default Services;