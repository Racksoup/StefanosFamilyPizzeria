import React, { useEffect } from 'react';
import { loadUser } from './actions/auth';
import Home from './components/pages/Home.jsx';
import Contact from './components/pages/Contact.jsx';
import Services from './components/pages/Services.jsx';
import News from './components/pages/News.jsx';
import AboutUs from './components/pages/AboutUs.jsx';
import SingleBlog from './components/pages/SingleBlog.jsx';
import AllBlogs from './components/pages/AllBlogs.jsx';
import AdminLogin from './components/pages/AdminLogin.jsx';
import AdminDashboard from './components/pages/AdminDashboard.jsx';
import './styles/App.scss';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Base = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  }, []);
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
        <Route exact path='/admin' element={<AdminLogin />} />
        <Route exact path='/admin-dashboard' element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default connect(null, { loadUser })(Base);
