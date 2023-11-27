/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Buttons";
import { displayImageArray } from "./Images";
import image from '../public/background-img.png'
import { useEffect, useState,useRef } from "react";
// import video from './videos/header2_video.mp4';
const HeroSection = () => {
  const videos=["videos/header1_video.mp4","videos/header2_video.mp4","videos/header3_video.mp4","videos/header4_video.mp4","videos/header5_video.mp4"];
  const [videoIndex, setVideoIndex] = useState(0);
  const delayBetweenVideos = 1000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, delayBetweenVideos);

    return () => clearInterval(intervalId);
  }, [videos, delayBetweenVideos]);
  const videoRef = useRef(null);
  const videoSource = videos[videoIndex];
  
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const handlePlayPauseToggle = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };
  // Type Writer Effect
  const headings=["BesT MARKETING COMPANY","Influencer Marketing","Meme Marketing","Twitter Services"];
  const [heading,setHeading]=useState('');
  let index=1;
  let inc=0;
  let inc1=0

  const showHeadings=()=>{
      let newTitle=headings[inc].slice(0,index);
      setHeading(newTitle.toUpperCase());
      if(index>headings[inc].length){
        if(inc!==headings.length-1){
         inc++;
        }
         else{
           inc=0;
         }
         index=1;
      }
      else{
       index++
      }
      setTimeout(()=>{showHeadings()},500);

    }
       
  const [imageDisplay,setImageDisplay]=useState(displayImageArray[0])
  const showImages=()=>{
          if(inc1!==displayImageArray.length){
            setImageDisplay([displayImageArray[inc1++]]);
          }
          else{
            inc1=0;
          }
          setTimeout(() => {
            showImages()
          }, 3000);
  }

  useEffect(()=>{showImages()},[]);
  useEffect(()=>{showHeadings()},[])

  return (
    <Wrapper style={{backgroundImage:`url(${image})`}}>
      <div className="container">
        <div className="grid-1 grid-two-column">
          <div className="hero-section-data">
            <h1 className="intro-data">{heading}</h1>
            <p>Elevate Indian brands to global prominence, setting a benchmark in every sector that others aspire to reach.</p>
            <NavLink to="/contactus" style={{marginLeft:"30px"}}>
              <Button>Brands</Button>
            </NavLink>
              
            <NavLink to="/creatorform" style={{marginLeft:"30px"}}>
              <Button>Creators</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <MobileFrame>
          <video width="520" height="540" className="video"  autoPlay muted key={videoSource} ref={videoRef}>
               <source src={videoSource} type="video/mp4"/>
            </video>
            {/* <div className="video-controls" onClick={handlePlayPauseToggle}>
              {isVideoPlaying ? (
                <button className="control pause-button">&#9616;&#9616;</button>
              ) : (
                <button className="control play-button">&#9654;</button>
              )}
            </div> */}
            </MobileFrame>

            <div className="Image-Display">
              {/* {images.map((img)=>{ */}
              <MobileFrame>
                 <img src={imageDisplay}  alt="campaign display"/>
              {/* })} */}
              </MobileFrame>
            </div>
            </div>
            
          
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 4rem 4rem;
  overflow-x: hidden !important;
  .grid-1{
    gap:0
  }
  .hero-section-data {
    margin:3rem 0 0  0rem;
    p {
      margin: -2rem 2rem 2rem 2rem;
    }

    
    .intro-data {
      margin: 4rem 0 3rem 0;
    }
  }
  .hero-section-image {
    margin:0 auto;
    // margin-right:1rem;
    display:flex;
    flex-direction:row;
  gap:0
  }

  .video {
    width:100%;
    margin-top:-2rem;
  }

  .control{
    margin-left:32rem;
    margin-top:2rem;
  }
  .video-controls {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none; /* Initially hide the controls */
    cursor: pointer;
  }

  .video-controls button {
    background-color: #593C8F;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    outline: none;
  }

 

  .video:hover + .video-controls,
  .video-controls:hover {
    display: block; /* Show controls on hover */
  }

.Image-Display{
  width:400px;
  height:400px;
  margin-top:4rem;
}

.Image-Display img{
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    overflow-x: hidden !important;

    .grid {
      gap: 7rem;
    }
    padding:0rem;

    .intro-data{
      font-size:1.6rem;
      font-weight:800;
      padding-left:1.5rem;
    }
    p{
      margin:-2rem 0 0 0;
    }
  }

`;
const MobileFrame = styled.div`
  // position: relative;
  width: 280px; /* Set the width of your mobile frame */
  height: 500px; /* Set the height of your mobile frame */
  border: 16px solid #333; /* Adjust the border color and thickness */
  border-radius: 36px; /* Adjust the border radius to round the corners */
  overflow: hidden; /* Hide content that overflows the frame */
  background: #f1f1f1; /* Set the background color of the frame */
  margin: 0 1rem; /* Center the frame horizontally */

  @media (max-width: 768px) {
    width: 90%; /* Adjust for smaller screens */
    height: auto;
  }
`;

export default HeroSection;