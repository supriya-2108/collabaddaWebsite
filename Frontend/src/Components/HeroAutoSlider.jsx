import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import Slider from 'react-slick';

const HeroAutoSlider = () => {
  const row1 = [
    "https://youtu.be/ZOQiUvSeLGM",
    "videos/header_video_2.mp4",
    "videos/header_video_10_ceb_s.mp4",
    "videos/header_video_3.mp4",
    "videos/gif_3.mp4",
    "videos/header_video_7.mp4",
    "videos/header_video_9_ceb_s.mp4",
    // "videos/header_video_11.mp4",
  ];

  return (
    <AppContainer>
       <VideoContainer>
      {row1.map((videoSource, index) => (
          <Video key={index} autoPlay loop muted>
            <source src={videoSource} type="video/mp4" />
          </Video>
        ))}
      </VideoContainer> 
      
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width:80vw;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    overflow-x: hidden !important;
  }
  `;
const VideoContainer = styled.div`
width: 10%; /* Adjust the width as needed */
margin:1px;
display:flex;
`;

const Video = styled.video`
width: 100%;
margin:1rem;
object-fit: cover;
border-radius: 10%;
height: auto; /* This ensures the video maintains its aspect ratio */
pointer-events: none; /* Disable mouse events on the video */
`;



export default HeroAutoSlider;