import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faTelegram
} from '@fortawesome/free-brands-svg-icons';
import { faPhone,faMapMarker ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import '../GlobalStyle';
import image from '../public/background-img.png'
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <FooterContainer style={{backgroundImage:`url(${image})`}}>
      <LinksColumn>
        <h4>Quick Links</h4>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contactus">Contact</NavLink>
      </LinksColumn>
      <SocialMediaColumn>
        <h4>Connect with Us</h4>
        <div className="links">
          <ul>
          <li>
            <a href="https://www.instagram.com/collabadda/" target="_blank" rel="noreferrer">INSTAGRAM</a>
          </li>
          <li>
            <a href="https://whatsapp.com/channel/0029Va9KvVi5fM5d3yz4DO2v" target="_blank" rel="noreferrer">WHATSAPP CHANNEL</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/collabadda/" target="_blank" rel="noreferrer">LINKEDIN</a>
          </li>
          <li>
            <a href="https://t.me/joinchat/QuuUtxm_Ao0FuB7RK2bkzA" target="_blank" rel="noreferrer">TELEGRAM CHANNEL</a>
          </li>
            </ul>
            <a href="https://t.me/joinchat/QuuUtxm_Ao0FuB7RK2bkzA" style={{marginTop:"20px"}} target="_blank" rel="noreferrer">JOIN OUR COMMUNITY</a>
      
        </div>
       <p style={{marginTop:"2rem"}}>  ©2020-{new Date().getFullYear()} . All Rights Reserved.</p>
      </SocialMediaColumn>
      <CompanyDetailsColumn>
        
        <p style={{fontWeight:"bold",marginTop:"2rem",marginBottom:"1rem"}}>COLLABADDA</p>
        <p><FontAwesomeIcon icon={faMapMarker} />FIRST FLOOR ANUPAM ENCLAVE PHASE-1 SAKET, DELHI</p>
        <p><FontAwesomeIcon icon={faEnvelope} />abhinav@collabadda.net</p>
        <p><FontAwesomeIcon icon={faPhone} />+91-832953422</p>
      </CompanyDetailsColumn>
    </FooterContainer>
  );
};



const FooterContainer = styled.footer`
  color:black;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width:${({theme})=>theme.media.mobile}) { 
    padding:0;
      h4,a{
        margin-top:2rem;
      }
      p{
        font-size:0.8rem;
      }
  }
`;

const Column = styled.div`
  flex: 1;
  max-width: 33%;
  margin: 0 10px;
`;

const LinksColumn = styled(Column)`
  a {
    display: block;
    width:3rem;
    color: black;
    text-decoration: none;
    margin-bottom: 10px;
    margin-top:10px;
  }
  @media (max-width:${({theme})=>theme.media.mobile}){
    a{
      margin-bottom:5px;
      margin-bottom:5px;
    }
  }
`;

const SocialMediaColumn = styled(Column)`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction:column;
  }

  li {
    margin-right: 40px;
    margin-top:20px;
  }

  a {
    color:#593C8F;
    text-decoration: none;
  }
  .links{
    display:flex;
    flex-direction:row;
  }
  @media (max-width:${({theme})=>theme.media.mobile}) { 
    li{
      margin-top:1rem;
    }
    li{
      margin-right:0.8rem;
    }
  }
`;

const CompanyDetailsColumn = styled(Column)`
  p {
    margin-top: 3px;
    color:black;
    font-size:15px
  }

  @media (max-width:${({theme})=>theme.media.mobile}) { 
  p{
    margin-top:10px;
    font-size:12px;
  }
  }
  
`;

export default Footer;
