
import React from 'react';
import styled from 'styled-components';

const Work = () => {
  const images = [
          {
            img:"Images/sugar (1).webp",
            logo:"Images/sugar_logo.png",
            title:"SUGAR COSMETICS"
          },{
            img:"Images/code_campaign.jpg",
            title:"CODE PERFUMES",
            logo:"Images/code_logo.png"
          },{
            img:"Images/secret_t_campaign.png",
            logo:"Images/secret .jpeg",
            title:"SECRET TEMPTATION DEO"
          },
          {img:"Images/The_Times_of_India_campaign.png",
          logo:"Images/TOI_logo.jpg",
          title:"THE TIMES OF INDIA"
          },
          {
            img:"Images/sugar (1).webp",
            logo:"Images/sugar_logo.png",
            title:"SUGAR COSMETICS"
          },{
            img:"Images/code_campaign.jpg",
            title:"CODE PERFUMES",
            logo:"Images/code_logo.png"
          },{
            img:"Images/secret_t_campaign.png",
            logo:"Images/secret .jpeg",
            title:"SECRET TEMPTATION DEO"
          },
          {img:"Images/The_Times_of_India_campaign.png",
          logo:"Images/TOI_logo.jpg",
          title:"THE TIMES OF INDIA"
          },{
            img:"Images/sugar (1).webp",
            logo:"Images/sugar_logo.png",
            title:"SUGAR COSMETICS"
          },{
            img:"Images/code_campaign.jpg",
            title:"CODE PERFUMES",
            logo:"Images/code_logo.png"
          },{
            img:"Images/secret_t_campaign.png",
            logo:"Images/secret .jpeg",
            title:"SECRET TEMPTATION DEO"
          },
          {img:"Images/The_Times_of_India_campaign.png",
          logo:"Images/TOI_logo.jpg",
          title:"THE TIMES OF INDIA"
          },{
            img:"Images/sugar (1).webp",
            logo:"Images/sugar_logo.png",
            title:"SUGAR COSMETICS"
          },{
            img:"Images/code_campaign.jpg",
            title:"CODE PERFUMES",
            logo:"Images/code_logo.png"
          },{
            img:"Images/secret_t_campaign.png",
            logo:"Images/secret .jpeg",
            title:"SECRET TEMPTATION DEO"
          },
          {img:"Images/The_Times_of_India_campaign.png",
          logo:"Images/TOI_logo.jpg",
          title:"THE TIMES OF INDIA"
          },
        ]
  

  return (
    <>  
      <h2 style={{marginTop:"5rem"}}>OUR WORK</h2>
      <ImageGridContainer>
      {images.map((image, index) => (
        <ImageWrapper key={index}>
          {image.img!=="Images/The_Times_of_India_campaign.png"?
          <Image src={image.img} alt={`Image ${index + 1}`} />:<Image src={image.img} alt={`Image ${index + 1}`} style={{objectFit:"contain"}}/>
          }
             <Logo src={image.logo}/>
           <Content>
                 
                     <span>{image.title}</span><br/>
                 
           </Content>
        </ImageWrapper>
        
      ))}
    </ImageGridContainer>
    </>
    
  );
};


const ImageGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap:8px;
  margin-left:4rem;
  margin-right:3rem;
  padding:1px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left:22px;
  }
`;

const ImageWrapper = styled.div`
  overflow:hidden;
  height:25rem;
  width:28rem;
  // margin:0.5rem;
  margin-bottom:5rem;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
       height:20rem;
       width:20rem;
    //    margin-bottom:2rem;
`;

const Image = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  display: block;
  cursor: pointer;
    cursor: pointer;
    border-radius: 0.5rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
        height: 80%;
        width: 100%;
      }
  
`;

const Content = styled.div`
margin-top:-1rem;
color: black;
font-size: 18px;
font-weight:500;
z-index:1;
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  font-size:1rem;
  bottom:4rem;
  left:0rem;
  span{
    font-size:0.8rem;
    height:10%;
  }
}
`;
  const Logo = styled.img`
  width: 15%;
  height: 15%;
  margin-left:-450px;
  margin-top:-150px;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-left:-230px;
    margin-top:2rem;
    width:25%;
    height:40%;
  }
  
`;


export default Work;