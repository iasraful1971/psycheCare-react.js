import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeService.css';
import SingleHomeService from './SingleHomeService/SingleHomeService';

const HomeService = () => {
   const [services , setServices] = useState([]);
   useEffect(() => {
       fetch("/fourServices.json")
       .then(res => res.json())
       .then(data => setServices(data))
   }, []);
   
    return (
      <>  <div>
      <h2 style={{textAlign:'center' , margin:'20px 0'}}>Our Services</h2>
     <div className="services">
         <div className="container service-container">
             <div className="service-grid">
                 {services.map(service => <SingleHomeService
                 key={service => service}
                 service ={service}
                
                 ></SingleHomeService>)}
                
             </div>
         </div>
                    <div className="d-flex justify-content-center py-5">
                  <Link to="/service">
                  <button className="see-more">See More</button></Link>
                    </div>
     </div>
  </div>
      </>
    );
};

export default HomeService;