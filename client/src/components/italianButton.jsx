import React from 'react';
import '../styles/italianButton.scss';

const ItalianButton = (props) => {
  const text = props.text;
  return (
    <div className='italianButton'>
      <div className='top XSmallWhite'>{text}</div>
      <div className='middle' />
      <div className='bottom' />
    </div>
  );
};

export default ItalianButton;
