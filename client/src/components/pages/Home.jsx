import React from 'react';
import Header from '../Header.jsx';
import FirstSection from '../FirstSection.jsx';
import sectionImg from '../../images/PizzaBackground.jpg';

const Home = () => {
  return (
    <div>
      <Header />
      <FirstSection
        title='Pizza & Pasta'
        text='BEST IN TOWN'
        sectionImg={sectionImg}
        sectionSize='1000px'
      />
    </div>
  );
};

export default Home;
