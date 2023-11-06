import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import '../index.css'
import HeroSection from './HeroSection';
const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <span className='logo'>COLLABADDA</span>
        </NavLink>
        <Navbar/>
    </MainHeader>
  )
}

const MainHeader = styled.header` 
 padding-top:0;
 height: 5rem;
 background-color:${({theme})=>theme.colors.white};
 display:flex;
 justify-content: space-between;
 align-items: center;
 position: relative;


@media (max-width:${({theme})=>theme.media.mobile}) { 
    .logo{
        font-size: 18px;
        padding-left: 1rem;
    }

} 
`;

export default Header
