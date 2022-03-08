import React from 'react';
import '../styles/latestBlog.scss';

const LatestBlog = (props) => {
  const title = props.blog.title;
  const date = new Date(props.blog.date);
  const image = props.blog.image_filename;
  const category = props.blog.category;

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div className='latestBlog'>
      <img className='latestBlogImg' src={`api/blogs/image/${image}`} />
      <div className='latestBlogCategory XSmallBlack'>{category}</div>
      <div className='latestBlogTitle SmallBlack'>{title}</div>
      <div className='latestBlogDate SmallRed'>
        {months[date.getMonth()]} / {date.getDay()} / {date.getFullYear()}
      </div>
    </div>
  );
};

export default LatestBlog;
