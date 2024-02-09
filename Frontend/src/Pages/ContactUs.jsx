import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Buttons";
import image from "../public/background-img.png";
import Footer from "../Components/Footer";
import MyForm from "../Components/MyForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Brands from "../Components/Brands";
const full_bg_img = "Images/bg_img.png";
const ContactUs = () => {
  return (
    <>
      <Wrapper>
        <div className="container" style={{ margin: window.innerWidth>1030?"3rem":"0rem 1rem 0 1rem" }}>
          <div className="innerContainer">
            <div className="left-section">
              <div className="hero-section-image">
                <h2>CONNECT WITH US</h2>
                <p>Please Fill This Form And Get In Touch With Us</p>
              </div>
              <div>
                <Brands width={window.innerWidth>770?"45vw":"65vw"} show={false} />
              </div>
            </div>
            <div className="right-section">
            <MyForm />
            </div>
          </div>
        </div>
      </Wrapper>
      <MidSection>
        <h2>OUR LOCATION</h2>
        <p>
          <FontAwesomeIcon icon={faMapMarker} />
          GURUGRAM, HARYANA
        </p>
        <h2 style={{ marginTop:"5rem" }}>GET IN TOUCH</h2>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          abhinav@collabadda.net
        </p>
      </MidSection>
    </>
  );
};

const Wrapper = styled.section`
overflow-x:hidden;
.innerContainer{
  display:flex;
  width:95%;
  justify-content:center;
  align-items:center;
  margin:0 auto;

.left-section{
  margin:-12% 3% 0 0;
  flex-direction:column;
}
  .hero-section-image {
    background-image: url(${full_bg_img});
    height: 15rem;
    margin-top: 0%;
    margin-bottom: 6%;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    border-top-left-radius: 100px;
    border-bottom-right-radius: 100px;
    h2 {
      text-transform: uppercase;
      font-weight: 800;
      font-size: 3rem;
      line-height: 1rem;
      margin-top:2rem;
      color: white;
      display:flex;
      align-items:center;
      word-spacing: 5px;
      word-wrap: break-word;
      justify-content: center;
      text-align: center;
    }
    @media(max-width:1140px){
      h2{
        font-size:2.4rem
      }
    }
    
    @media(max-width:770px){
      height:20%;
      width:160%;
      margin-left:-5.5rem;
      h2{
        font-size:1rem;
      }
      p{
        font-size:0.9rem;
      }
    }
  }
  p {
    margin: 1rem 2rem;
    color: white;
    justify-content: center;
    text-align: center;
    font-weight: bold;
  }

  .img-style {
    width: 100%;
    height: 100rem;
    height: auto;
    border-top-left-radius: 100px;
    border-bottom-right-radius: 100px;
  }

  @media(max-width:1024px){
    .left-section{
     margin-top:4rem;
   }
   .right-section{
     margin-top:-20%;
   }
   }
   @media (max-width:770px){
     flex-direction:column;
     .left-section{
       margin:0 0 12% -30%;
     }
   }
   @media (max-width:460px){
    .left-section{
     margin:auto;
    .hero-section-image{
      margin-bottom:4rem;
    }
    }
    .right-section{
      width:100vw;
      display:flex;
      text-align:center;
      justify-content:center;
      align-items:center;
    }
  }
`;

const MidSection = styled.section`
  height: 45vh;
  width: 90%;
  margin: 2% auto 5%;
  justify-content:center;
  align-items:center;
  display:flex;
  flex-direction:column;
  p {
    color: #593c8f;
    justify-content: center;
    text-align: center;
    font-weight: bold;
  }
  @media (max-width:1030px){
    margin-top:10px;
    height:40vh;
  }
  @media (max-width:770px){
    h2{
      font-size:1.2rem;
    }
    p{
      margin-bottom:1rem;
      font-size:0.9rem;
    }
  }
`;

export default ContactUs;
