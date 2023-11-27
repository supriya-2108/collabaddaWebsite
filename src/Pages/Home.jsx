import React from 'react'
import HeroSection from '../Components/HeroSection'
import Brands from '../Components/Brands';
import OurWork from '../Components/OurWork';
import Reviews from '../Components/Reviews';
import MediaCoverage from '../Components/MediaCoverage';
import Statistics from '../Components/Statistics';
import WhatsappButton from '../Components/WhatsappButton';

const Home = () => {
  return (
    <>
      <HeroSection/>
      <WhatsappButton/>
      <Brands/>
      <OurWork/>
      <Statistics/>
      <Reviews/> 
      <MediaCoverage Heading="MEDIA COVERAGE"/>
    </>
    
  )
}

export default Home
