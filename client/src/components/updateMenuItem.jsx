import React, { useState } from 'react';
import { updateMenuItemFunc } from '../actions/menuItems.js';
import { updateBlog } from '../actions/blogs.js';
import '../styles/updateMenuItem.scss';
import ItalianButton from './italianButton';

import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';

const UpdateMenuItem = ({ props, updateMenuItemFunc, updateBlog }) => {
  const { title, text, category, price, poster, bestSeller, favorite, date, _id, image_filename } =
    props.item;
  const image = props.item.image_filename;

  const [newItem, setNewItem] = useState({
    title,
    text,
    category,
    _id,
    image_filename,
    price,
    poster,
    bestSeller,
    favorite,
    date,
  });

  const [newImage, setNewImage] = useState('');

  const onNewItemChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };
  const onImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };
  const onNewItemCheckboxChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.checked });
    console.log(newItem[e.target.name]);
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
        {price !== undefined && (
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
        )}
        {poster !== undefined && (
          <div className='updateMenuItemModalInputFlex'>
            <div className='MediumBlack updateMenuItemModalInputLabel'>Poster:</div>
            <input
              className='updateMenuItemModalInput'
              type='text'
              name='poster'
              value={newItem.poster}
              onChange={(e) => onNewItemChange(e)}
            />
          </div>
        )}

        {bestSeller !== undefined && (
          <div className='updateMenuItemModalInputFlex'>
            <div className='MediumBlack updateMenuItemModalInputLabel'>Best Seller: </div>
            <input
              className='updateMenuItemModalCheckbox'
              type='checkbox'
              name='bestSeller'
              value={newItem.bestSeller}
              defaultChecked={newItem.bestSeller}
              onChange={(e) => {
                onNewItemCheckboxChange(e);
              }}
            />
          </div>
        )}
        {favorite !== undefined && (
          <div className='updateMenuItemModalInputFlex'>
            <div className='MediumBlack updateMenuItemModalInputLabel'>Favorite: </div>
            <input
              className='updateMenuItemModalCheckbox'
              type='checkbox'
              name='favorite'
              value={newItem.favorite}
              defaultChecked={newItem.favorite}
              onChange={(e) => {
                onNewItemCheckboxChange(e);
              }}
            />
          </div>
        )}
        <div className='updateMenuItemModalInputFlex'>
          <div className='MediumBlack updateMenuItemModalInputLabel'>Image: </div>
          <input
            className='updateMenuItemModalInput updateMenuItemModalInputImage'
            type='file'
            name='text'
            onClick={(e) => onImageChange(e)}
          />
        </div>
        <div className='updateMenuItemModalInputFlex'>
          <div className='MediumBlack updateMenuItemModalInputLabel'>Text:</div>
          <Textarea
            className='updateMenuItemModalInput'
            type='text'
            name='text'
            value={newItem.text}
            onClick={(e) => onNewItemChange(e)}
          />
        </div>
        {bestSeller !== undefined && price !== undefined && (
          <div
            className='updateModalButton'
            onClick={() => {
              updateMenuItemFunc(newItem, newImage);
              props.setModal(!props.modal);
            }}
          >
            <ItalianButton text='Update' />
          </div>
        )}
        {date !== undefined && favorite !== undefined && poster !== undefined && (
          <div
            className='updateModalButton'
            onClick={() => {
              updateBlog(newItem, newImage);
              props.setModal(!props.modal);
            }}
          >
            <ItalianButton text='Update' />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
});

export default connect(mapStateToProps, { updateMenuItemFunc, updateBlog })(UpdateMenuItem);
