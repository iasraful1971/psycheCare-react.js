import React from 'react';

const SingleDoctor = ({doctor}) => {
    const {name , time , description , img} = doctor
    return (
        <div className="single-doctor">
            <img src={img} alt="" />
            <h3>Doctor: {name}</h3>
            <h4>Time: {time}</h4>
            <p>{description}</p>
            <button className="details-btn">Contact</button>
        </div>
    );
};

export default SingleDoctor;