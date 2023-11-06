import React from 'react'
import { GlobalStyle } from '../GlobalStyle'
import styled, { keyframes, css } from 'styled-components';
const Brands = () => {
     const row1 = [
        "Images/WhatsApp Image 2023-11-02 at 10.12.44 AM.jpeg",
        "Images/WhatsApp Image 2023-11-02 at 10.12.45 AM (1).jpeg",
        "Images/WhatsApp Image 2023-11-02 at 10.12.45 AM.jpeg",
        "Images/WhatsApp Image 2023-11-02 at 10.12.46 AM (1).jpeg",
        "Images/WhatsApp Image 2023-11-02 at 10.12.46 AM (2).jpeg",
        "Images/WhatsApp Image 2023-11-02 at 10.12.46 AM (3).jpeg",
      ];
    
      const row2 = [
        "Images/WhatsApp Image 2023-11-02 at 10.12.46 AM.jpeg",
        "Images/WhatsApp Image 2023-11-02 at 10.12.47 AM.jpeg",
        "Images/WhatsApp Image 2023-11-02 at 10.12.48 AM.jpeg",
        "Images/WhatsApp Image 2023-11-02 at 10.12.46 AM (1).jpeg",
        "Images/WhatsApp Image 2023-11-02 at 10.12.46 AM (2).jpeg",
        "Images/WhatsApp Image 2023-11-02 at 10.12.46 AM (3).jpeg",
      ];

  return (
         <AppContainer>
      <Wrapper>
        <h2>OUR CLIENTS</h2>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
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
  width: 100vw;
  height: 100vh;
  color: #000000;
  margin-top:-10rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
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
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
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
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;


export default Brands;