import { stripComments } from 'config/parser';
import React from 'react';

const BlogItem = (props) => {
  const title = props.title;
  const text = props.text;
  const image = props.image;
  const poster = props.poster;
  const category = props.category;
  return (
    <div className='blogItem'>
      <img className='blogImage' src={`api/blogs/image/${image}`} />
      <div className='blogTitle LargeBlack'>{title}</div>
      <div className='blogInfoBar'>
        <div className='XSmallBlack'>{poster}</div>
        <div className='blogInfoBarDivider' />
        <div className='XSmallBlack'>{category}</div>
        <div className='blogInfoBarDivider' />
        <div className='XSmallBlack'>3</div>
      </div>
      <div className='blogText XSmallBlack'>{text}</div>
    </div>
  );
};

export default BlogItem;
