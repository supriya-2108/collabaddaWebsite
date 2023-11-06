import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Reviews = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);


  return(
    <SliderContainer>
        <h2>TRUSTED BY LEADERS</h2>
    <Slider style={{ transform: `translateX(-${activeSlide * 50}%)` }}>
      <Slide>
        <Card>
        <Logo src="Images/WhatsApp Image 2023-11-02 at 10.12.46 AM.jpeg" alt="Logo" />
      <CompanyName>BA</CompanyName>
      <Review>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Review>
        </Card>
        <Card>
        <Logo src="Images/WhatsApp Image 2023-11-02 at 10.12.47 AM.jpeg" alt="Logo" />
      <CompanyName>RIZZLE</CompanyName>
      <Review>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Review>
        </Card>
        <Card>
        <Logo src="Images/WhatsApp Image 2023-11-02 at 10.12.48 AM.jpeg" alt="Logo" />
      <CompanyName>T</CompanyName>
      <Review>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Review>
        </Card>
      </Slide>
      <Slide>
      <Card>
        <Logo src="Images/WhatsApp Image 2023-11-02 at 10.12.46 AM (2).jpeg" alt="Logo" />
      <CompanyName>BA</CompanyName>
      <Review>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."</Review>
        </Card>
        <Card>
        <Logo src="Images/WhatsApp Image 2023-11-02 at 10.12.46 AM (1).jpeg" alt="Logo" />
      <CompanyName>ABC</CompanyName>
      <Review>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."</Review>
        </Card>
        <Card>
        <Logo src="Images/WhatsApp Image 2023-11-02 at 10.12.46 AM (3).jpeg" alt="Logo" />
      <CompanyName>ABC</CompanyName>
      <Review>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."</Review>
        </Card>
      </Slide>
    </Slider>
    <div style={{display:"flex",justifyContent:"center"}}>
      {
            [0, 1].map((index) => (
                <SlideIndicator
                  key={index}
                  active={index === activeSlide}
                  onClick={() => setActiveSlide(index)} style={{height:"2px",width:"2px"}}
                />))
      } 
    </div>
  </SliderContainer>
);
};

const SliderContainer = styled.div`
  width: 100vw;
  height:70vh;
  margin: 100px auto;
  overflow: hidden;
  position: relative;
  padding:25px
`;

const Slider = styled.div`
  display: flex;
  
  width: 200%; /* 2 slides, each taking 50% width */
  animation: slide 5s infinite;
`;

const Slide = styled.div`
  flex: 0 0 50%; /* 2 slides, each taking 50% width */
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  flex: 0 0 30%; /* 3 cards, each taking 30% width */
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
`;

const SlideIndicator = styled.div`
  width: 1px;
  display:flex;
  height: 5px;
  background: #888;
  border-radius: 50%;
  justify-content:"center";
  text-align:"center";
  margin: 10px 5px;
  cursor: pointer;
  transition: background 0.3s;
  border: 1px solid #ccc;
  padding: 5px;
//   margin: 5px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${({ active }) =>
    active &&
    `
    background: #333;
  `}
`;



const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const CompanyName = styled.h2`
  margin-top:-37px;
  margin-left:-180px;
  font-size:25px;
  color:#593C8F
`;

const Review = styled.p`
  font-style: italic;
`;



export default Reviews
