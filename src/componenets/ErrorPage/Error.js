import React from 'react';
import error from '../../image/error.png';
import './Error.css';

const Error = () => {
    return (
        <div className="container">
            <div className="error">
            <img className="img-fluid" src={error} alt="" />
            
        </div>
        </div>
    );
};

export default Error;