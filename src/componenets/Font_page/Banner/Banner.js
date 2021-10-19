import React from 'react';
import cover from '../../../image/bgdoctor.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row banner-area">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <img className="img-fluid" src={cover} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <h2>Be smart and help <br /> yourself now</h2>
                        <p>Emotional pain is not something that should be hidden away and never spoken about. There is truth in your pain, there is growth in your pain, but only if it’s first brought out into the open</p>
                        <button className="banner-btn">Get free treatment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;