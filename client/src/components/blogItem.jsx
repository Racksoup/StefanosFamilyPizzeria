import React from 'react';
import '../styles/blogItem.scss';

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
        <div className='blogInfoBarFlex'>
          <div className='XSmallBlack blogInfoBarItem'>{poster}</div>
          <div className='blogInfoBarDivider' />
          <div className='XSmallBlack blogInfoBarItem'>{category}</div>
          <div className='blogInfoBarDivider ' />
          <div className='XSmallBlack blogInfoBarItem'>3</div>
        </div>
      </div>
      <div className='blogText XSmallBlack'>{text}</div>
    </div>
  );
};

export default BlogItem;
