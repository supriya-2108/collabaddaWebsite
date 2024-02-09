import React from "react";
import HeroSection from "../Components/HeroSection";
import Brands from "../Components/Brands";
import OurWork from "../Components/OurWork";
import Reviews from "../Components/Reviews";
import MediaCoverage from "../Components/MediaCoverage";
import Statistics from "../Components/Statistics";
import Services from "../Components/Services";
import ReasosnYouneedMa from "../Components/ReasosnYouneedMa";
import WhyChooseUs from "../Components/WhyChooseUs";
import Image from "../Components/Image";
import Faqs from "./Faqs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Brands />
      <Image />
      <OurWork />
      {/* <ReasosnYouneedMa/> */}
      <Statistics />
      <Services />
      <Reviews />
      <WhyChooseUs />
      <MediaCoverage Heading="MEDIA COVERAGE" />
    </>
  );
};

export default Home;
