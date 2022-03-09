import React from 'react';
import { setOneBlog } from '../../actions/blogs';
import '../../styles/allBlogs.scss';
import Header from '../Header';
import BlogItem from '../blogItem';

import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

const AllBlogs = ({ searchedBlogs, setOneBlog }) => {
  if (!searchedBlogs) return <Navigate to='/news' />;

  return (
    <div className='allBlogsBG'>
      <Header />
      <div className='allBlogsHeaderSpace'>{}</div>
      <div className='allBlogs jagged-border'>
        <div className='allBlogsContainer'>
          <div className='LargeBlack allBlogsTitle'>All Blogs</div>
          {searchedBlogs.map((blog) => (
            <div className='allBlogsSingleItemContainer' onClick={setOneBlog(blog)}>
              <Link className='linkStyle' to='/blog'>
                <BlogItem blog={blog} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchedBlogs: state.blogs.searchedBlogs,
});

export default connect(mapStateToProps, { setOneBlog })(AllBlogs);
