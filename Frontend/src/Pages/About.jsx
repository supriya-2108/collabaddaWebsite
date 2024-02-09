import React from "react";
import styled from "styled-components";
import MediaCoverage from "../Components/MediaCoverage";
import Brands from "../Components/Brands";
import OurMileStones from "../Components/OurMileStones";
const img = "Images/missionVission.png";
const full_bg_img="Images/bg_img.png";
const MandV = [
  {
    name: "Mission",
    content: `Elevate Indian brands to global prominence,<br/>setting a benchmark in every sector that others aspire to reach.`,
  },
  {
    name: "Vission",
    content: `To become the world's premier marketing agency,<br/> empowering brands to achieve unparalleled success.`,
  },
];
const About = () => {
  return (
    <Wrapper>
      <Heading>
        <p>
          Collabadda is a dynamic team of influencer marketing experts,
          innovative content creators, and astute digital strategists
          collaborating to amplify brand presence and connect with audiences
          worldwide.
        </p>
      </Heading>
      <OurMileStones />
      <div></div>
      <div >
        <h2>OUR VISSION AND MISSION</h2>
        <div className="InnerContent">
          <div className="leftContent">
            {MandV.map((item, index) => {
              return (
                <div
                  className="innerleftcontent"
                  style={{
                    borderBottom:
                      index !== 1 ? "solid 2px rgba(0,0,0,.39)" : "",
                  }}
                >
                  <h4>{item.name}</h4>
                  <p dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              );
            })}
          </div>
          <div>
            <img src={img} alt="MissionAndVission" />
          </div>
        </div>
      </div>
      
      <Brands/>
      <div style={{margin:window.innerWidth>400?"1rem":"2rem",height:"1rem"}}></div>
      <MediaCoverage/> 
      {/* <Team></Team> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
h2{
  @media (max-width:780px){
    font-size:1.3rem;
  }
}
}
  .InnerContent {
    width:90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem auto;
   
    @media (max-width:770px){
      flex-direction:column;
      margin:0 auto;
      img{
        margin-top:-4rem;
        margin-bottom:3rem;
      }
    }
    @media(max-width:500px){
      img{
        height:20rem;
      }
      
    }
   
    .leftContent {
      display: flex;
      margin-right: 16rem;
      flex-direction: column;
      @media (max-width:830px){
        margin-right:10%;
      }
      .innerleftcontent {
        margin: 2rem;
        padding-bottom: 4rem;
        h4 {
          font-size: 1.7rem;
          margin-bottom: 1rem;
          text-tranform: uppercase;
          color: rgb(89, 60, 143);
        }
        p {
          font-size: 1rem;
          font-weight: 500;
        }
       
      }
    }
  }
  .pstyle {
    width: 50%;
    margin-left: 12rem;
    margin-top: 1rem;
  }
  .brands{
    // margin:0;
    // @media(max-width:1030px){
    //   margin:0;
    // }
    // @media(max-width:500px){
    // margin:3rem 0 7rem 0;
    // }

  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .pstyle {
      margin-left: 0;
      width: 100%;
    }
    .container {
      margin-left: 2rem;
    }
  }
`;
const Heading = styled.div`
  margin: auto;
  height: 80vh;
  width: 100vw;
  text-align: center;
  color: white;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  background-image: url(${full_bg_img});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  p {
    color: white;
    width: 60%;
    margin: auto;
    text-transform: uppercase;
    font-size: 1.4rem;
    padding-top: 14%;
    font-weight: 600;
    word-spacing: 0.3rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 3rem 0;
    height:40vh;
    p{
      font-size:1rem;
      padding-top:5%;
      margin:auto;
      width:90%;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export default About;
