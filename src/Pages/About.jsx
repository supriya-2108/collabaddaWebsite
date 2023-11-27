import React from 'react'
import styled from 'styled-components'
import MediaCoverage from '../Components/MediaCoverage';
import image from '../public/background-img.png'
import Brands from '../Components/Brands';
const years=[{
  year:2020,
  color:"red",
  content:"Collabadda began its journey with a team of 15 passionate individuals."
},
{
  year:2021,
  color:"pink",
  content:"We celebrated our growth as we collaborated with 60,000 influencers, making a significant impact for the brand Rizzle"
},
{ year:2022,
 color:"green",
content:"In our commitment to expansion we opened our office in Gurugram's Sector 67, with a dedicated team of 6 members and a dynamic force of 40 interns."
},
{
  year:2023,
  color:"yellow",
  content:"We achieved remarkable success by serving esteemed clients like Wildstone and Sugar, cementing our reputation as a trusted marketing agency."
}]

const MandV=[{
  name:"Mission",
  content:"Elevate Indian brands to global prominence, setting a benchmark in every sector that others aspire to reach"
},
{
  name:"Vission",
  content:"To become the world's premier marketing agency, empowering brands to achieve unparalleled success"
}]
const About = () => {
  return (
    <Wrapper>
        <Heading style={{backgroundImage:`url(${image})`,marginTop:"3rem"}}>
          <h2>Collabadda is a dynamic team of influencer marketing experts, innovative content creators,
and astute digital strategists collaborating to amplify brand presence and connect with
audiences worldwide.</h2>
        </Heading>
        <MileStones>
              <h2>
                OUR MILESTONE
              </h2>
              <CardContainer>
                {
                  years.map((item)=>{
                    return(
                    <>
                    <Card>
                     <div className="elements">
                      <h3 style={{justifyContent:"center",textAlign:"center"}}>{item.year}</h3>
                      <p style={{marginTop:"1rem"}}>{item.content}</p>
                      </div>
                    </Card>                   
                    </>)
                  })
                  
                  }
                
              </CardContainer>
                      </MileStones>
                      <div>
                      </div>
                      <div className='container'>
                        <h2>OUR VISSION AND MISSION</h2>
                        <div className='grid grid-two-column'>
                          {
                            MandV.map((item)=>{
                              return(
                                <>
                                <div style={{flexDirection:"column",marginTop:"2rem"}}>
                                  <h3 style={{justifyContent:"center",textAlign:"center"}}>{item.name}</h3>
                                    <p className='pstyle'>{item.content}</p>
                                </div>
                                      </>
                              )
                            })
                          }
                            </div>
                      </div>
                      <Brands/>
                      <MediaCoverage/>
                      {/* <Team></Team> */}
    </Wrapper>
  )
}

const Wrapper=styled.section`

.pstyle{
  width:50%;margin-left:12rem;margin-top:1rem;
}
@media (max-width:${({theme})=>theme.media.mobile}) { 
  .pstyle{
  margin-left:0;
  width:100%;
}
.container{
  margin-left:2rem;
}
}
`;
const Heading=styled.div`
width:100%;
height:40vh;
text-align:center;
justify-content:center;
padding:3rem 20rem;

@media (max-width:${({theme})=>theme.media.mobile}) { 
  padding:3rem 0;
  h2{
    font-size:1.5rem;
  }
}
`;

const MileStones=styled.div`
margin-top:8rem;
margin-bottom:10rem;

p{
  text-align:center;
  jusrify-content:center;
  margin-top:-1rem;
}
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin:2rem 2rem 2rem 10rem;
  margin-left:2rem;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display:grid;
  }
  
`;
const Card = styled.div`
  width: 300px;
  height:200px;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 1px;

  .elements{
    flex-direction:column;
    text-slign:center;
    justify-content:center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height:20rem;
    width:22rem;
  }
`;


export default About
