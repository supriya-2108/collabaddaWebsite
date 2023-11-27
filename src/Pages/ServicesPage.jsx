import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from "styled-components";
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
        <div className="upperDiv">
     {(data.points.map((item)=>{
      return(
        <Div>
        <h3 dangerouslySetInnerHTML={{ __html: item.heading }} />
        <p dangerouslySetInnerHTML={{ __html: item.content }} />
      </Div>)
     }))
    }
    </div>
    <div>
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
    </Wrapper>
  );
}

const Wrapper=styled.section`

h2{
  font-size:2rem;
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
  margin:3.5rem 10rem 1rem 10rem;
}
h3{
  font-size:1.5rem;
  text-align:center;
}
.upperDiv{
display:flex;
// margin:2rem 2rem;
}
.divForReason{
  justify-content:center;
  text-align:center;
  margin:3rem;
  box-shadow:0 4px 8px #593C8F;
  width:fit-content;
}


`;
const Div=styled.div`
box-shadow:0 4px 8px #593C8F;
margin:3rem;
border-radius:3rem;
h3{
  font-size:1.2rem;
  text-align:center;
  margin:1rem;
  font-weight:bold;
  color:white;
  background-color:#593C8F;
}
p{
  margin:1rem;
  font-size:0.9rem;
}
`

export default ServicesPage;
