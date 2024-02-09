import React, { useEffect, useRef, useState, useCallback } from "react";
import styled, { keyframes, css } from "styled-components";
import imageHeader from "./instaheader.png";
import imageFooter from "./instafooter.png";

const InstagramCarousel = () => {
  const videoRefs = useRef([]);
  const phoneRef = useRef();
  const row1 = [
    "Images/gif_1.gif",
    "Images/gif_2.gif",
    "Images/gif_3.gif",
    "Images/gif_4.gif",
    "Images/gif_5.gif"
  ];
  const video_cover = "videos/movie_cover.mp4";
  const [play, setPlay] = useState(false);

  const startPlaying = (item) => {
    item.forEach((element, index) => {
      element.autoplay = index % 2 === 0;
    });
  };

  useEffect(() => {
    startPlaying(videoRefs.current);
  }, []);

  const [videoIndex, setVideoIndex] = useState(0);
  const delayBetweenVideos = 1000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVideoIndex((prevIndex) => (prevIndex + 1) % row1.length);
    }, delayBetweenVideos);

    return () => clearInterval(intervalId);
  }, [row1, delayBetweenVideos]);
  const videoRef = useRef(null);
  const videoSource = row1[videoIndex];

  return (
    <AppContainer>
      <PhoneContainer ref={phoneRef}>
        <img
          src={imageHeader}
          className="headerImage"
          alt="header"
        />
        <Image src={videoSource}
          ref={videoRef}
          style={{ margin: "-0.18rem 0 0 0.01rem", borderRadius: "0" }}
         alt=""/>
        <img
          src={imageFooter}
          className="bottomImage"
          alt="footer"
        />
      </PhoneContainer>
      <Marquee>
        <MarqueeGroup>
          {row1.map((videoSource, index) => (
            <>
             <Image src={videoSource} style={{height:"13.1rem"}} alt=""/>
            </>
          ))}
        </MarqueeGroup>
        <MarqueeGroup>
          {row1.map((videoSource, index) => (
      
            <Image src={videoSource} style={{height:"13.1rem"}} alt=""/>
          ))}
        </MarqueeGroup>
      </Marquee>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  object-fit: cover;
  color: #000000;
  margin-left: -1rem;
  margin-top: -8rem;
  display: flex;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    overflow-x: hidden !important;
  }
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  margin-left: 10.5rem;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
  @media screen and (max-width: 768px) {
   margin-left:3.5rem;
  }
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  animation: ${scrollX} 10s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const Image = styled.img`
  width: 10.7rem;
  margin: 1rem;
  object-fit: cover;
  border-radius: 1rem;
  height: 12.1rem;
  @media screen and (max-width: 768px) {
    width:7rem;
    height:9.1rem;
  }
`;

const PhoneContainer = styled.div`
  width: 12rem;
  height: 22rem;
  position: relative;
  left: 10rem;
  margin-left: 10px;
  border: 10px solid black;
  border-radius: 36px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);


  .headerImage{
      width: 11rem;
      height: 4rem;
      margin-left:-0.1rem;
      border-radius: 20px 20px 0 0;
      @media screen and (max-width: 768px) {
        width:7rem;
        height:2rem;
      // borderRadius: 20px 20px 0 0;
      }
    }
  
    .bottomImage{
        width: 11rem;
        height: 4.8rem;
        border-radius: 0 0 20px 20px;
        margin-top: -0.2rem;
        @media screen and (max-width: 768px) {
          width:7rem;
          margin-top: -0.1rem;
          height:2.6rem;
        }
    }
  
  @media screen and (max-width: 768px) {
    width:8rem;
    height:15rem;
    left:3rem;
    // margin-left:5px;
  }
`;

export default InstagramCarousel;
