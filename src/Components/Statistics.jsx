import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import image from '../public/background-img.png'
const Statistics = () => {
  const workSectionRef = useRef(null);

  useEffect(() => {
    const workSection = workSectionRef.current;
    const workSectionObserve = (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      const counterNums = workSection.querySelectorAll('.counter-numbers');
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
       <div ref={workSectionRef} className="container upperSection" style={{backgroundImage:`url(${image})`}}>
      <div className="grid grid-three-column mainSection">
        <div className="innerSection">
          <h2 data-number="300" className="counter-numbers" style={{color:"#593C8F"}}>0</h2>
          <p>CAMPAIGNS</p>
        </div>
        <div className="innerSection">
          <h2 data-number="100000" className="counter-numbers" style={{color:"#593C8F"}}>0+</h2>
          <p>INFLUENCERS WORKED WITH</p>
        </div>
        <div className="innerSection">
          <h2 data-number="150" className="counter-numbers" style={{color:"#593C8F"}}>0</h2>
          <p>BRANDS</p>
        </div>
      </div>
    </div>
    </Wrapper>
   
  );
};


const Wrapper=styled.section`
.mainSection{
margin-left:10rem
}

.upperSection{
margin-top:8rem;
height:15rem;
}

.innerSection{
  text-align:center;
  margin-top:3rem;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .mainSection{
margin-left:0;
  }
  .upperSection{
    height:32rem;
  }

  .innerSection{
    margin-top:0rem;
  }
}
`
export default Statistics;
