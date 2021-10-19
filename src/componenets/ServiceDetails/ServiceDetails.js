import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import img from '../../../src/image/about-3.jpg';
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
            <img className="img-fluid" src={img} alt="" />
        <h2>{singleDetails?.name}</h2>
        <h2>Depression therapy</h2>
        <p>Depression (major depressive disorder) is a common and serious medical illness that negatively affec officia, quidem explicabo et repellendus nesciunt dicta assumenda provident delectus autem. A facilis possimus quas dolorum ipsam, velit hic quasi voluptatem nisi aut vitae.Depression (major depressive disorder) is a common and serious medical illness that negatively affecr. Depression (major depressive disorder) is a common and serious medical illness that negatively affec .Depression (major depressive disorder) is a common and serious medical illness that  Most people go through periods of feeling down, but when you're depressed you feel persistently sad for weeks or months, rather than just a few days.

          Some people think depression is trivial and not a genuine health condition. They're wrong – it is a real illness with real symptoms. Depression is not a sign of weakness or something you can "snap out of" by "pulling yourself together".

           The good news is that with the right treatment and support, most people with depression can make a full recovery. negatively affec</p>
            
        </div>
        <Footer></Footer></>
    );
};

export default ServiceDetails;