import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
const OurMileStones = () => {
  useEffect(() => {
    // Initialize AOS library
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated",
    });
  }, []);
  const img = "Images/milestone-1-1.png";
  const img2 = "Images/milestone-2-1.png";
  const img3 = "Images/milestone-3-1.png";
  const img4 = "Images/milestone-4-1.png";
  return (
    <Wrapper>
      <h2>Our Milestones</h2>
      <div data-aos="fade-right" data-aos-offset="250" className="firstLeft">
        <div style={{display:"flex"}}>
          <div style={{marginTop:"1.5rem"}}>
            <h3>2020</h3>
            <p>
              Collabadda began its journey with a team of 15 passionate
              individuals.
            </p>
          </div>
          <img src={img} alt="" draggable={false} />
        </div>
      </div>
      <div data-aos="fade-left" data-aos-offset="250" className="firstRight">
      <div style={{display:"flex"}}>
        <img src={img2} alt=""  draggable={false}/>
      <div style={{marginTop:"1.5rem"}}>
        <h3>2021</h3>
        <p>
          We celebrated our growth as we collaborated with 60,000 influencers,
          making a significant impact for the brand Rizzle
        </p>
        </div>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-offset="250" className="secondLeft">
      <div style={{display:"flex"}}>
      <div style={{marginTop:"0.8rem"}}>
        <h3>2022</h3>
        <p>
          In our commitment to expansion, we opened our office in Gurugram's
          Sector 67, with a dedicated team of 6 members and a dynamic force of
          40 interns.
        </p>
      </div>
      <img src={img3} alt="" draggable={false}/>
      </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="250"
        className="secondRight"
        style={{ marginBottom: "10rem" }}
      ><div style={{display:"flex"}}>
        <img src={img4} alt="" draggable={false}/>
      <div style={{marginTop:"1.5rem"}}>
        <h3>2023</h3>
        <p>
          We achieved remarkable success by serving esteemed clients like
          Wildstone and Sugar, cementing our reputation as a trusted marketing
          agency.
        </p>
      </div>
      </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  justify-content: center;
  align-items: center;
  // overflow-x:hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 150vh;
 
  h2 {
    margin-top: 12rem;
    text-transform: uppercase;
    word-spacing: 0.5rem;
    
  }
  
  @media(max-width:1030px){
    height:110vh;
    h2{
      margin-top:12rem;
    }
   }
   @media(max-width:840px){
    height:100vh;
   }
  @media(max-width:500px){
   height:90vh;
   h2{
    margin-top:18rem;
   }
   margin-bottom:-6%;
  }
  @media(max-width:380px){
    height:120vh;
    h2{
     margin-top:18rem;
    }
    margin-bottom:-6%;
   }
 
}

  .firstLeft,
  .secondLeft,
  .firstRight,
  .secondRight {
    position: relative;
    height: 15rem;
    width: 30rem;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 0 1rem;
    flex-direction: column;
    h3 {
      color: rgba(89, 60, 143, 1);
      font-size: 1.8rem;
      font-weight: 500;
      text-align: center;
    }
    p {
      font-size: 0.9rem;
      text-align: center;
      color: black;
    }
    @media(max-width:850px){
      width:28rem;
    }
    @media(max-width:500px){
      width:15rem;
      img{
        height:8rem;
      }
      h3{margin-top:-10%;
        font-size:1rem;
      }
      p{
        width:100%;
        font-size:0.6rem;
      }
    }

  }

  .firstLeft{
    top: 5rem;
    left: -12rem;
   
    @media(max-width:850px){
      padding-left:2rem;
    }
    @media(max-width:500px){
      padding-left:2rem;
      left:-20%;
      top:0%;
    }
    @media(max-width:380px){
      left:-25%;
    }
  }
  .secondLeft{
    top:4.9rem;
    left:-11.9rem;
    @media(max-width:1030px){
      top:0.3%;
    }
    @media(max-width:850px){
      padding-left:2rem;
     top:-4.8rem;
     left:-11.9rem; 
    }
    @media(max-width:500px){
      padding-left:2rem;
     top:-5.5rem;
     left:-19.6%; 
    }
    @media(max-width:380px){
      left:-24.8%;
      top:-10.5%;
    }
  }

  .firstRight {
    top: 5rem;
    right: -15rem;
    @media(max-width:1030px){
      top:3.3%;
    }
    @media(max-width:850px){
      right:-13rem;
      top:0rem;
      padding-right:3rem;
    }
    @media(max-width:500px){
      right:-27.5%;
      top:0rem;
      padding-right:3rem;
    }
    @media(max-width:380px){
      right:-27%;
      top:0rem;
    }
  }
  .secondRight{
    top:4.75rem;
    right:-15rem;
    @media(max-width:1030px){
      top:-3%;
    }
    @media(max-width:850px){
      right:-13rem;
      top:-9.3rem;
      padding-right:3rem;
    }
    @media(max-width:500px){
      right:-27.8%;
      top:-19.8%;
      padding-right:3rem;
    }
    @media(max-width:380px){
      top:-19.5%;
      right:-27.2%;
    }
  }

  /* Hide elements when scrolling up */
  [data-aos="fade-up"] {
    opacity: 0;
  }
`;
export default OurMileStones;
