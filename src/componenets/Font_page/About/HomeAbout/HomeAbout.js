import React from 'react';
import doctor from '../../../../image/about-2.jpg';
import about3 from '../../../../image/about-3.jpg';
import './HomeAbout.css';
const HomeAbout = () => {
    return (
        <div className="home-about py-5 my-5">
            <div className="container">
                <div className="row">

                    <div className="col-lg-7 col-md-7 col-sm-12 col-12 about-text pt-5 mt-5">
                        <h2>We are Ready to <br /> Help Improve Your <br /><span className="spanColor"> Treatment.</span></h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look</p>
                        <p>Happiness can be found even in the darkest of times, if one only remembers to turn on the light .ut of suffering have emerged the strongest souls; the most massive characters are seared with scars</p>
                        <div className="d-flex  justify-content-between about-show">
                                <div><img src={about3} alt="" /></div>
                                <div className="small-text">
                                    <h3>Grief & Loss Counseling</h3>
                                    <p>Your illness is not your identity. Your chemistry is not your character</p>
                                    
                                </div>
                        </div>
                        <button className="banner-btn mt-3">More About us</button>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12 aboutbg">
                            <img className="ab-img" src={doctor} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;