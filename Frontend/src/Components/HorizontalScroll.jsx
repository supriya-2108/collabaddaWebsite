import React from 'react'
import ReactScrollHorizontal from 'react-scroll-horizontal';
import Cardfile from './Cardfile';
const HorizontalScroll = ({ data, onCardCenter }) => {
    const menuItems = data.map((item, index) => (
        <Cardfile key={index} title={item.title} isCenter={item.isCenter} />
      ));
    
      const onSelect = (key) => {
        onCardCenter(key);
      };
      console.log(menuItems);
  return (
    <div className="horizontal-scroll">
      <ReactScrollHorizontal>
        <div className="scroll-menu">{menuItems}</div>
      </ReactScrollHorizontal>
      fcd
    </div>
  )
}

export default HorizontalScroll;
