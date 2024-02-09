import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faLock } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  const logo = "logo192.png";
  const fbSecure = "Images/facebooksecured.png";
  const gsecured = "Images/googlesecured.png";
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Wrapper>
      <div className="footer-1">
        <h3>Start Your Journey</h3>
        <p>You Have Just 5 Seconds To Tell Your Brand's Story We Only Need 4</p>
        <a href="/contactus"><button>Connect With Us</button></a>
      </div>
      <div className="footer-2">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="company-info">
            <img src={logo} alt="logo" className="logo" />
            <h4>Collabadda</h4>
          </div>
          <div className="securedImages">
            {/* <img
              src={fbSecure}
              style={{
                height: "2.55rem",
                marginLeft: "0.7rem",
                marginTop: "-0.35rem",
              }}
              alt=""
            /> */}
            {/* <FontAwesomeIcon icon={faShield}/> */}
            <div><FontAwesomeIcon icon={faLock} /><span>Facebook<br/>Secured</span></div>
            <div><FontAwesomeIcon icon={faLock} /><span>Google<br/>Secured</span></div>
          </div>
        </div>

        <div className="links-info">
          <div className="Links">
            <ul>
              <li style={{ fontWeight: "700" }}>PRODUCT</li>
              <li>
                <a href="/contactus">Brands</a>
              </li>
              <li>
                <a href="/creatorform">Creators</a>
              </li>
            </ul>
          </div>
          <div className="Links">
            <ul>
              <li style={{ fontWeight: "700" }}>COMPANY</li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
              <a href="/career">Career</a></li>
              <li>
                <a href="/contactus">ContactUs</a>
              </li>
              <li>
                <a href="/work">Our Work</a>
              </li>
            </ul>
          </div>
          <div className="Links">
            <ul>
              <li style={{ fontWeight: "700" }}>RESOURCES</li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/faqs">Faqs</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
            </ul>
          </div>
          <div className="Links">
            <ul>
              <li style={{ fontWeight: "700" }}>SOCIAL MEDIA</li>
              <li>
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ padding: "0 0.5rem" }}
                />
                <a
                  href="https://www.instagram.com/collabadda/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ padding: "0 0.5rem" }}
                />
                <a
                  href="https://www.linkedin.com/company/collabadda/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LINKEDIN
                </a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ padding: "0 0.5rem" }}
                />
                <a
                  href="https://whatsapp.com/channel/0029Va9KvVi5fM5d3yz4DO2v"
                  target="_blank"
                  rel="noreferrer"
                >
                  WHATSAPP CHANNEL
                </a>
              </li>
            </ul>
          </div>
          <div className="Links">
            <ul>
              <li style={{ fontWeight: "700", width: "150%" }}>
                JOIN OUR COMMUNITY
              </li>
              <li>
                <a
                  href="https://t.me/joinchat/QuuUtxm_Ao0FuB7RK2bkzA"
                  target="_blank"
                  rel="noreferrer"
                >
                  TELEGRAM CHANNEL
                </a>
              </li>
              <li>
                <a
                  href="https://whatsapp.com/channel/0029Va9KvVi5fM5d3yz4DO2v"
                  target="_blank"
                  rel="noreferrer"
                >
                  WHATSAPP CHANNEL
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-3">
        <p>©2023 Influencer Limited. All rights reserved.</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
a{
  cursor:pointer;
}
// overflow-x:hidden;
display:flex;
flex-direction:column;
height:90vh;
width:100vw;
.footer-1{
  text-align:center;
  margin:auto;
  background-color:rgb(89, 60, 143);
  height:40%;
  padding:3rem;
  color:white;
  width:80%;
  h3{
    font-size:1.6rem;
    text-transform:uppercase;
    font-weight:600;
  }
  p{
    font-size:1.1rem;
    margin:1.7rem;
    font-weight:400;
    line-height:0.5rem;
  }
  button{
    background-color:#fff;
    color:rgb(89,60,143);
    height:2.5rem;
    width:10rem;
    font-size:1rem;
    font-weight:700;
  }

  @media screen and (max-width: 768px) {
    h3{
      font-size:1.3rem;
    }
    p{
      font-size:1rem;
      line-height:1rem;
      margin:1rem;
    }
    button{
      height:1.5rem;
      font-size:0.9rem;
      width:8rem;
    }
    height:30%;
    width:90%;
    padding:1rem;
  }
  @media screen and (max-width: 500px){
    h3{
      font-size:1rem;
    }
  }
}

.footer-2{
  height:60%;
  background-color:white;
  display:flex;
  color:#667085;
  margin:4rem auto 0rem auto;
    .company-info{
      width:30%;
      display:flex;
      margin-left:-5.9rem;
      .logo{
        height:10rem;
        width:18rem;
        margin-top:-4.6rem;
      }
          img{
              height:4.5rem;
              width:4.5rem;
              margin-top:-2rem;
              }

      }

      .links-info{
        display:flex;
        margin-left:16rem;
      }
    .securedImages{
      display:flex;
      margin-left:3rem;
      width:40%;
      // background-color:red;
      justify-content:space-between;
      div{
        display:flex;
        
      }
      span{
        font-size:0.45rem;
        padding-left:0.2rem;
        font-weight:600;
      }
      @media screen and (max-width: 768px) {
        margin-left:-5rem;
      }
    }
    .Links{
      margin-left:0.6rem;
      margin-right:2rem;
        li{
          margin:0 0.5rem 1.3rem 0.5rem;
          font-weight:500;
          width:130%;
        }
        FontAwesomeIcon{
          margin-left:0.5rem;
        }

        NavLink,a{
          color:#667085;
        }
      }
      @media screen and (max-width: 1030px) {
        .links-info{
          margin-left:2rem;
        }
      }
      @media screen and (max-width: 768px) {
        flex-direction:column;
        .Links{
          margin:0.7rem 0 0 -20rem;
          li{
            margin:0 0 0.3rem 0;
            font-size:0.9rem;
          }
        }
        .links-info{
          flex-direction:column;
         
        }
        .company-info{
          margin-left:-6rem;
          img{
            height:5rem;
            width:5rem;
          }
        }
      }
      @media (max-width:500px){
        .company-info{
          margin-left:-12rem;
          img{
            height:3rem;
            width:3rem;
          }
        }
      }
}

.footer-3{
  background-color:#292e32;
  height:20%;
  width:100%;
  text-slign:center;
  justify-content:center;
  align-items:center;
  display:flex;
  color:white;
  @media screen and (max-width: 768px) {
    margin-top:47%;
    p{
      font-size:1rem;
    }
}
`;
export default Footer;
