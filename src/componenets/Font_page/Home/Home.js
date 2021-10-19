import React from 'react';
import HomeService from '../../Service/HomeService/HomeService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import HomeAbout from '../About/HomeAbout/HomeAbout';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
           <Header></Header>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <HomeService></HomeService>
            <Footer></Footer>
        </div>
    );
};

export default Home;