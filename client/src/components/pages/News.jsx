import React, { useEffect } from 'react';
import { getAllBlogs } from '../../actions/blogs.js';
import Header from '../Header.jsx';
import FirstSection from '../FirstSection.jsx';
import Footer from '../Footer.jsx';
import BlogItem from '../blogItem.jsx';
import sectionImg from '../../images/PizzaBG.jpg';
import '../../styles/news.scss';

import { connect } from 'react-redux';

const News = ({ blogs, getAllBlogs }) => {
  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <div>
      <Header />
      <FirstSection title='Our Blog' text='THE BEST IN TOWN' sectionImg={sectionImg} />
      <div className='blogSection jagged-border'>
        <div className='blogs'>
          {blogs.map((blog) => {
            if (blog.favorite === true) {
              return (
                <BlogItem
                  image={blog.image_filename}
                  title={blog.title}
                  poster={blog.poster}
                  category={blog.category}
                  text={blog.text}
                />
              );
            }
          })}
        </div>
        <div className='blogsSideBar'></div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  blogs: state.blogs.blogs,
});

export default connect(mapStateToProps, { getAllBlogs })(News);
