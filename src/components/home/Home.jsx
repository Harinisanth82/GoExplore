import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Destinations from '../destinations/Destinations';
import BestHotels from '../hotels/BestHotels';
import Services from '../services/Services';
import NewsLetter from '../newsletter/NewsLetter';
import Footer from '../footer/Footer';
import Coffeecuplogo from '../../assets/Coffeecuplogo.png';
import './Home.css';

const Home=()=>{
  const [isFullScreen,setIsFullScreen]=useState(window.innerWidth>=1152);
  useEffect(()=>{
    const handleResize=()=>{
      setIsFullScreen(window.innerWidth >= 1152);
    };
    window.addEventListener('resize',handleResize);
    return ()=>window.removeEventListener('resize',handleResize);
  }, []);
  if (!isFullScreen) {
    return (
      <div className="fullscreen-message">
        <img src={Coffeecuplogo} alt="Maximize Screen" className="fullscreen-image" />
        <p>Oops! Please maximize your screen for the best experience!</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='home-container'>
        <Destinations/>
        <BestHotels/>
        <Services/>
        <NewsLetter/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
