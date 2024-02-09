import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Reviews = () => {

  const BrandsReviews = [
    {
      Reviewer: "Trell",
      Logo: "Images/trell_logo.jpg",
      Review: ` "We’ve collaborated on several projects, and Collabadda has consistently delivered
        exceptional results. They are one of the best agencies we've worked with for our influencer
        marketing needs. Their expertise in marketing and social commerce is commendable.
        Collabadda's ability to solve complex marketing challenges is truly remarkable. I highly
        recommend their services to anyone seeking top-notch influencer marketing solutions."`,
    },
    {
      Reviewer: "Rizzle",
      Logo: "Images/rizzle_logo.jpg",
      Review: `"Their management of our collaborative work has been incredibly effective and
        efficient. Their professionalism and attention to detail have consistently impressed me,
        making our partnership a seamless and productive experience. I look forward to continuing
        our successful collaboration in the future."`,
    },

    {
      Reviewer: "Secret Temptation",
      Logo: "Images/secret .jpeg",
      Review: `"We are thrilled with the outstanding collaboration facilitated by CollabAdda. The innovative solutions provided by CollabAdda have elevated our marketing strategies to new heights. Their seamless coordination and creative approach to working with influencers and celebrities have left a lasting impression.
      We are grateful for the incredible support and look forward to more successful collaborations with CollabAdda."`,
    },

    {
      Reviewer: "Wild Stone",
      Logo: "Images/wild_stone_logo.jpg",
      Review: `"CollabAdda has truly been a game-changer for our brand. The collaboration experience has been seamless and highly effective. CollabAdda's expertise in connecting us with influencers and managing the collaborative process has been instrumental in the success of our marketing initiatives. We appreciate the dedication and professionalism displayed by CollabAdda, and we eagerly anticipate the next phase of our partnership."`,
    },

    {
      Reviewer: "Code",
      Logo:"Images/code_logo.png",
      Review: `"Our team extends its heartfelt appreciation to CollabAdda for the exceptional collaboration services provided. CollabAdda has been instrumental in orchestrating successful partnerships, bringing creativity and strategic insight to our marketing endeavors. We commend CollabAdda's professionalism, attention to detail, and ability to seamlessly execute collaborations."`,
    },
  ];
  const InfluencersReviews = [
    {
      Reviewer: "Dr Suman Sharma",
      Logo: "",
      Review: ` "CollabAdda has made my influencer journey so much smoother! The flexibility to create my own script is empowering as a mom influencer. They not only value creativity but also maintain open lines of communication, ensuring clarity at every step. Timely payments are the cherry on top. Excited to continue this positive collaboration!"`,
    },
    {
      Reviewer: "Rashi Mittal",
      Logo: "",
      Review: `"CollabAdda stands out in the influencer marketing game! They not only pay on time, which is a relief, but also let influencers be the storytellers. The collaborative process feels genuine, and the transparent approach makes me confident about every campaign. It's great to have a partner like CollabAdda that understands and supports the true essence of influencer marketing."`,
    },
    {
      Reviewer: "Allen",
      Logo: "",
      Review: ` "CollabAdda has been a breath of fresh air in the influencer marketing space. Their approach of allowing influencers to script their content brings out the best in creativity. I've had the freedom to express my artistic side, and the transparent communication on campaign details reassures me throughout. It's a pleasure working with a team that values individuality and transparency."`,
    },
    {
      Reviewer: "Muskan Singh",
      Logo: "",
      Review: `"CollabAdda has been a dream to work with! They respect the art of storytelling and understand that influencers know their audience best. The freedom they give in crafting scripts is unparalleled. Plus, their commitment to transparency ensures that both parties are on the same page throughout the collaboration. Looking forward to more exciting campaigns together!."`,
    },
    {
      Reviewer: "Mohan Yadav",
      Logo: "",
      Review: ` "I've had an amazing experience with CollabAdda! They not only pay promptly but also understand the importance of authenticity in content creation. I appreciate the trust they place in influencers to craft their own scripts, allowing for a more genuine connection with the audience. Transparent communication throughout the campaign is a big plus."`,
    },
    {
      Reviewer: "Prakhar",
      Logo: "",
      Review: `"CollabAdda has been a game-changer for me! They respect the creative process and empower influencers to bring their unique voice to campaigns. Timely payments and open communication make it a pleasure to work with them. They truly understand the dynamics of influencer marketing and make the experience seamless for both parties involved."`,
    },
    {
      Reviewer: "Adil",
      Logo: "",
      Review: `"Working with CollabAdda has been an absolute breeze! They not only pay promptly but also give influencers creative freedom. I appreciate the transparency they maintain throughout the campaign. It's rare to find an agency that trusts influencers to create their own scripts. Kudos to CollabAdda for fostering a genuine collaboration!"`,
    },
  ]
  
  const [showData,setShowData]=useState(BrandsReviews);
  const [activeclass,setActiveClass]=useState(0);
  const ChangeData=()=>{
    setShowData(BrandsReviews);
    setActiveClass(0);
  }
  const ChangeBrands=()=>{
    setShowData(InfluencersReviews);
    setActiveClass(1);
  }

  return (
    <SliderContainer>
      <h2>TRUSTED BY LEADERS</h2>
      <div style={{justifyContent:"center",textAlign:"center"}}>
      <button style={{ marginRight: "0.5rem",backgroundColor:activeclass!==1?"#593C8F":"initial",color:activeclass!==1?"white":"initial"}} onClick={ChangeData}>BRANDS</button>
      <button style={{ marginLeft: "0.5rem" ,backgroundColor:activeclass!==0?"#593C8F":"initial",color:activeclass!==0?"white":"initial"}} onClick={ChangeBrands}>INFLUENCERS</button>
      <hr/>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={window.innerWidth>768?2:1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{ justifyContent: "center", padding: "3rem" }}
      >
        {showData.map((item) => {
          return (
            <SwiperSlide
              style={{
                width: "6rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card>
                <div className="reviewer">
                  {item.Logo!==""?<Logo src={item.Logo} alt="Logo" />:""}
                  <Reviewer>{item.Reviewer}</Reviewer>
                </div>

                <Review>{item.Review}</Review>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100vw;
  height: 85vh;
  // margin: 9rem 0 0 15rem;
  overflow: hidden;
  position: relative;
  padding: 25px;
  @media (max-width: 1030px){
    height: 55vh;
  }
  button{
    height:2rem;
    border-radius:5px;
    padding:0.3rem;
    color:#593C8F;
    border:solid 2px #593C8F;
    font-size:1rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 100vh;
    width: 100vw;
    margin: 10px 10px;
    margin-top: 100px;
    padding: 5px;

    h2 {
      margin-left: 4rem;
      font-size: 1.8rem;
    }
  }
`;

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 1px;
  margin-bottom: 2rem;
  width: 90%;
  border-radius: 20px;
  height: 20rem;
  .reviewer {
    display: flex;
    gap: 1rem;
    margin: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin: 5px;
    padding: 4px;
    width: 85%;
    height:28rem;
  }
`;

const Reviewer = styled.p`
  margin-top: 1rem;
  font-size: 0.85rem;
  font-weight: 700;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
 margin-top:2rem;
  }
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 50px;
    width: 50px;
    margin-left: 5px;
    margin-top: 20px;
  }
`;

const Review = styled.p`
  font-style: italic;
  font-size: 1rem;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size:0.9rem;
   }
`;

export default Reviews;
