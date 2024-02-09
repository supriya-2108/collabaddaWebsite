import React from "react";
import styled from "styled-components";

const Career = () => {
  const Img = "Images/careerImg.png";
  return (
    <OuterWrapper>
      <Wrapper>
        <FirstDiv>
          <h2>Create a Change with Collabadda</h2>
          <p>
            Are you excited about the prospect of working alongside young and
            creative individuals such as yourself? PS: Food and coffee get us
            running and it’s on the house!
          </p>
        </FirstDiv>
        <img src={Img} alt="" />
      </Wrapper>
      <h2>Benefits</h2>
      <Points>
        <Div>
          <h3>One of the best startup company to work for!</h3>
          <p>
            Challenging Work:- I liked the Technical challenges that we were
            given. Particularly, in terms of the learning experience and
            technology used. – Wonderful Mentor:- Pretty dependent on the team,
            but I really like my experience. – Perks:- Laptops (they have a
            vending machine for everything electronic!) – Free Food
          </p>
        </Div>
        <Div>
          <h3>Plethora of Learning</h3>
          <p>
            I have been working at Kofluence Tech full-time for more than a
            year. Immersive experience, Great place for freshers and Multiple
            learning opportunities. Startup environment, which can be a con to
            those looking for a structured definition of roles, otherwise you’ll
            fit right in!
          </p>
        </Div>
        <Div>
          <h3>Great culture, colleagues and Growth</h3>
          <p>
            Organizational culture is really good, from your manager to HR to
            founder everybody cares about you, your growth in the organization
            as well as personal life. Monthly happiness survey and one to one
            meeting with the founder and HR is really helpful. Working at
            kofluence is like one good day at work, will makeup for bad day at
            life.
          </p>
        </Div>
      </Points>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.section`
  h2 {
    text-transform: capitalize;
  }
`;

const Wrapper = styled.section`
  display: flex;
  padding: 2%;
  width: 80vw;
  margin: auto;
  justify-content: space-between;
  img {
    height: 21rem;
  }
`;

const Points = styled.div`
  display: flex;
  margin: 2rem auto 5rem;
  width: 85vw;
  justify-content: space-between;
`;

const Div = styled.div`
  height: 16rem;
  width: 26rem;
  padding: 2.2%;
  border-radius: 1rem;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
  h3 {
    font-size: 0.9rem;
    font-weight: 600;
    margin: 1rem auto 2rem;
  }
  p {
    font-size: 0.9rem;
  }
`;
const FirstDiv = styled.section`
  display: flex;
  flex-direction: column;
  width: 35vw;
`;

export default Career;
