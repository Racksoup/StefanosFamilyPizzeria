import React from 'react';
import '../../styles/singleBlog.scss';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const SingleBlog = ({ blog }) => {
  if (!blog) return <Navigate to='/news' />;

  const newDate = new Date(blog.date);

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
    <div className='singleBlogBG'>
      <Header />

      <div className='headerSpace'>{}</div>
      <div className='singleBlog jagged-border'>
        <div className='singleBlogContainer'>
          <div className='MediumBlack singleBlogTitle'>{blog.title}</div>
          <img className='singleBlogImage' src={`/api/blogs/image/${blog.image_filename}`} />
          <div className='singleBlogInfoBar'>
            <div className='singleBlogInfoBarFlex'>
              <div className='XSmallBlack singleBlogInfoBarItem'>{blog.poster}</div>
              <div className='singleBlogInfoBarDivider' />
              <div className='XSmallBlack singleBlogInfoBarItem'>{blog.category}</div>
              <div className='singleBlogInfoBarDivider ' />
              <div className='XSmallBlack singleBlogInfoBarItem'>3</div>
            </div>
            <div className='singleBlogDate SmallRed'>
              {months[newDate.getMonth()]} / {newDate.getDate()} / {newDate.getFullYear()}
            </div>
          </div>
          <div className='XSmallBlack singleBlogText'>{blog.text}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  blog: state.blogs.blog,
});

export default connect(mapStateToProps, {})(SingleBlog);
