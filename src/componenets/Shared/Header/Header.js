import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import logo from '../../../image/logo-dark.png';
import './Header.css';
const Header = () => {

const {user , logout} = useAuth();

    return (
      
     
           <>
           {/* header top */}
           <div className="top-bar">
          
                   <div className="row">
                       <div className="col-lg-4">
                            <div className="logo-area">
                             <div className="logo">
                             <img src={logo} alt="" /> 
                                 </div>  
                                 <div className="logo-text">
                                     <h2>PsycheCare</h2> </div> 
                            </div>   
                       </div>
                       <div className="col-lg-4 d-flex justify-content-center align-items-center">
                        <div className="top-bar-icon"> <i class="fas fa-map-marked-alt"></i></div>
                        <div className="top-bar-text"><h3>Visit Our Place</h3>
                        <h4>NY 11209, United States</h4></div>
                       </div>
                       <div className="col-lg-4 d-flex justify-content-center align-items-center">
                              <div className="log-icon">{user.email? <i class="far fa-user"></i>: <i class="fas fa-user-lock"></i> }</div>
                               <div className="d-flex log-text">
                                 <h4 style={{fontWeight:'bold', fontSize:'18px' ,color:'purple'}}>{user.email && <span>welcome, {user.displayName}</span>}</h4>
                                 {user.email && <button className="details-btn" onClick={logout}>log out</button>}
                              
                               {!user.email && <Link style={{textDecoration:'none'}} to="/loggin">
                               <h2>Log-in</h2></Link>}
                              {
                                !user.email&&  <Link style={{textDecoration:'none'}} to="/registation">
                                <h2>/ Register</h2></Link>
                              }

                               

                           </div>
                       </div>
            
               </div>
           </div>

{/* navbar start  */}

<Navbar className="nav-area" expand="lg" sticky="top">
  <Container>
    <Navbar.Brand></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/service">Our services</NavLink>
        <NavLink to="/doctor">Doctors and nurses</NavLink>
        <NavLink to="/about-us">About us</NavLink>
       
        <NavLink to="/contact-us">Get Touch with us</NavLink>
      
        
      </Nav>
      <div className="nav-social">
      <i class="fab fa-quora"></i>
      <i class="fab fa-staylinked"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
      </div>
   
    </Navbar.Collapse>
  </Container>
</Navbar>
           </>
        
    );
};

export default Header;