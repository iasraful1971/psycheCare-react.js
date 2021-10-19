import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import logo from '../../../image/logo-dark.png';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';


const Registation = () => {

            const {googleSignIn , handleEmail , handlePassword ,handleForm , createUser ,user ,success , error}= useAuth();

    


    return (
       <>
       <Header></Header>
       <div className="loggin pt-5 my-5">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                        <div><img src={logo} alt="" /></div>
                        <div><h2 style={{color:'salmon' , fontWeight:'bold' , paddingLeft:'10px'}}>PsycheCare</h2></div>
                </div>
                
               <div className="form-area">
               <form onSubmit={handleForm}>
                   <h2 style={{fontWeight:'bold'}}>Create-Account</h2>
                    <input placeholder="Enter your full name" type="text" name="" id="" /> <br />
                  
                    <input onBlur={handleEmail} placeholder="enter your email" type="email" name="" id="" /> <br />
                    <input onBlur={handlePassword} placeholder="your password? " type="password" name="" id="" /> <br />
                    <input placeholder="Confirm password" type="password" name="" id="" /> <br />
                    <input onBlur={createUser} type="submit" value="Registaion" />
                    {user.email ?<p style={{color:'green'}}>{success}</p> : <p style={{color:'red'}}>{error}</p>}
                    <Link style={{textDecoration:'none',paddingTop:'20px'}} to="/loggin">
                    <p>Already Registered? </p>
                    </Link>
                </form>
               </div>
                <hr />
                <div className="text-center">
                   <button onClick={googleSignIn} className="google-btn">Continue with Google <i class="fab fa-google"></i></button>
                   {user.email ?<p style={{color:'green'}}>{success}</p> : <p style={{color:'red'}}>{error}</p>}
                </div>
            </div>
        </div>
       <Footer></Footer>
       </>
    );
};

export default Registation;