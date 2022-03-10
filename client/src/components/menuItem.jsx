import React from 'react';
import '../styles/menuItem.scss';

const menuItem = (props) => {
  const itemImage = props.item.image_filename;
  const itemTitle = props.item.title;
  const itemPrice = props.item.price;
  const itemText = props.item.text;
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
