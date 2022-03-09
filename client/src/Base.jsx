import React from 'react';
import Home from './components/pages/Home.jsx';
import Contact from './components/pages/Contact.jsx';
import Services from './components/pages/Services.jsx';
import News from './components/pages/News.jsx';
import AboutUs from './components/pages/AboutUs.jsx';
import SingleBlog from './components/pages/SingleBlog.jsx';
import AllBlogs from './components/pages/AllBlogs.jsx';
import './styles/App.scss';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

const Base = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/news' element={<News />} />
        <Route exact path='/about-us' element={<AboutUs />} />
        <Route exact path='/blog' element={<SingleBlog />} />
        <Route exact path='/blogs' element={<AllBlogs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Base;
