import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Buttons";
import image from '../public/background-img.png'
import Footer from '../Components/Footer';
import MyForm from '../Components/MyForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker,faEnvelope} from '@fortawesome/free-solid-svg-icons';
const ContactUs = () => {
  return (
    <>
      <Wrapper style={{backgroundImage:`url(${image})`}}>
      <h1 style={{fontSize:"50px"}}>CONNECT WITH US</h1>
      <p>Please Fill This Form And Get In Touch With Us</p>
      <div className="container">
        <div className="grid grid-two-column">
          <MyForm/>
          <div className="hero-section-image">
            <figure>
              <img src="Images/background_img.png" alt="hero-section" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
    <MidSection>
      <h2>OUR LOCATION</h2><p><FontAwesomeIcon icon={faMapMarker} />GURUGRAM, HARYANA</p>
      <h2 style={{marginTop:"100px"}}>GET IN TOUCH</h2><p><FontAwesomeIcon icon={faEnvelope} />abhinav@collabadda.net</p>
    </MidSection>
    </>
  )
}

const Wrapper = styled.section`
  padding:4rem;

    p {
      margin: 1rem 2rem;
      color:black;
      justify-content:center;
      text-align:center;
      font-weight:bold;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      font-size:2.8rem;
      font-family: 'Myanmar Khyay';
      word-spacing: 5px;
    word-wrap: break-word;
      justify-content:center;
      text-align:center;
    }
  
  .img-style {
    width: 80%;
    height: auto;
    border-top-left-radius: 100px;
    border-bottom-right-radius: 100px
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

  }
`;

const MidSection=styled.section`
height:50vh;
width:100%;
margin-top:100px;

p{
  color:#593C8F;
  justify-content:center;
  text-align:center;
  font-weight:bold
}
`

export default ContactUs
