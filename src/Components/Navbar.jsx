import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { CgMenu, CgClose } from "react-icons/cg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth0 } from "@auth0/auth0-react";
import {collaborationdata,Influenver_markettingdata,MemeMarketing,Twittermarketing,WhatsappServices,orm,Performancemarketing,branding,EmergingTechnology} from './Services_Info.jsx'
const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { logout,isAuthenticated,loginWithRedirect, user  } = useAuth0();
  const Nav = styled.nav`
    z-index:1000;
    .navbar-lists {
      list-style:none;
      display: flex;
      gap: 1.8rem;
      height:6rem;
      align-items: center;
      padding-right:5rem;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 550;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
          text-decoration:underline;
        }
      }
    }
   
    .navbar-lists li{
      line-height:6rem;
      height:6rem;
      position:relative;
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

   
    
    .dropdownheadings ul{
      list-style:none;
      padding:1rem 0 0 0;
      visibility:hidden;
      margin:0;
      display:flex;
      flex-direction:row;
      position:fixed;
      opacity:0;
      top:5rem;
      left:35rem;
     background-color:white;
     height:22rem;
     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
     cursor:pointer;
    
    }

    .arrow{
      display: none;
      margin-left: 5px;
    }
    .dropdownheadings li{
      margin:-2rem 4.5rem 1rem 0;
      font-size:1.15rem;
      font-weight:480;
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
        text-decoration:underline;
      }
    }

    

    .navbar-lists li:hover > .dropdownheadings ul{
      opacity:1;
      visibility:visible;
    }

    
    
     .subMenu ul{
        flex-direction:column;
        box-shadow:none;
        position:fixed;
        height:auto;
        margin:4rem 0 0 0;
        padding:0 0rem 0 1rem;
        width:15%;
     }


     .subMenu li{
      height:4rem;
      width:17rem;
      // background-color:green;
      // color:white;
      margin-top:-2rem;
      font-size:0.9rem; 
     }

     .dropdownheadings li ul li:hover .arrow{
      display:inline-block;
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
              className="navbar-link "
              >
              Services</NavLink>
            <div className="dropdownheadings">
              <ul>
                <li><NavLink style={{color:"black",paddingLeft:"1rem"}}>
                              Project-based services<FontAwesomeIcon icon={faArrowRight} className="arrow" size="1x"/>
                    </NavLink>
                      <div className="subMenu" >
                        <ul>  
                        <li><NavLink
                              to="/servicesPage/CelebrityCollaboration"
                              style={{color:"black"}}
                              state={{data:collaborationdata}}
                              >
                              Celebrity Collaboration
                             </NavLink></li>
                           <li><NavLink
                              to="/servicesPage/InfluencerMarketing"
                              style={{color:"black"}}
                              state={{data:Influenver_markettingdata}}
                              >
                              Influencer Marketing
                             </NavLink></li>
                           <li><NavLink
                              to="/servicesPage/MemeMarketing"
                              style={{color:"black"}}
                              state={{data:MemeMarketing}}
                              >
                              Meme Marketing
                             </NavLink></li>
                           <li><NavLink
                              to="/servicesPage/TwitterServices"
                              style={{color:"black"}}
                              state={{data:Twittermarketing}}
                              >
                              Twitter Services
                             </NavLink></li>
                           <li><NavLink
                              to="/servicesPage/WhatsappServices"
                              style={{color:"black"}}
                              state={{data:WhatsappServices}}
                              >
                              Whatsapp Services
                             </NavLink></li>
                           <li><NavLink
                              to="/servicesPage/ORM"
                              style={{color:"black"}}
                              state={{data:orm}}
                              >
                              ORM (Online Reputation Management)
                             </NavLink></li>  
                         </ul>
                    </div>
                    </li>      
                <li><NavLink  style={{color:"black"}}
                              to="/servicesPage/Performancemarketing"
                              state={{data:Performancemarketing}}
                             >
                              Performance marketing
                             </NavLink></li>
                <li><NavLink  style={{color:"black"}}
                              to="/servicesPage/branding"
                              state={{data:branding}}
                              >
                              Branding
                             </NavLink></li>
                <li><NavLink  style={{color:"black"}}
                              to="/servicesPage/EmergingTechnology"
                              state={{data:EmergingTechnology}}
                              >
                              Emerging Technology
                             </NavLink></li>
              </ul>
            </div>
            
          </li>
          {
          isAuthenticated && (
              <li className="navbar-link " style={{color:"#593C8F",fontWeight:"700"}}>
               {user.name}
              </li>
            )
          }{
            isAuthenticated ?
            <li>
              <NavLink
              className="navbar-link "
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Logout
            </NavLink>
            
          </li>:
          <li>
            <NavLink
              className="navbar-link "
              onClick={() => loginWithRedirect()}>
              Login
            </NavLink>
          </li>
          }
          
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