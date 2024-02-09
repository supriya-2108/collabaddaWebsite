import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
const Card = ({ content }) => {
  useEffect(() => {
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated",
    });
  }, []);
  return (
    <Wrapper>
      <div className="upperDiv">
        {content.map((item, index) => {
          
          return (
            <div className="outerdiv" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
              <div style={{backgroundColor:"#593c8f",marginBottom:"1.2rem"}}>
            <h3 className="heading">{item.title}</h3>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
            {
              item.services.map((itemval)=>{
                return( <Div>
              
                
              <h3 dangerouslySetInnerHTML={{ __html: itemval.heading }} />

                <p dangerouslySetInnerHTML={{ __html: itemval.content }} />
              
            </Div>)
              })
            }
            </div>
            </div>
            
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
margin-bottom:3px;
  h3 {
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
  }
  .upperDiv {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    // display:flex;
  margin:auto;
    width:90%;
    // flex-direction:column;
  }
  .heading{
    margin:3rem;
    color:white;
    font-size:1.5rem;
    text-transform:uppercase
  }
  .outerdiv{
    display:flex;
    flex-direction:column;
    border-radius:2px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
`;
const Div = styled.div`
 
  margin-bottom:1.5rem;
  padding: 0;
  overflow: hidden;
  h3 {
    text-align: center;
    // color:#593c8f;
  }
  .header {
    background-color: #593c8f; /* Header background color */
    color: white;
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid #2980b9; /* Optional: Add a border to separate header and content */
  }
  p {
    margin: 0.9rem;
    font-size: 0.9rem;
    text-align: center;
  }
  img {
    height: 3rem;
    width: 3rem;
  }
`;

export default Card;
