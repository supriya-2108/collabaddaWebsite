import React from 'react';
import styled from 'styled-components';

const OurWork = () => {
  return (
    <Wrapper>
      <h2>OUR WORK</h2>
      <Container>
        <Column>
          <Image src="https://plus.unsplash.com/premium_photo-1686629617085-cd7e08690507?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />
          <Content>
            <Logo src="Images/WhatsApp Image 2023-11-02 at 10.12.47 AM.jpeg"/>
            <p>My Data has to be solid</p>
            <div className='contentInWorkSection'>
                <Column>
                    <span>VIEWS</span><br/><span>38.6M</span>
                </Column>
                <Column><span>VIEWS</span><br/><span>38.6M</span>
                </Column>
                <Column><span>VIEWS</span><br/><span>38.6M</span>
                </Column>
                <Column><span>VIEWS</span><br/><span>38.6M</span>
                </Column>
            </div>
          </Content>
        </Column>
        <Column>
          <Image src="https://plus.unsplash.com/premium_photo-1686629617085-cd7e08690507?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />
          <Content>
            <Logo src="Images/WhatsApp Image 2023-11-02 at 10.12.47 AM.jpeg"/>
            <p>My Data has to be solid</p>
            <div className='contentInWorkSection'>
                <Column>
                    <span>VIEWS</span><br/><span>38.6M</span>
                </Column>
                <Column><span>VIEWS</span><br/><span>38.6M</span>
                </Column>
                <Column><span>VIEWS</span><br/><span>38.6M</span>
                </Column>
                <Column><span>VIEWS</span><br/><span>38.6M</span>
                </Column>
            </div>
          </Content>
        </Column>
      </Container>
      <Container>
      <Column>
          <Image src="https://plus.unsplash.com/premium_photo-1686629617085-cd7e08690507?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />
          <Content>
            <Logo src="Images/WhatsApp Image 2023-11-02 at 10.12.47 AM.jpeg"/>
            <p>My Data has to be solid</p>
            <div className='contentInWorkSection'>
                <Column>
                    <span>VIEWS</span><br/><span>38.6M</span>
                </Column>
                <Column><span>VIEWS</span><br/><span>38.6M</span>
                </Column>
                <Column><span>VIEWS</span><br/><span>38.6M</span>
                </Column>
                <Column><span>VIEWS</span><br/><span>38.6M</span>
                </Column>
            </div>
          </Content>
        </Column>
        <Column>
          <Image src="https://plus.unsplash.com/premium_photo-1686629617085-cd7e08690507?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />
          <Content>
            <Logo src="Images/WhatsApp Image 2023-11-02 at 10.12.47 AM.jpeg"/>
            <p>My Data has to be solid</p>
            <div className='contentInWorkSection'>
                <Column>
                    <span>VIEWS</span><br/><span>38.6M</span>
                </Column>
                <Column><span>VIEWS</span><br/><span>38.6M</span>
                </Column>
                <Column><span>VIEWS</span><br/><span>38.6M</span>
                </Column>
                <Column><span>VIEWS</span><br/><span>38.6M</span>
                </Column>
            </div>
          </Content>
        </Column>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
p{
color: #fff;
font-size: 18px;
font-weight:bold;
margin-left:-100px;
text-transform:uppercase;
margin-top:-25px
}`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1300px; /* You can adjust the width as needed */
  max-height:1100px;
  margin: 0 auto;
  margin-top:5px;
`;

const Column = styled.div`
  flex: 1;
  padding: 1px;
  margin: 3px 5px;
  position:relative;
  overflow: hidden;
`;

const Image = styled.img`
  object-fit: contain;
  display: block;
	cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transform: scale(1);
  transition: 0.5s ease-in-out;

  &:hover {
    
    transform: scale(1.1);
}
  }
`

const Content = styled.div`
position: absolute;
bottom: 10px;
left: 0;
width: 100%;
height: 30%;
// background-color: rgba(0, 0, 0, 0.5); 
display: flex;
justify-content: center;
align-items: center;
color: #fff;
font-size: 18px;
text-align: center;
`;
  const Logo = styled.img`
  width: 15%;
  height: 30%;
  margin-left:-350px;
  margin-top:-100px;
`;

const Details=styled.div`
background-color: rgba(0, 0, 0, 0.5); 
width: 100%;
height: 60%;
`

export default OurWork;
