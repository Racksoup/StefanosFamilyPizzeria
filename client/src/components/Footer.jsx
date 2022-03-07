import React from 'react';
import '../styles/footer.css';
import ChiliPeppers from '../images/ChiliPeppers.jpg';
import headerImage from '../images/StefanosLogo.png';

const Footer = () => {
  return (
    <div className='footer' style={{ backgroundImage: 'url(' + ChiliPeppers + ')' }}>
      <div className='footerLogo'>
        <img src={headerImage} />
      </div>
      <div className='footerItemBox'>
        <div className='XSmallGreen'>Address</div>
        <div className='XSmallWhite'>381 Elgin Street, Ottawa, K!R 3P8</div>
      </div>
      <div className='footerItemBox'>
        <div className='XSmallGreen'>Phone</div>
        <div className='XSmallWhite'>+1 613 872 8393</div>
      </div>
      <div className='footerItemBox'>
        <div className='XSmallGreen'>Email</div>
        <div className='XSmallWhite'>Stefano@gmail.com</div>
      </div>
    </div>
  );
};

export default Footer;
