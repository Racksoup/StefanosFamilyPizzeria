import React from 'react';
import '../styles/SectionTitle.css';
import sectionTitleImage from '../images/TomatoLogo.png';

const SectionTitle = (props) => {
  const title = props.title;
  const textColor = props.textColor;
  return (
    <div className='sectionTitleBox'>
      <div className='sectionTitleImg'>
        <img src={sectionTitleImage} />
      </div>
      <BlackOrWhite textColor={textColor} title={title} />
    </div>
  );
};

const BlackOrWhite = (props) => {
  const textColor = props.textColor;
  const title = props.title;
  if (textColor === 'white') {
    return <div className='LargeWhiteHandwriting'>{title}</div>;
  }
  if (textColor === 'black') {
    return <div className='LargeBlackHandwriting'>{title}</div>;
  } else return null;
};

export default SectionTitle;
