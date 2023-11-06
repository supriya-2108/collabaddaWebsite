import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone,faMapMarker ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <FooterContainer>
      <LinksColumn>
        <h4>Quick Links</h4>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </LinksColumn>
      <SocialMediaColumn>
        <h4>Connect with Us</h4>
        <ul>
          <li>
            <a href="https://facebook.com"> <FontAwesomeIcon icon={faFacebook} size="2x"/></a>
          </li>
          <li>
            <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
          </li>
          <li>
            <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
          </li>
        </ul>
      </SocialMediaColumn>
      <CompanyDetailsColumn>
        <p style={{fontWeight:"bold"}}>COLLABADDA</p>
        <p><FontAwesomeIcon icon={faMapMarker} />123 Main Street</p>
        <p>City, State 12345</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> contact@yourcompany.com</p>
        <p><FontAwesomeIcon icon={faPhone} /> (123) 456-7890</p>
      </CompanyDetailsColumn>
    </FooterContainer>
  );
};



const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Column = styled.div`
  flex: 1;
  max-width: 33%;
  margin: 0 10px;
`;

const LinksColumn = styled(Column)`
  a {
    display: block;
    color: #fff;
    text-decoration: none;
    margin-bottom: 10px;
    margin-top:10px;
  }
`;

const SocialMediaColumn = styled(Column)`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }

  li {
    margin-right: 40px;
    margin-top:20px;
  }

  a {
    color:#593C8F;
    text-decoration: none;
  }
`;

const CompanyDetailsColumn = styled(Column)`
  p {
    margin-top: 3px;
    color:white;
    font-size:15px
  }
`;

export default Footer;
