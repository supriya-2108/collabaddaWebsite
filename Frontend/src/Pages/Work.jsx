
import React from 'react';
import styled from 'styled-components';
import { detailedCampaign } from '../Components/CampaignDetails';
import { NavLink } from 'react-router-dom';
const Work = () => {
  
  return (
    <OuterWrapper>  
      <h2>OUR WORK</h2>
      <ImageGridContainer>
      {detailedCampaign.map((image, index) => (
        <ImageWrapper key={index}>
          <NavLink to="/detailedPage" state={{data:image}}>
            <Image src={image.campaignImg} alt={`Image ${index + 1}`} />
          </NavLink>
          <Content>
          <Logo src={image.logo}/>
             <div className='contentInWorkSection'>
             <Column1>
                     <span className='innercontent'>INFLUENCERS</span><br/><span>{image.metrics.TotalInfluencers}</span>
                 </Column1>
                 <Column1><span className='innercontent' style={{marginLeft:"2.8rem"}}>LIKES</span><br/><span>{image.metrics.TotalLikes}</span>
                 </Column1>
                 <Column1><span className='innercontent' style={{marginLeft:"2.8rem"}}>REACH</span><br/><span>{image.metrics.TotalReach}</span>
                 </Column1>
             </div>
          </Content>
             
        </ImageWrapper>
        
      ))}
    </ImageGridContainer>
    </OuterWrapper>
    
  );
};

const OuterWrapper=styled.section`
h2{
  margin-top:2rem;
}

@media(max-width:770px){
  h2{
    margin-top:1rem;
  }
}
`

const ImageGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap:2px;
  padding:1px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left:22px;
  }
`;

const ImageWrapper = styled.div`
  overflow:hidden;
  height:40%;
  width:auto;
  margin:0 auto;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
       height:20rem;
       width:20rem;
    //    margin-bottom:2rem;
`;

const Image = styled.img`
  
  height: 100%;
  object-fit:contain;
  cursor: pointer;
  border-radius: 1rem;
    margin-top:-2rem;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
        height: 80%;
        width: 100%;
      }
  
`;


const Content = styled.div`
position: relative;
bottom: 9.2rem;
width: 102%;
height: 30%;
display: flex;
color: #fff;
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
  width: 20%;
  height: 20%;
  object-fit: contain;
  margin-left:-450px;
  margin-top:-150px;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-left:-230px;
    margin-top:2rem;
    width:25%;
    height:40%;
  }

  
`;

const Column1 = styled.div`
  flex: 1;
  font-size:0.9rem;
  margin:0 auto;
  font-weight:800;
  padding:0.3rem;
  text-align:center;
  .innercontent{
    font-size:0.8rem;
  }

  // @media (max-width: ${({ theme }) => theme.media.mobile}) {
  //  height:2rem;
  //  width:20rem;
  //  margin-bottom:2rem;

  
    
  }`;


export default Work;