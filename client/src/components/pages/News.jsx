import React, { useEffect, useState } from 'react';
import { getAllBlogs, setOneBlog, setSearchedBlogs } from '../../actions/blogs.js';
import { getSaleImages } from '../../actions/saleImages.js';
import Header from '../Header.jsx';
import FirstSection from '../FirstSection.jsx';
import Footer from '../Footer.jsx';
import BlogItem from '../blogItem.jsx';
import LatestBlog from '../latestBlog.jsx';
import ItalianButton from '../italianButton.jsx';
import sectionImg from '../../images/PizzaBG.jpg';
import '../../styles/news.scss';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const News = ({ blogs, saleImages, getAllBlogs, getSaleImages, setOneBlog, setSearchedBlogs }) => {
  const [newestBlogs, setNewestBlogs] = useState([]);
  useEffect(() => {
    getAllBlogs();
    getSaleImages();
  }, []);

  useEffect(() => {
    let sortedBlogs = blogs.sort((a, b) => a.date - b.date);
    sortedBlogs.reverse();
    sortedBlogs = sortedBlogs.slice(0, 3);
    setNewestBlogs(sortedBlogs);
  }, [blogs]);

  return (
    <div>
      <Header />
      <FirstSection title='Our Blog' text='THE BEST IN TOWN' sectionImg={sectionImg} />
      <div className='blogSection jagged-border'>
        <div className='blogs'>
          {blogs &&
            blogs.map((blog) => {
              if (blog.favorite === true) {
                return (
                  <Link className='linkStyle' to='/blog'>
                    <div onClick={setOneBlog(blog)}>
                      <BlogItem blog={blog} />
                    </div>
                  </Link>
                );
              }
            })}
        </div>
        <div className='blogsSideBar'>
          <input className='blogSearch' placeholder='Search Blogs' autoComplete='off' />
          {saleImages[0] && (
            <img
              className='saleImage'
              src={`api/saleimages/image/${saleImages[0].image_filename}`}
            />
          )}
          <div className='SmallBlack'>Subscribe to our Newsletter</div>
          <input className='subscribeInput' placeholder='Enter your E-mail' autoComplete='off' />
          <ItalianButton text='Subscribe' width='100%' />
          <div className='newestBlogsTitle SmallBlack'>Latest Posts</div>
          {blogs &&
            newestBlogs.map((blog) => (
              <Link className='linkStyle' to='/blog'>
                <div onClick={setOneBlog(blog)}>
                  <LatestBlog blog={blog} />
                </div>
              </Link>
            ))}
          <div className='allBlogsLink ' onClick={setSearchedBlogs(blogs)}>
            <Link className='linkStyle' to='/blogs'>
              <div className='SmallWhite'>All Blogs</div>
            </Link>
          </div>
          {saleImages[0] && (
            <img
              className='saleImage'
              src={`api/saleimages/image/${saleImages[1].image_filename}`}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  blogs: state.blogs.blogs,
  saleImages: state.saleImages.saleImages,
});

export default connect(mapStateToProps, {
  getAllBlogs,
  getSaleImages,
  setOneBlog,
  setSearchedBlogs,
})(News);
