import React, { useState } from 'react';
import { updateMenuItemFunc } from '../actions/menuItems.js';
import '../styles/updateMenuItem.scss';
import ItalianButton from './italianButton';

import { connect } from 'react-redux';

const UpdateMenuItem = ({ props, updateMenuItemFunc }) => {
  const { title, text, category, price, bestSeller, _id, image_filename } = props.item;
  const image = props.item.image_filename;

  const [newItem, setNewItem] = useState({
    title,
    text,
    category,
    price,
    bestSeller,
    _id,
    image_filename,
  });
  const [newImage, setNewImage] = useState('');

  const onNewItemChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };
  const onImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const onChildClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className='updateMenuItemModalBG'
      onClick={() => {
        props.setModal(!props.modal);
      }}
    >
      <div className='updateMenuItemModal' onClick={(e) => onChildClick(e)}>
        <img className='updateMenuItemModalImage' src={`/api/menuitems/image/${image}`} />
        <div className='updateMenuItemModalInputFlex'>
          <div className='MediumBlack updateMenuItemModalInputLabel'>Title:</div>
          <input
            className='updateMenuItemModalInput'
            type='text'
            name='title'
            value={newItem.title}
            onChange={(e) => onNewItemChange(e)}
          />
        </div>
        <div className='updateMenuItemModalInputFlex'>
          <div className='MediumBlack updateMenuItemModalInputLabel'>Category:</div>
          <input
            className='updateMenuItemModalInput'
            type='text'
            name='category'
            value={newItem.category}
            onChange={(e) => onNewItemChange(e)}
          />
        </div>
        <div className='updateMenuItemModalInputFlex'>
          <div className='MediumBlack updateMenuItemModalInputLabel'>Price:</div>
          <input
            className='updateMenuItemModalInput'
            type='text'
            name='price'
            value={newItem.price}
            onChange={(e) => onNewItemChange(e)}
          />
        </div>
        <div className='updateMenuItemModalInputFlex'>
          <div className='MediumBlack updateMenuItemModalInputLabel'>Text:</div>
          <input
            className='updateMenuItemModalInput'
            type='text'
            name='text'
            value={newItem.text}
            onChange={(e) => onNewItemChange(e)}
          />
        </div>
        <div className='updateMenuItemModalInputFlex'>
          <div className='MediumBlack updateMenuItemModalInputLabel'>Best Seller: </div>
          <input
            className='updateMenuItemModalCheckbox'
            type='checkbox'
            name='bestSeller'
            checked={newItem.bestSeller}
            onClick={(e) => {
              onNewItemChange(e);
              console.log(newItem.bestSeller);
            }}
          />
        </div>
        <div className='updateMenuItemModalInputFlex'>
          <div className='MediumBlack updateMenuItemModalInputLabel'>Image: </div>
          <input
            className='updateMenuItemModalInput updateMenuItemModalInputImage'
            type='file'
            name='text'
            onChange={(e) => onImageChange(e)}
          />
        </div>
        <div className='updateModalButton' onClick={() => updateMenuItemFunc(newItem, newImage)}>
          <ItalianButton text='Update' />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
});

export default connect(mapStateToProps, { updateMenuItemFunc })(UpdateMenuItem);
