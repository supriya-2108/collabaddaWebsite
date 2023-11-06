import React from 'react'
import HeroSection from '../Components/HeroSection'
import Brands from '../Components/Brands';
import OurWork from '../Components/OurWork';
import Reviews from '../Components/Reviews';
import Footer from '../Components/Footer';
import MediaCoverage from '../Components/MediaCoverage';

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Brands/>
      <OurWork/>
      <Reviews/>
      <MediaCoverage/>
      <Footer/>
    </>
    
  )
}

export default Home
