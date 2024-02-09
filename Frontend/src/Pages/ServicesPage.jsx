import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from "styled-components";
import Card from '../Components/Card';
const ServicesPage = () => {
  const location = useLocation();
  const { data } = location.state || {};
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <Wrapper>
      <h2 dangerouslySetInnerHTML={{ __html: data.title.mainheading.toUpperCase() }} />
      <span dangerouslySetInnerHTML={{ __html: data.title.subheading}}/>
        <p className="ptagInHeader" dangerouslySetInnerHTML={{ __html: data.description }} />
        <Card content={data.points} image={data.images} />
   
     
    {(data.subcontent)&&<Card content={data.subcontent}/>}
    <div className="bottomdiv">
      <h3>Why Collabadda for {data.title.mainheading}</h3>
      <div>
        {data.reasonforCB.map((item)=>{
          return(
            <div className="divForReason">
                  <h4 dangerouslySetInnerHTML={{ __html: item.head1 }} />
                  <p dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          )
          
        })
        }
      </div>
    </div>
    {(data.endpoint&&<div className='divforendpoint'>
      {data.endpoint.map((item)=>{
        return(<p>{item}</p>)
      })}
    </div>)}
    </Wrapper>
  );
}

const Wrapper=styled.section`
text-align:center;
h2{
  font-size:2rem;
  text-align:center;
}

span{
  text-align:center;
  margin:-1rem 0 1rem 0;
  font-weight:500;
  font-size:1.2rem;
  color:#593C8F;
  justify-content:center;
  display:block;
}

.ptagInHeader{
  margin:2.5rem 10rem;
}
h3{
  font-size:1.5rem;
  text-align:center;
  font-weight:bold;
}

.divForReason{
  justify-content:center;
  text-align:center;
  margin:3rem auto;
  padding:1rem;
  box-shadow:0 4px 8px rgba(0,0,0,0.1);
  width:fit-content;
}

.bottomdiv{
  margin:5rem;
}

.divforendpoint{
  background-color: #593C8F;
  color:white;
  text-align:center;
  height:15rem;
  padding:2rem;
  margin:2rem 2rem 5rem 2rem;
  font-size:1.3rem;
  line-spacing:0.8rem;
}

`;

export default ServicesPage;
