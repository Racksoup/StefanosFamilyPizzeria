import React from 'react';
import headerImage from '../images/StefanosLogo.png';
import dropdownIcon from '../images/GreenDropdownIcon.png';
import '../styles/header.scss';

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
        <div class='list-choice'>
          <div class='list-choice-title'>
            <img className='dropdownIcon' src={dropdownIcon} alt='dropdownIcon' />
          </div>
          <div class='list-choice-objects'>
            <label>
              <input type='radio' name='pageLink' />
              <span>
                <Link className='linkStyle SmallWhite' to='/'>
                  Home
                </Link>
              </span>
            </label>
            <label>
              <input type='radio' name='pageLink' />
              <span>
                <Link className='linkStyle SmallWhite' to='/about-us'>
                  About Us
                </Link>
              </span>
            </label>
            <label>
              <input type='radio' name='pageLink' />
              <span>
                <Link className='linkStyle SmallWhite' to='/services'>
                  Services
                </Link>
              </span>
            </label>
            <label>
              <input type='radio' name='pageLink' />
              <span>
                <Link className='linkStyle SmallWhite' to='/news'>
                  News
                </Link>
              </span>
            </label>
            <label>
              <input type='radio' name='pageLink' />
              <span>
                <Link className='linkStyle SmallWhite' to='/contact'>
                  Contact
                </Link>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
