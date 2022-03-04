import React from 'react';
import '../styles/ItemDisplay.css';

const ItemDisplay = (props) => {
  const srcImg = props.srcImg;
  const title = props.title;
  const price = props.price;
  return (
    <div className='bestSellerItem'>
      <div className='bestSellerImg'>
        <img src={`api/menuitems/image/${srcImg}`} />
      </div>
      <div className='SmallWhite'>{title}</div>
      <div className='MediumRed'>${price}</div>
    </div>
  );
};

export default ItemDisplay;
