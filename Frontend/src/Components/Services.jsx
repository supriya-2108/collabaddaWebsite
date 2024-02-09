import React, { useEffect, useRef, useState } from "react";
import styled,{keyframes,css} from "styled-components";
const Services = () => {
  const serviceList = [
    {
      title: "Brand Endorsement",
      img: "Images/icon_1.svg",
      description:
        "In the ever-evolving landscape of digital presence, strategy is the compass that guides brands towards success. ",
    },
    {
      title: "Influencer Marketing",
      img: "Images/icon_2.svg",
      description: `Discover the full spectrum of influencer potential with Collabadda's Nano to Mega Influencer range. `,
    },
    {
      title: "Meme Marketing",
      img: "Images/icon_3.svg",
      description:
        "Embrace the humor-packed world of Meme Marketing with Collabadda. .",
    },
    {
      title: "App Development",
      img: "Images/icon_4.svg",
      description:
        " In the dynamic realm of technology, where user experiences shape brand perceptions, having a cutting-edge mobile app is non-negotiable. ",
    },
    {
      title: "Web Development",
      img: "Images/icon_5.svg",
      description:
        "In the ever-evolving digital landscape, a compelling online presence is your gateway to success. ",
    },
    {
      title: "Social Media",
      img: "Images/icon_6.svg",
      description: ` Entrust Collabadda with your Social Media Management. `,
    },
    {
      title: "Facebook ads",
      img: "Images/icon_7.svg",
      description: `Elevate your brand's presence on social media with our targeted platform ads. `,
    },
  ];


  return (
    <OuterWrapper>
    <h2>Services We Offer</h2>
      <Wrapper>
      <Marquee>
        <MarqueeGroup>
          {serviceList.map((item, index) => (
          <div
            key={index}
            className="innerdiv"
            style={{borderRadius:"20px"}}
          >
            <div
              className="innercard"
              style={{ display: "flex", flexDirection: "column", }}
            >
              <div style={{ height: "30%" ,margin:"0.5rem 0.5rem 1rem 0.5rem"}}>
                <img src={item.img} alt="index" />
              </div>
              <div style={{ height: "70%" }}>
                <h4>{item.title}</h4>
                <p style={{marginTop:"0.5rem"}}>{item.description}</p>
              </div>
            </div>
          </div>
          ))}
        </MarqueeGroup>
        <MarqueeGroup>
          {serviceList.map((item, index) => (
             <div
             key={index}
             className="innerdiv"
             style={{borderRadius:"20px"}}
           >
             <div
               className="innercard"
             >
               <div style={{ height: "30%" ,margin:"0.5rem 0.5rem 1rem 0.5rem"}}>
                 <img src={item.img} alt="index" />
               </div>
               <div style={{ height: "70%" }}>
                 <h4>{item.title}</h4>
                 <p style={{marginTop:"0.6rem"}}>{item.description}</p>
               </div>
             </div>
           </div>
          ))}
        </MarqueeGroup>
      </Marquee>
      </Wrapper>
    </OuterWrapper>
  );
};

const OuterWrapper=styled.section`
height:55vh;
h2{
  text-transform:uppercase;
  fontSize:1.8rem;
  wordSpacing:0.5rem;
}
@media (max-width: 1030px) {
  height:35vh;
}
@media (max-width: 768px) {
 h2{
  font-size:1.5rem;
 }
  }
`

const Wrapper = styled.section`
display: flex;

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  overflow-x: hidden !important;
}
  .innerdiv {/* Adjust the width as needed and consider margins */
    height: 18rem;
    width:16rem;
    margin: 0.5rem; /* Add margin between elements */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
  }
  .innercard{
    text-align: center;
    justify-content: center;
    align-items: center;
    display:flex;
    padding:1rem 0;
    flex-direction:column;
    img {
      width: 3rem;
      height: 3rem;
      margin-top:1rem;
      text-align:center;
      justify-content:center;
    }
    p {
      font-size: 0.95rem;
      padding:0 0.5rem;
      text-align:center;
    }
    h4 {
      font-size: 1rem;
      text-transform:uppercase;
      padding:0 0.5rem;
    }
  }
  }
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  // margin-left: 10.5rem;
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
  animation: ${scrollX} 20s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

export default Services;
