import React from 'react';
import coose from '../../../../image/chooseus-2.jpg';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import './AboutUs.css';

const AboutUs = () => {
    return (
        
        <>
        <Header></Header>
        <div className="about-us my-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <img className="img-fluid" src={coose} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 about-text">
                        <h3>About us</h3>
                        <h2>Family Consultation <br /> Psychotherapy</h2>
                        <h4>Therapy With Dr. Rafiqul Islam</h4>
                        <p>Discover the Beauty of Hanover College. Focused, Immersive Academic Experience in Indiana. Create Your Own Path Within A Comprehensive And Rigorous Pre-Med/Pre-Health Program. Design your own major. 32 Majors. Enrollment: 1071. Study Abroad available. ACT Average: 25. Average Aid Package: $26k.our Own Path Within A Comprehensive And Rigorous Pre-Med/Pre-Health Program. Design your own major. 32 Majors. Enrollment: 1071. Study Abroad available. ACT Average: 25. Average Aid Package: $26k. Courses: Health Sciences, Pre-Law, Pre-Med, PhD Physica</p>
                        <button className="see-more">More </button>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer></Footer></>
    );
};

export default AboutUs;