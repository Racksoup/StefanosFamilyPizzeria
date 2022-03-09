import React from 'react';
import '../styles/blogItem.scss';

const BlogItem = (props) => {
  const title = props.blog.title;
  const text = props.blog.text;
  const image = props.blog.image_filename;
  const poster = props.blog.poster;
  const category = props.blog.category;
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
