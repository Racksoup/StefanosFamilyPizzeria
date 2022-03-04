import React from 'react';
import '../styles/SectionTitle.css';
import sectionTitleImage from '../images/TomatoLogo.png';

const SectionTitle = (props) => {
  const title = props.title;
  return (
    <div className='sectionTitleBox'>
      <div className='sectionTitleImg'>
        <img src={sectionTitleImage} />
      </div>
      <div className='LargeBlackHandwriting'>{title}</div>
    </div>
  );
};

export default SectionTitle;
