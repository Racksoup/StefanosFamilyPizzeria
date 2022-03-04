import React from 'react';
import '../styles/trimBorderSectionBG.css';

const TrimBorderSectionBG = (props) => {
  const sectionHeight = props.sectionHeight;
  return (
    <div className='trimBorderSectionBG jagged-border' style={{ height: sectionHeight }}></div>
  );
};

export default TrimBorderSectionBG;
