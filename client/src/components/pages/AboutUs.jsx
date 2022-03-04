import React from 'react';
import Header from '../Header.jsx';
import FirstSection from '../FirstSection.jsx';
import sectionImg from '../../images/ChefPizzaBG.jpg';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <FirstSection title='About Our Restaurant' text='THE BEST IN TOWN' sectionImg={sectionImg} />
    </div>
  );
};

export default AboutUs;