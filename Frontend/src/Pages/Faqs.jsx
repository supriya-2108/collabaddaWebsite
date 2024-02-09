import React, { useState } from "react";
import styled from "styled-components";
const Faqs = () => {
  const img = "Images/faqs.png";
  const [answersVisibility, setAnswersVisibility] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
  });

  const showAnswer = (question) => {
    setAnswersVisibility((prevVisibility) => ({
      ...prevVisibility,
      [question]: !prevVisibility[question],
    }));
  };
  return (
    <OuterWrapper>
      <Wrapper>
        <FirstDiv>
          <h2>FAQs</h2>
          <p>
            Have questions?Here you'll find the answer most valued by our
            partners,along with access to step-by-step instruction and support.
          </p>
        </FirstDiv>
        <img src={img} alt="" />
      </Wrapper>
      <Question>
        {/* <h3>About Us</h3> */}
        <OuterDiv>
        <Div>
          <p>What is influencer marketing?</p>
          {!answersVisibility.question1&&<span onClick={() => showAnswer("question1")}>&#11167;</span>}
          {answersVisibility.question1&&<span onClick={() => showAnswer("question1")}>&#11165;</span>}
        </Div>
        {answersVisibility.question1 && (
          <p>
            Influencer Marketing is your gateway to increased brand awareness,
            driving sales, and building credibility with your audiences with the
            help of influential content creators.
          </p>
        )}
        </OuterDiv>
        <OuterDiv>
        <Div>
          <p>Who are influencers?</p>
          {!answersVisibility.question2&&<span onClick={() => showAnswer("question2")}>&#11167;</span>}
          {answersVisibility.question2&&<span onClick={() => showAnswer("question2")}>&#11165;</span>}
        </Div>

        {answersVisibility.question2 && (
          <p>
            Influencers are individuals with a significant online following who
            are able to influence the opinions and behaviour of their followers.
            In India, they typically are popular on social media platforms such
            as Instagram, YouTube, Facebook, Twitter, and LinkedIn where they
            share content and engage with their audience.
          </p>
        )}
        </OuterDiv>
        <OuterDiv>
        <Div>
          <p>What is a nano-influencer?</p>
          {!answersVisibility.question3&&<span onClick={() => showAnswer("question3")}>&#11167;</span>}
          {answersVisibility.question3&&<span onClick={() => showAnswer("question3")}>&#11165;</span>}
        </Div>
        {answersVisibility.question3 && (
          <p>
            A nano-influencer is an influencer with a smaller following than
            traditional influencers, typically ranging from 1,000 to 10,000
            followers. They tend to have a highly engaged and loyal following in
            a specific niche, and their recommendations carry weight with their
            followers.
          </p>
        )}
        </OuterDiv>
        <OuterDiv>
        <Div>
          <p>What is a micro-influencer?</p>
          {!answersVisibility.question4&&<span onClick={() => showAnswer("question4")}>&#11167;</span>}
          {answersVisibility.question4&&<span onClick={() => showAnswer("question4")}>&#11165;</span>}
        </Div>
        {answersVisibility.question4 && (
          <p>
            A micro-influencer is an influencer with a following typically
            ranging from 10,000 to 100,000 followers. This category is a sweet
            spot between nano-influencers and macro-influencers in terms of
            engagement and reach. Micro-influencers tend to have a niche
            audience and a more engaged following due to their relatable and
            authentic approach to content creation.
          </p>
        )}
        </OuterDiv>
      </Question>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.section``;
const Question = styled.section`
width:60vw;
padding:3% 0;
margin:auto;
h3{
  text-align:center;
  // font-size:rem;
}

`;

const OuterDiv = styled.div`
p{
  text-align:center;
  padding:2%;
}
`;
const Div = styled.div`
  display: flex;
  justify-content:space-between;
  text-transform:uppercase;
  margin:2rem;
  height:4rem;
  padding:2%;
  border-radius:10px;
  box-shadow: 2px 4px 8px rgb(89, 60, 143);
  color:rgb(89, 60, 143);
align-items:center;
p{
font-size:1.2rem;
}
span{
  cursor:pointer;
}
`;
const Wrapper = styled.section`
  display: flex;
  width: 70vw;
  padding: 2%;
  margin: auto;
  justify-content: space-between;
  img {
    height: 18rem;
  }
`;
const FirstDiv = styled.section`
  display: flex;
  flex-direction: column;
  width: 30vw;
`;
export default Faqs;
