import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import AOS from "aos";
import "aos/dist/aos.css";
const bg_img="Images/form_bg_img.png";
const line="Images/horizontal_line.png";
const Image = () => {
  useEffect(() => {
    // Initialize AOS library
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated",
    });
  }, []);
  return (
    <OuterWrapper>
    <Wrapper>
      <div className='heading'>
        <h2>Why Your Brand Needs a Compeling Story</h2>
        <img src={line} draggable={false} alt=""/>
      </div>
      <div className='numbers'>
        <h3>001</h3>
        <h3>002</h3>
        <h3>003</h3>
      </div>
      <div className='contents'>
        <div className='innerContent' data-aos="fade-up" data-aos-once="true">
          <h4>
            CREATES A UNIQUE BRAND AND MARKET POSITION
          </h4> 
          <p>Crafting a compelling narative sets your brand apart from the competition.<br/>It helps define a unique identity aand establish a distinction position in <br/>the market.</p>
        </div>
        <div  className='innerContent' data-aos="fade-up" data-aos-once="true">
        <h4 >
            CREATES A UNIQUE BRAND AND MARKET POSITION
          </h4> 
          <p>Crafting a compelling narative sets your brand apart from the competition.<br/>It helps define a unique identity aand establish a distinction position in <br/>the market.</p>
        
        </div>
        <div  className='innerContent' data-aos="fade-up" data-aos-once="true">
        <h4>
            CREATES A UNIQUE BRAND AND MARKET POSITION
          </h4> 
          <p>Crafting a compelling narative sets your brand apart from the competition.<br/>It helps define a unique identity aand establish a distinction position in <br/>the market.</p>
        
        </div>
      </div>
    </Wrapper>
    </OuterWrapper>
  )
}
const OuterWrapper=styled.section`

background: radial-gradient(circle at 50% 50%, #e0d2fa, #ffffff);
height:100vh;
padding-top:1rem;
@media(max-width:1030px){
  height:65vh;
}
@media(max-width:768px){
  height:95vh;
}
`;
const Wrapper=styled.section`
margin:2rem 6rem;
display:flex;
margin-bottom:20rem; 
h2,h3,h4{
  color:#593c8f;
}
h2{
  font-size:2.2rem;
  @media (max-width:1270px){
    font-size:1.5rem;
  }
}
.heading{
  margin-top:3rem;
  width:30rem;
  @media (max-width:1220px){
    width:20rem;
  }
  @media (max-width:985px){
    width:15rem;
    img{
      width:15rem;
    }
  }
  @media (max-width:770px){
    margin:1rem auto;
    img{
      width:10rem;
    }
  }
}
.numbers{
  margin:0 11rem 2rem 11rem;
  h3{
    height:15rem;
}
@media (max-width:1200px){
  margin:0 8rem 2rem 8rem; 
}
@media (max-width:985px){
  margin:0 5rem 2rem 5rem;
}

@media (max-width:768px){
margin:auto;
display:none;
h3{
  height:2rem;
}
}

}

.contents{
  flex-direction:column;
  .innerContent{
    height:15rem;
    h4{
      margin-bottom:1rem;
      font-size:1.1rem;
    }
    p{
      font-size:0.9rem;
      font-weight:bold;
    }
    
    @media (max-width:1220px){
      h4{
        font-size:1rem;
        margin-bottom:0.2rem;
      }
      p{
        font-size:0.8rem
      }
    
    }
    @media (max-width:810px){
      h4{
        font-size:0.8rem;
        margin-bottom:0.2rem;
      }
      p{
        font-size:0.6rem
      }
    
    }
    @media (max-width:768px){
      height:7rem;
      padding:0 1rem;
      p{
        padding-right:1.5rem;
      }
    }
  }
}
@media (max-width:768px){
  flex-direction:column;
 img{
   height:80%;
  width:100%;
  margin:0;
  }
  margin:0;
}

`

export default Image
