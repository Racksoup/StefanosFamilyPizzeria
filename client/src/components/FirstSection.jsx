import React from 'react';
import '../styles/firstSection.scss';
import ItalianButton from './italianButton';

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
        <div className='firstSectionTextHome LargeWhite'>{text}</div>
        <div className='firstSectionTitle XLargeWhiteHandwriting'>{title}</div>
        <ItalianButton text='SEE TODAYS MENU' />
      </div>
    );
  } else {
    return (
      <div className='firstSection' style={{ backgroundImage: 'url(' + sectionImg + ')' }}>
        <div className='firstSectionText LargeWhite'>{text}</div>
        <div className='firstSectionTitle XLargeWhiteHandwriting'>{title}</div>
      </div>
    );
  }
};

export default FirstSection;
