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

import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const News = ({ blogs, saleImages, getAllBlogs, getSaleImages, setOneBlog, setSearchedBlogs }) => {
  const [newestBlogs, setNewestBlogs] = useState([]);
  const [redirectBlogs, setRedirectBlogs] = useState(false);
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState();
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

  const onSearchEnter = (event) => {
    if (event.key === 'Enter') {
      if (searchList.length > 0) {
        setSearchedBlogs(searchList);
        setRedirectBlogs(true);
      }
    }
  };
  const onSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
    const filtered = blogs.filter((blog) => {
      return blog.title.toLowerCase().includes(search.toLowerCase());
    });
    setSearchList(filtered);
  };

  if (redirectBlogs) {
    return <Navigate to='/blogs' />;
  }

  return (
    <div>
      <Header />
      <FirstSection title='Our Blog' text='THE BEST IN TOWN' sectionImg={sectionImg} />
      <div className='blogSection jagged-border'>
        <input className='mobileBlogSearch' placeholder='Search Blogs' autoComplete='off' />
        <div className='blogs'>
          {blogs &&
            blogs.map((blog) => {
              if (blog.favorite === true) {
                return (
                  <Link className='linkStyle' to='/blog'>
                    <div onClick={() => setOneBlog(blog)}>
                      <BlogItem blog={blog} />
                    </div>
                  </Link>
                );
              }
            })}
        </div>
        <div className='blogsSideBar'>
          <input
            className='blogSearch'
            placeholder='Search Blogs'
            autoComplete='off'
            name='search'
            onChange={(e) => onSearchChange(e)}
            onKeyDown={(event) => onSearchEnter(event)}
          />
          {saleImages[0] && (
            <Link to='/services'>
              <img
                className='saleImage'
                src={`api/saleimages/image/${saleImages[0].image_filename}`}
              />
            </Link>
          )}
          <div className='SmallBlack'>Subscribe to our Newsletter</div>
          <input className='subscribeInput' placeholder='Enter your E-mail' autoComplete='off' />
          <ItalianButton text='Subscribe' width='100%' />
          <div className='newestBlogsTitle SmallBlack'>Latest Posts</div>
          {blogs &&
            newestBlogs.map((blog) => (
              <Link className='linkStyle' to='/blog'>
                <div onClick={() => setOneBlog(blog)}>
                  <LatestBlog blog={blog} />
                </div>
              </Link>
            ))}
          <div className='allBlogsLink' onClick={() => setSearchedBlogs(blogs)}>
            <Link className='linkStyle' to='/blogs'>
              <ItalianButton text='All Blogs' width='100%' />
            </Link>
          </div>
          {saleImages[1] && (
            <Link to='/services'>
              <img
                className='saleImage'
                src={`api/saleimages/image/${saleImages[1].image_filename}`}
              />
            </Link>
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
