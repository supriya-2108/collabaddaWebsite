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
    const Reviews=[
      {
        Reviewer:"Mohish Maheshwari",
        Logo:"Images/trell_logo.jpg",
        Review:` "We’ve collaborated on several projects, and Collabadda has consistently delivered
        exceptional results. They are one of the best agencies we've worked with for our influencer
        marketing needs. Their expertise in marketing and social commerce is commendable.
        Collabadda's ability to solve complex marketing challenges is truly remarkable. I highly
        recommend their services to anyone seeking top-notch influencer marketing solutions."`
      },
      {
        Reviewer:"Shivani Sharma",
        Logo:"Images/rizzle_logo.jpg",
        Review:`"Their management of our collaborative work has been incredibly effective and
        efficient. Their professionalism and attention to detail have consistently impressed me,
        making our partnership a seamless and productive experience. I look forward to continuing
        our successful collaboration in the future."`
      }
    ]


  return(
    <SliderContainer>
        <h2>TRUSTED BY LEADERS</h2>
    <Slider style={{ transform: `translateX(-${activeSlide * 50}%)` }}>
      <Slide>
        <div className='grid-1 grid-two-column'>
         
            {
              Reviews.map((item)=>{
                return(
                <>   <Card>
                     <div className="reviewer"><Logo src={item.Logo} alt="Logo" />
        <Reviewer>{item.Reviewer}</Reviewer></div>
        
      <Review>{item.Review}</Review>
      </Card>
       
                </>)
              })
            }
            </div>
      </Slide>
      <Slide>
      <div className='grid-1 grid-two-column'>
         
         {
           Reviews.map((item)=>{
             return(
             <>   <Card>
                  <div className="reviewer"><Logo src={item.Logo} alt="Logo" />
     <Reviewer>{item.Reviewer}</Reviewer></div>
     
   <Review>{item.Review}</Review>
   </Card>
    
             </>)
           })
         }
         </div>
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
  height:75vh;
  margin-top:90px;
  overflow: hidden;
  position: relative;
  padding:25px;
 
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height:90vh;
    width:95vw;
   margin: 10px 10px;
   margin-top:100px;
   padding:5px;

   h2{
    margin-left:4rem;
    font-size:1.8rem;
   }

  }
`;

const Slider = styled.div`
  display: flex;
  width: 200%; /* 2 slides, each taking 50% width */
  animation: slide 5s infinite;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 500%;
  }
`;

const Slide = styled.div`
  display: flex;
  margin-left:15rem;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-left:0;
  }
  `;

const Card = styled.div`
  flex: 0 0 0%; /* 3 cards, each taking 30% width */
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width:60%;
  .reviewer{
    display:flex;
    gap:1rem;
    margin:1rem
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin:5px;
    padding:0px;
    width:40%;
  }
`;

const Reviewer=styled.p`
margin-top:1rem;
font-size:0.85rem;
font-weight:700;
`

const SlideIndicator = styled.div`
  width: 1px;
  display:flex;
  height: 5px;
  background: #888;
  border-radius: 50%;
  justify-content:"center";
  text-align:"center";
  // margin: 10px 5px;
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

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin:15px;
  }
`;



const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
   height:20px;
   width:20px;
   margin-left:20px;
   margin-top:20px;
  }
`;

const Review = styled.p`
  font-style: italic;
  font-size:1rem;
`;



export default Reviews
