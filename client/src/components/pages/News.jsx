import React from 'react';
import Header from '../Header.jsx';
import FirstSection from '../FirstSection.jsx';
import sectionImg from '../../images/PizzaBG.jpg';

const News = () => {
  return (
    <div>
      <Header />
      <FirstSection title='Our Blog' text='THE BEST IN TOWN' sectionImg={sectionImg} />
    </div>
  );
};

export default News;
