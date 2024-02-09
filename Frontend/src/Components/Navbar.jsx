import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { CgMenu, CgClose } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";

import { GlobalContext } from "../context/userContext";
import {
  collaborationdata,
  Influenver_markettingdata,
  MemeMarketing,
  Twittermarketing,
  WhatsappServices,
  orm,
  Performancemarketing,
  branding,
  EmergingTechnology,
  SeoData,
  SocialMediaData,
  ShortVideoData,
  SeoAds,
  brandingDesigning,
  brandingStrategy,
  brandedContent,
  marketing,
  commercialVideos,
  corporateVideos,
  productVideos,
  creatorVideos,
  videoediting,
  AppDevelopment,
  webDesigningServices,
  WebDevelopment,
  ArtificialIntelligence,
} from "./Services_Info.jsx";
const Nav = () => {
  const { logout } = GlobalContext();
  let userName = localStorage.getItem("USERNAME");
  let isAuth = localStorage.getItem("IS_AUTH");
  const [accountShow, setAccountShow] = useState(false);
  const [navbarPosition, setNavbarPosition] = useState("fixed");
  const [show, setshow] = useState(false);
  const location = useLocation();
  const [menuIcon, setMenuIcon] = useState();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  const handleResize = () => {
    setNavbarPosition(window.innerWidth > 770 ? "fixed" : "static");
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const navbarBackground =
    scrollPosition === 0 ? "transparent" : "rgba(255, 255, 255, 0.9)";
  const navcolor = scrollPosition === 0 ? "white" : "rgba(0, 0, 0, 0.9)";
  const Nav = styled.nav`
    z-index: 1000;
    display: flex;
    width: 100vw;
    height: 4rem;
    position: fixed;
    top: 0rem;
    padding: 0 2rem;
    font-weight: 500;
    text-transform: uppercase;
    align-items: center;
    justify-content: space-between;
    box-shadow: ${scrollPosition === 0 ? "0" : "0 4px 8px rgba(0, 0, 0, 0.5)"};
    @media (max-width: 770px) {
      position: static;
    }
    .logo {
      font-size: 1rem;
      font-weight: 550;
      margin-top: 3rem;
      text-transform: uppercase;
      color: ${location.pathname === "/"
        ? scrollPosition === 0
          ? "white"
          : "black"
        : "black"};
      @media (max-width: 770px) {
        visibility: visible;
        margin-top: 1rem;
      }
    }
    .account-links {
      background-color: white;
      margin: 0rem 0 0 -1rem;
      color: ${location.pathname === "/" ? "white" : "black"};
      height: 7rem;
      width: 15rem;
      padding: 0 0 0 0.3rem;
      position: absolute;
      width: 10rem;

      li {
        display: flex;
        color: black;
        justify-content: left;
        align-items: center;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .navbar-lists {
      list-style: none;
      display: flex;
      gap: 1.8rem;
      height: 6rem;
      align-items: center;
      padding-right: 5rem;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: ${location.pathname === "/"
            ? scrollPosition === 0
              ? 450
              : 650
            : 650};
          text-transform: uppercase;
          color: ${location.pathname === "/"
            ? scrollPosition === 0
              ? "white"
              : "black"
            : "black"};
        }
        &:hover,
        &:active {
          color: black;
          text-decoration: underline;
        }
      }
    }

    .navbar-lists li {
      line-height: 4rem;
      height: 4rem;
      position: relative;
      @media (max-width: 770px) {
        height: 1rem;
        top: -12rem;
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

    .dropdownheadings ul {
      list-style: none;
      padding: 1.2rem 1rem 1rem 1rem;
      z-index: 999;
      margin: 0rem;
      visibility: visible;
      display: flex;
      width: 100%;
      position: fixed;
      opacity: 1;
      top: 5rem;
      padding: 1rem auto;
      left: 0;
      background-color: white;
      height: 24rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
      cursor: pointer;
      li {
        line-height: 1rem;
        height: 1rem;
      }
      @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1px;
        height: 35rem;
        top: 40%;
        left: 50%;
        li {
          line-height: 0.5rem;
          height: 0.5rem;
        }
      }
    }

    .arrow {
      display: none;
      margin-left: 5px;
    }

    // .navbar-lists li:hover> .dropdownheadings ul {
    //   opacity: 0;
    //   visibility: visible;
    // }

    .innermenu {
      display: flex;
      padding-right: 3rem;
      padding-left: 3rem;
      border-right: 0.1px solid rgb(89, 60, 143);
      width: 100%;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 1170px) {
        padding-right: 2rem;
        padding-left: 2rem;
      }
      @media (max-width: 900px) {
        padding-right: 1rem;
        padding-left: 1rem;
      }
      @media (max-width: 768px) {
        margin-bottom: 1rem;
      }
    }
    .sub-innermenu {
      height: 2.2rem;
      font-size: 1rem;
      margin-bottom: 1rem;
      padding: 1rem 0;
      h4 {
        color: rgb(89, 60, 143);
        font-size: 1rem;
        text-transform: capitalize;
        @media (max-width: 900px) {
          font-size: 1rem;
        }
      }
      span {
        visibility: hidden;
        position: relative;
        margin-left: 0.4rem;
      }
      @media (max-width: 768px) {
        font-size: 0.4rem;
        height: 0.2rem;
        padding: 0.3rem 0;
        margin-bottom: 0;
        h4 {
          font-size: 0.6rem;
        }
      }
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 2.2rem;
          margin-left: -5%;
          color: ${location.pathname === "/"
            ? scrollPosition === 0
              ? "white"
              : "black"
            : "black"};
          padding-right: 4px;
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 2.2rem;
        // position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
        @media (max-width: 770px) {
          top: 8%;
        }
      }

      .navbar-lists {
        width: 100vw;
        height: 90vh;
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
        padding: 0;
        // background-color:rgba(89, 60, 143,1);
        transform-origin: right;
        transition: all 3s linear;
        .navbar-link {
          color: black;
          height: 0.5rem;
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
  const showMenuClass = () => {
    setshow((prevShow) => !prevShow);
  };
  const handleMouseEvents = (e) => {
    e.target.style.textDecoration = "underline";
    const spanElement = e.target.querySelector("span");
    if (spanElement) {
      spanElement.style.visibility = "visible";
    }
  };

  const handleMouseOutEvents = (e) => {
    e.target.style.textDecoration = "none";
    const spanElement = e.target.querySelector("span");
    if (spanElement) {
      spanElement.style.visibility = "hidden";
    }
  };
  return (
    <nav style={{ backgroundColor: navbarBackground, color: navcolor }}>
      <NavLink to="/">
        <div className="">collabadda</div>
      </NavLink>
      <div>
        <ul>
          <li>
            <NavLink to="/" onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/mediakit"
             
              onClick={() => setMenuIcon(false)}
            >
              MediaKit
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/about" onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" onClick={() => setMenuIcon(false)}>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactus" onClick={() => setMenuIcon(false)}>
              Contact Us
            </NavLink>
          </li>

          <li
            onClick={showMenuClass}
            onMouseEnter={showMenuClass}
            onMouseLeave={showMenuClass}
          >
            <NavLink>Services</NavLink>
            {show && (
              <div className="dropdownheadings">
                <ul>
                  <li>
                    <div className="innermenu">
                      <div className="sub-innermenu">
                        <NavLink>
                          <h4
                            onMouseOver={(e) => {
                              e.target.style.textDecoration = "underline";
                            }}
                            onMouseOut={(e) => {
                              e.target.style.textDecoration = "none";
                            }}
                          >
                            Project-based services
                          </h4>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/CelebrityCollaboration"
                          style={{ color: "black" }}
                          state={{ data: collaborationdata }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Celebrity Collaboration
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/InfluencerMarketing"
                          style={{ color: "black" }}
                          state={{ data: Influenver_markettingdata }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Influencer Marketing
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/MemeMarketing"
                          style={{ color: "black" }}
                          state={{ data: MemeMarketing }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Meme Marketing
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/TwitterServices"
                          style={{ color: "black" }}
                          state={{ data: Twittermarketing }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Twitter Services
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/WhatsappServices"
                          style={{ color: "black" }}
                          state={{ data: WhatsappServices }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Whatsapp Services
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/ORM"
                          style={{ color: "black" }}
                          state={{ data: orm }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Online Reputation Management
                          <span
                            style={{
                              visibility: "hidden",
                              paddingLeft: "0",
                              paddingTop: "0.2rem",
                            }}
                          >
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="innermenu">
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/Performancemarketing"
                          state={{ data: Performancemarketing }}
                        >
                          <h4
                            onMouseOver={(e) => {
                              e.target.style.textDecoration = "underline";
                            }}
                            onMouseOut={(e) => {
                              e.target.style.textDecoration = "none";
                            }}
                          >
                            Performance marketing
                          </h4>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/Seo"
                          style={{ color: "black" }}
                          state={{ data: SeoData }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          SEO
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/SocialMediaData"
                          style={{ color: "black" }}
                          state={{ data: SocialMediaData }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Social Media Ads{" "}
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/ShortVideoAds"
                          style={{ color: "black" }}
                          state={{ data: ShortVideoData }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Short video ads
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/SearchEngineAds"
                          style={{ color: "black" }}
                          state={{ data: SeoAds }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Search engine ads
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu"></div>
                      <div className="sub-innermenu"></div>
                    </div>
                  </li>
                  <li>
                    <div className="innermenu">
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/branding"
                          state={{ data: branding }}
                        >
                          <h4
                            onMouseOver={(e) => {
                              e.target.style.textDecoration = "underline";
                            }}
                            onMouseOut={(e) => {
                              e.target.style.textDecoration = "none";
                            }}
                          >
                            Branding
                          </h4>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/brandingStrategy"
                          style={{ color: "black" }}
                          state={{ data: brandingStrategy }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Strategy​
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/Designing"
                          style={{ color: "black" }}
                          state={{ data: brandingDesigning }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Designing
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/Marketing"
                          style={{ color: "black" }}
                          state={{ data: marketing }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Marketing
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/BrandedContent"
                          style={{ color: "black" }}
                          state={{ data: brandedContent }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Branded Content
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu"></div>
                      <div className="sub-innermenu"></div>
                    </div>
                  </li>
                  <li>
                    <div className="innermenu">
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/EmergingTechnology"
                          state={{ data: EmergingTechnology }}
                        >
                          <h4
                            onMouseOver={(e) => {
                              e.target.style.textDecoration = "underline";
                            }}
                            onMouseOut={(e) => {
                              e.target.style.textDecoration = "none";
                            }}
                          >
                            Video Production
                          </h4>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/corporateVideo"
                          style={{ color: "black" }}
                          state={{ data: corporateVideos }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Corporate Video​{" "}
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/ProductShoot"
                          style={{ color: "black" }}
                          state={{ data: productVideos }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Product Shoot{" "}
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/creatorVideos"
                          style={{ color: "black" }}
                          state={{ data: creatorVideos }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Creator Video
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/commercialVideos"
                          style={{ color: "black" }}
                          state={{ data: commercialVideos }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Commercial ads
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/TwitterServices"
                          style={{ color: "black" }}
                          state={{ data: videoediting }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Video Editing Services
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu"></div>
                    </div>
                  </li>
                  <li>
                    <div className="innermenu" style={{ borderRight: "none" }}>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/EmergingTechnology"
                          state={{ data: EmergingTechnology }}
                          onMouseOver={(e) => {
                            e.target.style.textDecoration = "underline";
                          }}
                          onMouseOut={(e) => {
                            e.target.style.textDecoration = "none";
                          }}
                        >
                          <h4>Technology Solutions</h4>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/AppDevelopement"
                          style={{ color: "black" }}
                          state={{ data: AppDevelopment }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          App Development​
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/WebDevelopement"
                          style={{ color: "black" }}
                          state={{ data: WebDevelopment }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Web Development
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/ArtificialInteligence"
                          style={{ color: "black" }}
                          state={{ data: ArtificialIntelligence }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Artificial Intelligence
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/WebDesigning"
                          style={{ color: "black" }}
                          state={{ data: webDesigningServices }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Web Designing Service
                          <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu">
                        <NavLink
                          to="/servicesPage/TwitterServices"
                          style={{ color: "black" }}
                          state={{ data: Twittermarketing }}
                          onMouseOver={handleMouseEvents}
                          onMouseOut={handleMouseOutEvents}
                        >
                          Tools and script development
                          <span
                            style={{
                              visibility: "hidden",
                              paddingLeft: "100%",
                              paddingTop: "0.2rem",
                            }}
                          >
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </NavLink>
                      </div>
                      <div className="sub-innermenu"></div>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {isAuth && (
            <li
              style={{
                cursor: "Pointer",
                textTransform: "Uppercase",
                color:
                  location.pathname === "/"
                    ? scrollPosition === 0
                      ? "white"
                      : "black"
                    : "black",
              }}
              onClick={() => setAccountShow(!accountShow)}
            >
              My Account
              {accountShow && (
                <ul className="account-links">
                  <li
                    disabled
                    style={{
                      lineHeight: "3rem",
                      padding: "1rem 0",
                      height: "3rem",
                      borderBottom: "solid 1px black",
                    }}
                  >
                    {userName}
                  </li>
                  <li
                    style={{
                      lineHeight: "3rem",
                      padding: "1rem 0",
                      height: "3rem",
                    }}
                  >
                    Manage Account
                  </li>
                </ul>
              )}
            </li>
          )}
          {isAuth ? (
            <li>
              <NavLink onClick={logout}>Logout</NavLink>
            </li>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
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
    </nav>
  );
};

export default Nav;
