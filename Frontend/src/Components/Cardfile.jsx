import React from 'react'

const Cardfile = ({ title, isCenter }) => {
    const cardStyle = {
        fontWeight: isCenter ? 'bold' : 'normal',
        color:"black",
        backgroundColor:"red"
      };
  return (
    <div style={cardStyle} className="cardfile">
      <p>{title}</p>
    </div>
  )
}

export default Cardfile
