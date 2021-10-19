import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({sr}) => {
    const {name , despription , img} =sr;
    return (
        <div className="single-service">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{despription.slice(0 ,100)}</p>
                <Link>
                <button className="details-btn">details</button></Link>
            
        </div>
    );
};

export default Service;