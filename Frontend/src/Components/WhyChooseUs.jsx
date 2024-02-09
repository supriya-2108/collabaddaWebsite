import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
const bg_img="Images/form_bg_img.png";
const WhyChooseUs = () => {
  const img = "Images/choose_us_img.png";
  useEffect(() => {
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated",
    });
  }, []);
  return (
    <OuterWrapper>
    <Wrapper>
      <h2>Sounds Familiar? Then this is why you need us</h2>
      <p className="headerPara" style={{ fontWeight: "500", marginTop: "-1rem" }}>
        Innovative Strategies, Diverse Influencer Network, Data-Driven Approach,
        Result-Oriented Solutions, Effective Campaign Execution and
        Comprehensive Service Suite
      </p>
      <img src={img} alt="" />
      <div data-aos="fade-right" data-aos-offset="250" data-aos-once="true" className="firstLeft">
        <h4>Innovative Strategies</h4>
        <p>
          Stand out with creative and innovative<br/>
           marketing
          <br />
          approaches that captivate audiences.
        </p>
      </div>
       <div data-aos="fade-right" data-aos-offset="250" data-aos-once="true" className="secondLeft">
        <h4>Diverse Influencer Network</h4>
        <p>Access a varied range of influencers,<br/>from nano to mega.</p>
      </div>
     <div data-aos="fade-right" data-aos-offset="250" data-aos-once="true" className="thirdLeft">
        <h4>Data-Driven Approach</h4>
        <p>
          Decisions backed by data for tailored, effective marketing
          <br />
          campaigns.
        </p>
      </div>
      <div data-aos="fade-left" data-aos-offset="250" data-aos-once="true" className="forthLeft">
        <h4>Result-Oriented Solutions</h4>
        <p>
          Commitment to delivering measurable<br/> results<br/> aligned with
          your business goals.
        </p>
      </div>
      <div data-aos="fade-left" data-aos-offset="250" data-aos-once="true" className="fifthLeft">
        <h4>Effective Campaign Execution</h4>
        <p>
          Cohesive management for a strong online
          <br />
          presence and genuine connections.
        </p>
      </div>
      <div data-aos="fade-left" data-aos-offset="250" data-aos-once="true" className="sixthLeft">
        <h4>Comprehensive Service Suite</h4>
        <p>All your digital marketing needs are met under one roof.</p>
      </div>
    </Wrapper>
    
      
    </OuterWrapper>
  );
};

const OuterWrapper=styled.section`
width:110vw;
height:100vh;
padding-top:0.3rem;
margin-bottom:8rem;
background-image:url(${bg_img});
@media (max-width: 1050px) {
  height:60vh;
}
@media (max-width: 850px) {
  height:80vh;
}
@media (max-width: 450px) {
  height:60vh;
}
@media (max-width: 380px) {
  height:70vh;
}
`;


const Wrapper = styled.section`
  height: 80vh;
  width: 100vw;
  margin: 3rem 0 12rem 0;
  align-items: center;
  overflow-x:hidden
  justify-content: center;
  h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.7rem;
    color: rgb(89, 60, 143);
    margin-top: 4rem;
    word-spacing: 0.3rem;
  }
  p{
    margin:auto;
    width:90%;
    // padding:0 1rem;
  }

  img {
    height: 100%;
    display: flex;
    margin: 2rem auto;

    @media(max-width:1024px){
      height:60%;
      margin-left:-5rem;
    }
    @media (max-width: 850px) {
      height:55%;
      margin-left:-3rem;
    }
    
    @media (max-width: 500px) {
     height:45%;
     margin-left:0rem;
    }
    @media (max-width: 432px) {
      height:35%;
      margin-left:-1.5rem;
      padding:0.5rem;
       }
    @media (max-width: 380px) {
    height:45%;
      margin-left:-2.3rem;
     }
     @media (max-width: 377px) {
      height:45%;
        margin-left:-2.5rem;
       }
  }
  h4 {
    text-align: center;
    color: rgb(89, 60, 143);
  }
  p {
    text-align: center;
    margin:auto;
  }
  .firstLeft {
    margin-top: -30rem;
    position: relative;
    width: 30%;
    top: -2rem;
    left: 11rem;
    @media (max-width: 1050px) {
      p{
        font-size:1rem;
      }
      width:30%;
      top:-3.5rem;
      left:11rem;
    }
    @media (max-width: 850px) {
      top:-2rem;
      left:12rem;
      width:30%;
    }
    @media (max-width: 1290px){
      left:0rem;
    }
    @media (max-width: 768px) {
      p{
        font-size:0.35rem;
      }
      h4{
        font-size:0.45rem;
        
      }
      top:5rem;
      left:2rem;
      width:30%;
    }
    @media (max-width: 433px) {
      top:15rem;
      left:-0.5rem;
    }
   
  }
  .secondLeft {
    top: 2.7rem;
    left: -26rem;
    position: relative; 
    @media (max-width: 1050px) {
      p{
        font-size:1rem;
      }
      width:25%;
      top:1.7rem;
      left:-0.5rem;
    }
    @media (max-width: 850px) {
      top:0.6rem;
    }
    @media (max-width: 768px) {
      p{
        font-size:0.35rem;
        width:90%;
        margin:auto;
      }
      h4{
        font-size:0.45rem;
      }
      top:11rem;
      left:0rem;
      width:25%;
    }
    @media (max-width: 432px) {
      top:17rem;
      left:-0.2rem;
    }
  }
  .thirdLeft {
    top: 8.3rem;
    left: -24rem;
    position: relative;
    @media (max-width: 1050px) {
      p{
        font-size:1rem;
      }
      top:6.5rem;
      width:30%;
      left:2.8rem;
    }
    @media (max-width: 850px) {
      top:4rem;
      left:2rem;
    }
    @media (max-width: 768px) {
      p{
        font-size:0.35rem;
      }
      h4{
        font-size:0.45rem;
      }
      top:17rem;
      left:1rem;
      width:25%;
    }
    @media (max-width: 432px) {
      top:19rem;
      left:1rem;
    }
  }
  .forthLeft {
    top: -15.7rem;
    left: 22rem;
    position: relative; @media (max-width: 1050px) {
      p{
        font-size:1rem;
      }
      width:30%;
      top:-20.5rem;
      left:43.5rem;
    }
    @media (max-width: 850px) {
      top:-23rem;
      left:37rem;
      width:28%;
      padding-right:1.5rem;
    }
    @media (max-width: 768px) {
      p{
        font-size:0.35rem;
      }
      h4{
        font-size:0.45rem;
      }
      top:-1rem;
      left:28rem;
      width:30%;
    }
    @media (max-width: 500px) {
      top:8rem;
      width:35%;
      left:16.5rem;
     }
     @media (max-width: 432px) {
     top:9rem;
     left:16.5rem;
       }
       @media (max-width: 377px) {
        top:8rem;
        left:17.5rem;
         }
  }
  .fifthLeft {
    top: -11.25rem;
    left: 26rem;
    position: relative;
     @media (max-width: 1050px) {
      p{
        font-size:1rem;
      }
      width:20%;
      top:-15rem;
      left:48rem;
    }
    @media (max-width: 850px) {
      top:-21rem;
      left:39rem;
      width:22%;
    }
    @media (max-width: 768px) {
      p{
        font-size:0.35rem;
      }
      h4{
        font-size:0.45rem;
      }
      top:5.5rem;
      left:33rem;
      width:20%;
    }
    @media (max-width: 500px) {
     top:10rem;
     }
     @media (max-width: 432px) {
     top:11rem;
     left:19rem;
       }
       @media (max-width: 377px) {
        top:9.5rem;
        left:19rem;
         }
  }
  .sixthLeft {
    top: -5.55rem;
    left: 23rem;
    position: relative;
    @media (max-width: 1050px) {
      p{
        font-size:1rem;
      }
      width:20%;
      top:-12.5rem;
      left:44rem;
    }
    @media (max-width: 850px) {
      top:-19.5rem;
      left:35rem;
      width:20%;
    }
    @media (max-width: 768px) {
      p{
        font-size:0.35rem;
      }
      h4{
        font-size:0.45rem;
      }
      top:11.5rem;
      left:32rem;
      width:20%;
    }
    @media (max-width: 432px) {
      top:12rem;
      left:17rem;
       }
       @media (max-width: 377px) {
        top:11rem;
        left:17rem;
         }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1rem;
      word-spacing: 0rem;
      padding: 0 auto;
    }
    .headerPara{
      font-size:0.7rem;
    }
    margin: 3rem 0 0rem 0;
  }
  @media (max-width: 450px) {
    h2 {
      font-size: 1.1rem;
      word-spacing: 0rem;
      padding: 0 2rem;
    }
    p{
      font-size:1rem;
    }
  }
`;

export default WhyChooseUs;
