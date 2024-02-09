import React from 'react'
import styled from 'styled-components';

const MediaCoverage = () => {
  const mediahouse=[
  "Images/the_print_logo.png","Images/business_standard_logo.png","Images/ani_logo.png","Images/statesman_logo.png","Images/mid-day_logo.png","Images/dailyBeat.png"
      ]
      return (
           <MidSection>
      <h2>FEATURED</h2>
      <p>We're honoured to be a trusted name in the industry, recognized by reputable news sources for our dedication to
delivering exceptional results and innovation in digital marketing.</p>
      <StyledTable>
      <tbody>
        <TableRow>
         
              <TableCell>
              <div className='mediaImages'>
                  <img src={mediahouse[0]} alt="" className='Image-Mediahouse'/>
                  <div className='dots' style={{left:window.innerWidth>1150?window.innerWidth/6.3:window.innerWidth>770?window.innerWidth/5.9:window.innerWidth/4.8}}></div>
            </div>
              </TableCell>
              <TableCell><div className='mediaImages'>
                  <img src={mediahouse[1]} alt="" className='Image-Mediahouse'/>
                  <div className='dots' style={{left:window.innerWidth>1150?window.innerWidth/6.3:window.innerWidth>770?window.innerWidth/5.9:window.innerWidth/4.8}}></div>
            
            </div>
            </TableCell>
          <TableCell><div className='mediaImages'>
                  <img src={mediahouse[2]} alt="" className='Image-Mediahouse'/>
            </div>
            </TableCell>
             
        </TableRow>
        <TableRow>
          <TableCell><div className='mediaImages'>
                  <img src={mediahouse[3]} alt="" className='Image-Mediahouse'/>
            </div>
            </TableCell>
          <TableCell><div className='mediaImages'>
                  <img src={mediahouse[4]} alt="" className='Image-Mediahouse'/>
            </div>
            </TableCell>
          <TableCell><div className='mediaImages'>
                  <img src={mediahouse[5]} alt="" className='Image-Mediahouse'/>
            </div>
            </TableCell>
        </TableRow>
      </tbody>
    </StyledTable>
    </MidSection>
       );
}

const MidSection=styled.section`
overflow-x:hidden;
height:90vh;
width:100%;
margin-bottom:20rem;
margin:-4rem 0 0rem 0;
@media (max-width: 1030px) {
  height:50vh;
}
@media (max-width: 768px) {
  margin:-8rem 0 0rem 0;
  height:20vh;
  margin-bottom:0rem;
 }
p{
  color:black;
  justify-content:center;
  text-align:center;
 font-size:1.1rem;
  font-weight:500;
  width:80%;
  margin:0 auto;
  margin-top:-1rem;
  @media (max-width: 768px) {
    font-size:0.9rem;
    width:80%;
  }
}
h2{
  text-transform: uppercase;
      font-weight: bold;
      font-size:2.1rem;
      justify-content:center;
      text-align:center;
      width:40%;
      display:flex;
      color: rgb(89, 60, 143);
      margin:auto;
      padding:1.7rem 1rem;
      @media (max-width: 768px) {
       font-size:1.5rem;
      }
}
.innerContainer{
  margin-left:10rem;
}
.mediaImages{
  height:100px;
  width:100px;
  margin:2rem auto;
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

.innerGrid{
  display:grid;

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
const StyledTable = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin: 1rem auto; 
`;

const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px dotted rgba(89,60,143,1);
  }
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  .dots{
    height:1.05rem;
    width:1.05rem;
    background-color:rgb(89,60,143);
    // border:1px solid rgb(89,60,143);
    position:relative;
    top:30%;
    border-radius:50%;
    @media (max-width: 768px) {
      top:8%;
     }
  }
  &:not(:last-child) {
    border-right: 1px dotted rgba(89,60,143,1);
  }

  
`;

export default MediaCoverage