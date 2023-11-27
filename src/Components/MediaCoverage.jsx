import React from 'react'
import styled from 'styled-components';

const MediaCoverage = () => {
  const mediahouse=[
  "Images/the_print_logo.png","Images/business_standard_logo.png","Images/ani_logo.png","Images/statesman_logo.png","Images/mid-day_logo.png"
      ]
      return (
        <>
           <MidSection style={{marginBottom:"4rem"}}>
      <h2>TRUSTED BY</h2>
      <p>We're honoured to be a trusted name in the industry, recognized by reputable news sources for our dedication to
delivering exceptional results and innovation in digital marketing.</p>
      <div className='container innerContainer'>
      <div className='grid-1 grid-five-column'>
        {
          mediahouse.map((item)=>{
            return<>
            <div key={item} className='mediaImages'>
             <img src={item} alt={item} className='Image-Mediahouse'/>
            </div>
            </>
          
          })
           
        }
        
      </div>
      </div>
      
    </MidSection>
    </>
      );
}

const MidSection=styled.section`
height:40vh;
width:100%;
margin-top:2rem;

p{
  color:black;
  justify-content:center;
  text-align:center;
 font-size:1.1rem;
  font-weight:500;
  width:40%;
  margin:0 450px;
}
h2{
  text-transform: uppercase;
      font-weight: bold;
      font-size:2.1rem;
      justify-content:center;
      text-align:center;
      width:40%;
      margin-left:450px;
}
.innerContainer{
  margin-left:10rem;
}
.mediaImages{
  height:100px;
  width:100px;
  margin:1rem 1rem;
}
.Image-Mediahouse{
  object-fit:contain;
  width:100%;
  height:100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  margin-bottom:2rem;
  height:60vh;
  

  h2{
  margin-left:6rem;
}
p{
  margin:0;
  margin-left:3rem;
  font-size:1rem;
  font-weight:600;
  margin-bottom:1.5rem;
  width:70%;
}

.mediaImages{
  margin:0;
  padding:1px;
  width: 60px;
  height: 60px;
}

.innerContainer{
  margin-left:0;
  padding:0;
}
`

export default MediaCoverage