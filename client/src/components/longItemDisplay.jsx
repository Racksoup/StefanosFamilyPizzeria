import React from 'react';
import '../styles/longItemDisplay.scss';

const LongItemDisplay = (props) => {
  const image = props.image;
  const text = props.text;
  const title = props.title;
  const price = props.price;
  return (
    <div className='longItemDisplay'>
      <img className='longItemDisplayImage' src={`api/menuitems/image/${image}`} />
      <div className='longItemDisplayTitle SmallBlack'>{title}</div>
      <div className='longItemDisplayPrice SmallRed'>${price}</div>
      <div className='longItemDisplayText XSmallBlack'>{text}</div>
    </div>
  );
};

export default LongItemDisplay;
