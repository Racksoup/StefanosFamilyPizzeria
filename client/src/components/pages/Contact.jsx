import React, { useState } from 'react';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import FirstSection from '../FirstSection.jsx';
import SectionTitle from '../SectionTitle.jsx';
import ItalianButton from '../italianButton.jsx';
import sectionImg from '../../images/PizzaBG2.jpg';
import '../../styles/contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onEnter = () => {};
  return (
    <div>
      <Header />
      <FirstSection title='Contact' text='SAY HELLO' sectionImg={sectionImg} />
      <div className='contactus jagged-border'>
        <SectionTitle title='Say Hello' textColor='black' />
        <div className='SmallBlack contacth2'>Say Hello, Send us a Message</div>
        <div className='XSmallBlack contactText'>
          Viverra vitae congue eu consequat ac felis donec et. Placerat in egestas erat imperdiet.
          Cras ornare arcu dui vivamus arcu. At auctor urna nunc id cursus metus. Aliquet eget sit
          amet tellus cras adipiscing enim. Et leo duis ut diam quam. Tempor orci eu lobortis
          elementum nibh tellus molestie. Lectus nulla at volutpat diam ut venenatis tellus in
          metus. Consequat id porta nibh venenatis cras sed felis eget velit. Donec adipiscing
          tristique risus nec. Sit amet consectetur adipiscing elit duis tristique sollicitudin
          nibh. Viverra nibh cras pulvinar mattis nunc sed.
        </div>
        <div className='contactForm'>
          <div className='nameEmailFlex'>
            <input
              className='nameInput XSmallBlack'
              name='name'
              onChange={(e) => onChange(e)}
              placeholder='Name'
              autoComplete='off'
            />
            <input
              className='emailInput XSmallBlack'
              name='email'
              onChange={(e) => onChange(e)}
              placeholder='E-mail'
              autoComplete='off'
            />
          </div>
          <input
            className='subject XSmallBlack'
            name='subject'
            onChange={(e) => onChange(e)}
            placeholder='Subject'
            autoComplete='off'
          />
          <textarea
            className='message XSmallBlack'
            name='message'
            onChange={(e) => onChange(e)}
            placeholder='Message'
            autoComplete='off'
          />
          <div onClick={() => onEnter()}>
            <ItalianButton text='SEND MESSAGE' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
