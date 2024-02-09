import React from 'react'
import styled from 'styled-components'
const ReasosnYouneedMa = () => {
  return (
    <Wrapper>
      <div className='left-div'>
        <h3>Reasons why you need a new-age marketing agency</h3>
        <p>Standing out in a crowded market is challenging. <br/>It's even tougher without an emotional connection to your potential customers. <br/>That's where a new-age marketing agency proves invaluable.</p>
      </div>
      <div className='right-div'>
        <ul>
          <li>
            <h4>1. Establishes a unique brand and market position</h4>
          </li>
          <li>
            <h4>2. Provides a sustainable path to business growth</h4>
          </li>
          <li> 
            <h4>3. Ensures customers remember your values, not just your logo</h4>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
display:flex;
background-color:rgba(211,211,211,0.35);
height:60vh;
width:80vw;
margin:10rem auto;
.left-div{
    height:18rem;
    text-align:center;
    position:relative;
    top:6.5rem;
    text-transform:uppercase;
    left:5rem;
    width:45%;
    h3{
      font-size:1.4rem;
      font-weight:600;
    }
    p{
      font-size:1rem;
      margin:2rem;
      line-spacing:1.1rem;
    }

    @media (max-width: 768px) {
      width:100%;
      left:0rem;
      padding:.5rem;
      height:30rem;
      top:2rem;  
      h3{
          font-size:1rem;
        }
        p{
          font-size:0.8rem;
        }
    }
}
.right-div{
    background-color:rgba(89, 60, 143,1);
    height:32.5rem;
    color:white;
    justify-content:center;
    text-align:center;
    display:flex;
    align-items:center;
    width:30rem;
    margin-top:-2.7rem;
    margin-left:7rem;
    
    li{
      margin:2rem;
      font-size:0.9rem;
      h4{
        font-size:1.1rem;
        padding:0.15rem;
      }
    }

    @media (max-width: 768px) {
      margin-top:1rem;
      margin-left:-.5rem;
      width:20rem;
      }
}

@media (max-width: 768px) {
flex-direction:column;
margin:5rem auto;
}
`

export default ReasosnYouneedMa
