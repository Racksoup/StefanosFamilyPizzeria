import React from 'react';
import Header from '../Header.jsx';
import FirstSection from '../FirstSection.jsx';
import Footer from '../Footer.jsx';
import sectionImg from '../../images/Pizza4.jpg';
import '../../styles/services.scss';

const Services = () => {
  return (
    <div>
      <Header />
      <FirstSection title='Menu' text='THE BEST IN TOWN' sectionImg={sectionImg} />
      <div className='servicesSection2 jagged-border'></div>
      <div className='servicesSection3'>
        <div className='XLargeWhite'>Add a Fresh Salad to your Order</div>
      </div>
      <div className='servicesSection4 jagged-border'></div>
      <Footer />
    </div>
  );
};

export default Services;
