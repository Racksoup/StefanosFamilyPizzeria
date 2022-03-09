import React from 'react';
import '../styles/menuItem.scss';

const menuItem = (props) => {
  const itemImage = props.itemImage;
  const itemTitle = props.itemTitle;
  const itemPrice = props.itemPrice;
  const itemText = props.itemText;
  return (
    <div className='menuItem'>
      <img className='menuItemImg' src={`api/menuitems/image/${itemImage}`} />
      <div className='menuItemTitle SmallBlack'>{itemTitle}</div>
      <div className='menuItemPrice SmallRed'>${itemPrice}</div>
      <div className='menuItemText XSmallBlack'>{itemText}</div>
    </div>
  );
};

export default menuItem;
