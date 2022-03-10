import React from 'react';
import '../styles/ItemDisplay.css';

const ItemDisplay = (props) => {
  const srcImg = props.srcImg;
  const title = props.title;
  const price = props.price;
  const textColor = props.textColor;
  return (
    <div className='bestSellerItem'>
      <img className='bestSellerImg' src={`api/menuitems/image/${srcImg}`} />
      {textColor === 'black' ? (
        <div className='SmallBlack'>{title}</div>
      ) : (
        <div className='SmallWhite'>{title}</div>
      )}
      <div className='MediumRed'>${price}</div>
    </div>
  );
};

export default ItemDisplay;
