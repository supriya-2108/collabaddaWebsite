import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import "../index.css";
const Header = () => {
  return (
    <MainHeader>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding-top: 0;
  height: 6rem;
  overflow: hidden;
  // position: relative;
  background-color: white;
  overflow-x: hidden !important;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    overflow-x: hidden;
    .logo {
      font-size: 18px;
      padding-left: 1rem;
    }
  }
`;

export default Header;
