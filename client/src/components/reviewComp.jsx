import React from 'react';
import '../styles/reviewComp.scss';

const ReviewComp = (props) => {
  const { name, text, srcImg } = props;
  const title = props.title;
  return (
    <div className='reviewComp'>
      <div className='SmallWhite'>{title}</div>
      <div className='reviewCompText XSmallWhite'>{text}</div>
      <img className='reviewCompImg' src={srcImg} />
      <div className='reviewCompName'>
        <div className='XSmallRed'>{name},</div>
        <div className='XSmallWhite'>&nbsp;Customer</div>
      </div>
    </div>
  );
};

export default ReviewComp;
