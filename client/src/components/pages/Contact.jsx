import React from 'react';
import Header from '../Header.jsx';
import FirstSection from '../FirstSection.jsx';
import sectionImg from '../../images/PizzaBG2.jpg';

const Contact = () => {
  return (
    <div>
      <Header />
      <FirstSection title='Contact' text='SAY HELLO' sectionImg={sectionImg} />
    </div>
  );
};

export default Contact;
