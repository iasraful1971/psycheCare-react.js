
import React from 'react';
import { Link } from 'react-router-dom';
import './SingleServices.css';

const SingleService = ({sr}) => {
    const {name , despription , img , id} =sr;
    return (
        <div className="single-service">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{despription.slice(0 ,100)}</p>
                <Link to={`/details/${id}`}>
                <button className="details-btn">details</button></Link>
            
        </div>
    );
};

export default SingleService;