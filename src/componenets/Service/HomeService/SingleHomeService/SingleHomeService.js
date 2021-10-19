import React from 'react';
import { Link } from 'react-router-dom';
import './SingleHomeService.css';

const SingleHomeService = ({service}) => {
    const {img , name , despription , id } = service;
    return (
        <div className=" single-servicing">
           <img src={img} alt="" />
           
               <h3>{name}</h3>
               <p>{despription.slice(0, 150)}</p>
               <Link to={`/details/${id}`}>
                   <button className="details-btn">details</button>
               </Link>
           
        </div>
    );
};

export default SingleHomeService;