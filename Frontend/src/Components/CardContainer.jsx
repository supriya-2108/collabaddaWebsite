import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
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
`;

const CardContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CardContainer;
