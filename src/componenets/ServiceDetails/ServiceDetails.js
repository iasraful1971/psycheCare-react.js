import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const ServiceDetails = () => {

    const {id} =useParams();
    


    const [details ,setDetails] = useState([]);
  

    useEffect(() => {
        fetch("/services.json")
        .then(res => res.json())
        .then(data =>  setDetails(data))
    }, []);
  
    const singleDetails  = details.find(td => td.id === id);
   

    return (
       <>
       <Header></Header>
        <div className="container text-center my-5 py-5">
            <img className="img-fluid" src={singleDetails.img} alt="" />
        <h2>{singleDetails?.name}</h2>
        <p>{singleDetails?.description}</p>
        
        </div>
        <Footer></Footer></>
    );
};

export default ServiceDetails;