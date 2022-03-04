import React from 'react';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Services from './components/Services.jsx';
import News from './components/News.jsx';
import AboutUs from './components/AboutUs.jsx';
import './App.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Base = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/news' element={<News />} />
        <Route exact path='/about-us' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Base;
