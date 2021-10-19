import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../image/error.png';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="container not-container">
            <div className="notFound">
                  <Link to="/home">
                  <img className="img-fluid" src={error} alt="" />  </Link>
                       
            </div>
           
        
        </div>
    );
};

export default NotFound;