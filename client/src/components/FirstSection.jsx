import React from 'react';
import '../styles/firstSection.css';

const FirstSection = (props) => {
  const title = props.title;
  const text = props.text;
  const sectionImg = props.sectionImg;
  const sectionSize = props.sectionSize;

  if (sectionSize) {
    return (
      <div
        className='firstSection firstSectionHome'
        style={{ backgroundImage: 'url(' + sectionImg + ')' }}
      >
        <div className='firstSectionText MediumWhite'>{text}</div>
        <div className='firstSectionTitle XLargeWhiteHandwriting'>{title}</div>
      </div>
    );
  } else {
    return (
      <div className='firstSection' style={{ backgroundImage: 'url(' + sectionImg + ')' }}>
        <div className='firstSectionText MediumWhite'>{text}</div>
        <div className='firstSectionTitle XLargeWhiteHandwriting'>{title}</div>
      </div>
    );
  }
};

export default FirstSection;