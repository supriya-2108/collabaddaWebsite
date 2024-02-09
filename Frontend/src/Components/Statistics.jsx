import React, { useEffect, useRef } from "react";
import styled from "styled-components";
const bgImage="Images/stats1.gif";
const Statistics = () => {
  const workSectionRef = useRef(null);

  useEffect(() => {
      const workSection = workSectionRef.current;
      const workSectionObserve = (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
  
  
        const counterNums = workSection.querySelectorAll(".counter-numbers");
        const speed = 100;
  
  
        counterNums.forEach((curNumber) => {
          const updateNumber = () => {
            const targetNumber = parseInt(curNumber.dataset.number);
            const initialNumber = parseInt(curNumber.innerText);
            const incrementNumber = Math.trunc(targetNumber / speed);
  
  
            if (initialNumber < targetNumber) {
              curNumber.innerText = `${initialNumber + incrementNumber}+`;
              setTimeout(updateNumber, 10);
            } else {
              curNumber.innerText = `${targetNumber.toLocaleString()}+`;
            }
          };
          updateNumber();
        });
      };
  
  
      const workSecObserver = new IntersectionObserver(workSectionObserve, {
        root: null,
        threshold: 0,
      });
  
  
      workSecObserver.observe(workSection);
    }, []);
  


  return (
    <Wrapper>
     
        <img src={bgImage} className="first" alt=""/>
     
      <div className="main">
        <div className="second" ref={workSectionRef}>
          <div className="innerSecond">
            <h3  data-number="100000"
              className="counter-numbers"
            >0+</h3>
            <h3>Influencers</h3>
          </div>
          <div className="innerSecond">
          <h3  data-number="300"
              className="counter-numbers"
            >0+</h3>
            <h3>Campaigns</h3>
          </div>
          <div className="innerSecond">
          <h3  data-number="150"
              className="counter-numbers"
            >0+</h3>
            <h3>brands</h3>
          </div>
        </div>
        <div className="third">
          <ul>
            <li>
              <h4>Diverse Influencer Network</h4>
              <p>
                Boosting a large network of over 1,00,000+ influencers spanning
                various language and niches.
              </p>
            </li>
            <li>
              <h4>Proven Success Story</h4>
              <p>
                With a track record of assiting over 150+ brands in achieving
                their branding goals.
              </p>
            </li>
            <li>
              <h4>Extensive Campaign Portfolio</h4>
              <p>
                Backed by the execution of 300+ campaigns across diverse client
                segment.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
overflow-x:hidden;
width:100vw;
margin:5rem 0 0 0;
height:80vh;
display:flex;
flex-direction:column;
h3{
  text-align:center;
  color:white;
  margin:2rem 0;
  text-transform:uppercase;
}
.first{
  width:100vw;
  height:36%;
}

.main{
  position: relative;
  top: 20%; 
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction:column;
}
.second{
  align-item:center;
  border-radius:3rem;

  height:15rem;
  margin:auto;
  width:80%;
  background-color:#593c8f;
  display:flex;
  z-index:999;
  .innerSecond{
    margin:auto;
  }
  @media (max-width:1300px){
    width:90%;
  }
  @media (max-width:768px){
    height:50%;
    width:100%;
    border-radius:0;
    h3{
      font-size:1rem;
    }
  }
}

.third{
  background-color:white;
  width:80%;
  margin-top:-4rem;
  z-index:-999;
  text-align:center;
  height:20rem;
  padding:6rem 6rem;
  h4{
    color:#593c8f;
    font-size:1.15rem;
    font-weight:bold;
  }
  p{
    margin-bottom:2rem;
    font-weight:bold;
    font-size:1rem;
  }
  
@media (max-width: 768px) {
margin-bottom:3rem;
width:100%;
h4{
  font-size:0.9rem;
}
p{
  font-size:0.7rem;
}
}
}
`;

export default Statistics;
