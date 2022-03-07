import React from 'react';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import FirstSection from '../FirstSection.jsx';
import TrimBorderSectionBG from '../TrimBorderSectionBG.jsx';
import SectionTitle from '../SectionTitle.jsx';
import sectionImg from '../../images/PizzaBG2.jpg';
import '../../styles/contact.css';

const Contact = () => {
  return (
    <div>
      <Header />
      <FirstSection title='Contact' text='SAY HELLO' sectionImg={sectionImg} />
      <TrimBorderSectionBG sectionHeight='750px'></TrimBorderSectionBG>
      <div className='contactus'>
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
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
