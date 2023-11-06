import React from 'react'
import styled from 'styled-components';
import CardContainer from './CardContainer';

const AppContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 60vh;
margin-bottom:100px;
`;

const Card = styled.div`
  background-color: #ffffff; /* Card background color */
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: calc(25% - 20px); /* Adjust card width and margin as needed */
  margin: 10px;
  text-align: center;

  h2{
    color:#593C8F
  }
`;

const MediaCoverage = () => {
    const cardContent = Array.from({ length: 8 }, (_, index) => (
        <Card key={index}>
          {/* Content for your card goes here */}
          <h2>Card {index + 1}</h2>
          <p>This is the content inside the card.</p>
        </Card>
      ));
    
      return (
        <>
        
        <h2 style={{marginTop:"-50px"}}>MEDIA COVERAGE</h2>
        <AppContainer>
          <CardContainer>{cardContent}</CardContainer>
        </AppContainer>
        </>
      );
}

export default MediaCoverage
