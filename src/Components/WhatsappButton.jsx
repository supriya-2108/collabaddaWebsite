import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const WhatsappButton = () => {
  return (
    <Button>
        <FontAwesomeIcon icon={faWhatsapp} />
        <NavLink to="https://wa.me/832953422" style={{marginLeft:"0.2rem"}} target='_blank'>Chat</NavLink>
    </Button>
  )
} 

const Button=styled.button`
    background-color: #25d366;
    position: fixed;
    bottom: 20px;
    right: 20px;
    zIndex: 1000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-size: 16px;
   
  `

export default WhatsappButton



