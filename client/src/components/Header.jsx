import React from 'react';
import headerImage from '../images/StefanosLogo.png';
import '../styles/header.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerBox'>
        <div className='headerLogo'>
          <img src={headerImage} />
        </div>
        <div className='headerButtons'>
          <Link className='linkStyle' to='/'>
            <div className=' SmallWhite'>Home</div>
          </Link>
          <Link className='linkStyle' to='/about-us'>
            <div className='SmallWhite'>About Us</div>
          </Link>
          <Link className='linkStyle' to='/services'>
            <div className='SmallWhite'>Services</div>
          </Link>
          <Link className='linkStyle' to='/news'>
            <div className='SmallWhite'>News</div>
          </Link>
          <Link className='linkStyle' to='/contact'>
            <div className='SmallWhite'>Contact</div>
          </Link>
        </div>
        <div className='headerContactButton redBGHover'>
          <div className='XSmallWhite'>ORDER: +1 613 872 8393</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
