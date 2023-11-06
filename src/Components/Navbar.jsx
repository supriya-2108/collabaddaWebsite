import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();

  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 1.8rem;
      align-items: center;
        padding:5rem;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 550;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.15s linear;
        //   padding-right:3rem;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

   

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 2.2rem;
          color: ${({ theme }) => theme.colors.black};
          padding-right:4px
        }
      }

     

      .active .mobile-nav-icon {
        display: none;
        font-size: 2.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size: 1.2rem;
        }
      }
     

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              ContactUs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/SignIn"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              SignIn
            </NavLink>
          </li>
        </ul>

        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Nav;