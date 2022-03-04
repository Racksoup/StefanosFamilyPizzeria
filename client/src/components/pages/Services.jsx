import React from 'react';
import Header from '../Header.jsx';
import FirstSection from '../FirstSection.jsx';
import sectionImg from '../../images/Pizza4.jpg';

const Services = () => {
  return (
    <div>
      <Header />
      <FirstSection title='Menu' text='THE BEST IN TOWN' sectionImg={sectionImg} />
    </div>
  );
};

export default Services;
