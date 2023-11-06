import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Buttons";

const HeroSection = () => {
  

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <h1 className="intro-data">BEST INFLUENCER MARKETING AGENCY IN INDIA </h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, ..</p>
            <NavLink style={{marginLeft:"30px"}}>
              <Button>Brands</Button>
            </NavLink>
        <span style={{color:"white"}}>1278o</span>
            <NavLink>
              <Button>Creators</Button>
            </NavLink>
           
          </div>
          <div className="hero-section-image">
            <figure>
              <img
                src="Images/hero-img.png"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding:4rem;

  .hero-section-data {
    p {
      margin: 2rem 2rem;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      font-size:2.8rem;
      padding-left:30px
    }
    
   
    .intro-data {
      margin-bottom: 30px;
      margin-top:40px;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .img-style {
    width: 100%;
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

export default HeroSection;