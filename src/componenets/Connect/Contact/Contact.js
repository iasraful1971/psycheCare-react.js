import React from 'react';
import con from '../../../image/undraw_Inbox_cleanup_re_jcbh.svg';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Contact.css';

const Contact = () => {
    return (
      <>
      <Header></Header>
        <div  className="contact py-5 my-5">
                <div className="container">
                    <h2 style={{textAlign:'center' , paddingBottom:'20px' ,fontWeight:'bold' , color:'purple'}}>Get Touch With us</h2>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <img className="img-fluid" src={con} alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <form className="contact-area">
                                <input type="text" placeholder="your name? " name="" id="" /> <br />
                                <input type="text" placeholder="your email? " name="" id="" /> <br />
                                <textarea placeholder="type your message" name="" id="" ></textarea> <br />
                                <button className="see-more pt-2 mt-3">send to us</button>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
        <Footer></Footer>
      </>
    );
};

export default Contact;