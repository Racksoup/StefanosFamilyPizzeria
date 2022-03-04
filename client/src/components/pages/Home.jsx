import React from 'react';
import Header from '../Header.jsx';
import FirstSection from '../FirstSection.jsx';
import TrimBorderSectionBG from '../TrimBorderSectionBG.jsx';
import SectionTitle from '../SectionTitle.jsx';
import '../../styles/trimBorderSectionBG.css';
import '../../styles/home.css';
import sectionImg from '../../images/PizzaBackground.jpg';
import section2Img1 from '../../images/HalfAPizzaCut.png';
import section2Img2 from '../../images/TomatoesNoShadow.png';

const Section2 = () => {
  return (
    <div className='trimBorderSection' style={{ height: '550px' }}>
      <SectionTitle title='Our Story' />
      <div className='descBox'>
        <div className='descText XSmallBlack'>
          Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Malesuada fames
          ac turpis egestas integer eget aliquet nibh praesent. Feugiat nisl pretium fusce id velit
          ut. Pulvinar mattis nunc sed blandit libero volutpat sed. Suspendisse potenti nullam ac
          tortor vitae. At auctor urna nunc id. Eu scelerisque felis imperdiet proin fermentum leo.
          Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Maecenas ultricies mi
          eget mauris pharetra et ultrices. Eu augue ut lectus arcu bibendum at. Vitae tempus quam
          pellentesque nec. Enim praesent elementum facilisis leo vel fringilla est ullamcorper
          eget. A erat nam at lectus urna. Enim neque volutpat ac tincidunt vitae semper quis
          lectus.
        </div>
        <div className='descText XSmallBlack'>
          Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Malesuada fames
          ac turpis egestas integer eget aliquet nibh praesent. Feugiat nisl pretium fusce id velit
          ut. Pulvinar mattis nunc sed blandit libero volutpat sed. Suspendisse potenti nullam ac
          tortor vitae. At auctor urna nunc id. Eu scelerisque felis imperdiet proin fermentum leo.
          Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Maecenas ultricies mi
          eget mauris pharetra et ultrices. Eu augue ut lectus arcu bibendum at. Vitae tempus quam
          pellentesque nec. Enim praesent elementum facilisis leo vel fringilla est ullamcorper
          eget. A erat nam at lectus urna. Enim neque volutpat ac tincidunt vitae semper quis
          lectus.
        </div>
      </div>
    </div>
  );
};

const Section2Images = () => {
  return (
    <div className='section2Images'>
      <div className='section2Image1'>
        <img src={section2Img1} />
      </div>
      <div className='section2Image2'>
        <img src={section2Img2} />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Header />
      <FirstSection
        title='Pizza & Pasta'
        text='BEST IN TOWN'
        sectionImg={sectionImg}
        sectionSize='1000px'
      />
      <TrimBorderSectionBG sectionHeight='550px'></TrimBorderSectionBG>
      <Section2Images />
      <Section2 />
      <div style={{ height: '200px', backgroundColor: 'red' }}></div>
    </div>
  );
};

export default Home;
