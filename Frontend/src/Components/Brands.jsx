import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const Brands = ({width,show}) => {
  const row1 = [
    "Images/trell_logo.jpg",
    "Images/sugar_logo.png",
    "Images/TOI_logo.jpg",
    "Images/wild_stone_logo.jpg",
    "Images/amazon_logo.png",
    "Images/V_mart_logo.jpg",
    "Images/zepto_logo.jpg",
    "Images/Ban_lab_logo.png",
    "Images/chingari_logo.jpg",
    "Images/poker_bazi_logo.png",
    "Images/NM_logo.png",
    "Images/secret .jpeg",
    "Images/code_logo.png",
    "Images/garima_aggarbati.jpg",
    "Images/sony_musiclogo.jpg"
  ];

  const row2 = [
    "Images/rigi_logo.webp",
    "Images/creta_class_logo.png",
    "Images/nveda_logo.png",
    "Images/wakao_logo.jpg",
    "Images/zedBlackAggarbati.png",
    "Images/nutine_life.jpeg",
    "Images/ss_logo.webp",
    "Images/rizzle_logo.jpg",
    "Images/theoly_logo.png",
    "Images/keshmax_logo.jpg",
    "Images/BA_logo.png",
    "Images/fireside_logo.png",
    "Images/faso_logo.png",
    "Images/oziva_logo.webp",
  ];

  return (
    <AppContainer style={{width:width}}>
      <Wrapper>
        <h2>OUR CLIENTS</h2>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 70vh;
  color: #000000;
  margin: 0;
  margin-top:-7rem;
  display: flex;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1030px) {
    height:40vh;
  }
  @media screen and (max-width: 768px) {
   h2{
    font-size:1.5rem;
   }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    overflow-x: hidden !important;
  }
  @media (max-width: 768px) {
    height:40vh;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );

  @media(max-width:770px){
    margin-top:-1.4rem;
    margin-bottom:1rem;
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
  justify-content: space-around;
  white-space: nowrap;
  animation: ${scrollX} 15s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 8vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: clamp(7rem, 1rem + 8vmin, 10rem);
    padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export default Brands;