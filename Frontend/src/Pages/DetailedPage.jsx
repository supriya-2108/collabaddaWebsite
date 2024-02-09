import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import images from '../Components/Images';
const DetailedPage = () => {
    const location = useLocation();
    const { data } = location.state || {};
    console.log(data)
    if(!data){
        return <h2>Loading....</h2>
    }
    let items=images.slice(0,3);
    console.log(Array.isArray(data.info[1].content))
    return (
        <>
    <Wrapper>
        <h2>{data.campaignName.toUpperCase()}</h2>
        <p>{data.summary}</p>
    {/* <Img src={data.campaignImg}/> */}
    <div className='metrics'>
        <Column>
        <span> Total Influencers</span><br/><span>{data.metrics.TotalInfluencers}</span>
        </Column>
        <Column>
        <span>  Total Likes</span><br/><span>{data.metrics.TotalLikes}</span>
        </Column>
        <Column>
        <span> Total Reach</span><br/><span>{data.metrics.TotalReach}</span>
        </Column>
    </div>
    <div>
        {
            data.info.map((item)=>{
                return(
                    <>
                    <p style={{fontSize:"1.6rem",fontWeight:"700"}}>{item.name.toUpperCase()}</p>
                    {  
                      (Array.isArray(item.content))?
                      
                                item.content.map((item1)=>{
                                    return(
                                        <>
                                            <p style={{fontSize:"1.3rem",fontWeight:"400"}}>{item1.name1}</p>
                                            <p dangerouslySetInnerHTML={{ __html:item1.content1}} />
                                    </>
                                    )
                                }):
                                <p dangerouslySetInnerHTML={{ __html:item.content}} />
                    
                    }
                    
                    </>
                )
            })
        }
        {/* <p><span style={{fontSize:"1.5rem"}}>{data.strategy.title}</span>{data.strategy.content}</p>
        <p><span style={{fontSize:"1.5rem"}}>{data.impact.title}</span>{data.impact.content}</p>
        <p><span style={{fontSize:"1.5rem"}}>{data.recommendation.title}</span>{data.recommendation.content}</p> */}
       
    </div>
    </Wrapper>
    <h2>OTHER WORKS</h2>
    <div className='otherWorks'>
        {items.map((item)=>{
           return <img src={item.img} alt="other work" className='workimages'/>
        })}
    </div>
    </>
  )
}

const Wrapper=styled.section`
background-color:#593C8F;
// width:80%;
color:#fff;
padding:1rem;
margin:0 auto;
p{  
    text-align:center;
    width:80%;
    margin:3rem auto;
}
h2{
    color:white;
    font-size:2.35rem;
}



`;
const Column=styled.div`
margin:0 2rem;
text-align:center;
font-weight:600;
.colorpurple{
    // color:#593C8F;
}
`;

const Img= styled.img`
width:25rem;
height:25rem;
margin:0 auto;
translate:135% 0%;
object-fit:contain;
`
export default DetailedPage
