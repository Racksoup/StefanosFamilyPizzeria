import React from 'react';
import Header from '../Header.jsx';
import FirstSection from '../FirstSection.jsx';
import Footer from '../Footer.jsx';
import ItalianButton from '../italianButton.jsx';
import SectionTitle from '../SectionTitle.jsx';
import ReviewComp from '../reviewComp.jsx';
import sectionImg from '../../images/ChefPizzaBG.jpg';
import SteamyPizza from '../../images/SteamyPizza.jpg';
import revImg from '../../images/Portatedude.jpg';
import SoldPerDay from '../../images/SoldPerDayGraphic.png';
import '../../styles/aboutus.scss';

const AboutUs = () => {
  const loremIpsum =
    'Nunc mattis enim ut tellus. Egestas dui id ornare arcu odio ut sem. Senectus et netus et malesuada fames ac turpis egestas. Elementum nibh tellus molestie nunc non blandit massa. Risus sed vulputate odio ut enim blandit volutpat. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Non tellus orci ac auctor augue mauris augue. Neque viverra justo nec ultrices dui sapien eget mi. Venenatis a condimentum vitae sapien pellentesque habitant. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Eu augue ut lectus arcu bibendum at varius. Id semper risus in hendrerit gravida rutrum quisque non tellus. Purus sit amet volutpat consequat mauris nunc. Turpis egestas pretium aenean pharetra.';
  return (
    <div>
      <Header />
      <FirstSection title='About Our Restaurant' text='THE BEST IN TOWN' sectionImg={sectionImg} />
      <div className='section2 jagged-border'>
        <div className='section2Content'>
          <div className='section2ImageFlex'>
            <img className='section2Image' src={SteamyPizza} />
            <img className='section2Image' src={SteamyPizza} />
          </div>
          <div className='XLargeBlackHandwriting'>We Are Stefano's</div>
          <div className='section2TopText SmallBlack'>
            Commodo ullamcorper a lacus vestibulum sed arcu non. Suspendisse potenti nullam ac
            tortor vitae purus faucibus ornare. Etiam non quam lacus suspendisse.
          </div>
          <div className='section2DescFlex'>
            <div className='section2Desc XSmallBlack'>
              Amet massa vitae tortor condimentum lacinia. Justo nec ultrices dui sapien eget mi
              proin sed libero. Maecenas pharetra convallis posuere morbi leo urna molestie at.
              Rhoncus dolor purus non enim praesent. Nunc eget lorem dolor sed viverra. Pharetra vel
              turpis nunc eget lorem dolor. Eu lobortis elementum nibh tellus molestie. Magna ac
              placerat vestibulum lectus. Etiam erat velit scelerisque in dictum non. Est sit amet
              facilisis magna etiam tempor orci eu. Nec sagittis aliquam malesuada bibendum arcu
              vitae elementum curabitur. Placerat orci nulla pellentesque dignissim enim sit amet
              venenatis. Neque ornare aenean euismod elementum nisi. Velit sed ullamcorper morbi
              tincidunt ornare massa eget. Nibh ipsum consequat nisl vel pretium lectus quam id leo.
              Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Viverra adipiscing
              at in tellus integer. Aliquam sem et tortor consequat id porta nibh venenatis cras.
              Dui accumsan sit amet nulla facilisi morbi tempus.
            </div>
            <div className='section2Desc XSmallBlack'>
              Amet massa vitae tortor condimentum lacinia. Justo nec ultrices dui sapien eget mi
              proin sed libero. Maecenas pharetra convallis posuere morbi leo urna molestie at.
              Rhoncus dolor purus non enim praesent. Nunc eget lorem dolor sed viverra. Pharetra vel
              turpis nunc eget lorem dolor. Eu lobortis elementum nibh tellus molestie. Magna ac
              placerat vestibulum lectus. Etiam erat velit scelerisque in dictum non. Est sit amet
              facilisis magna etiam tempor orci eu. Nec sagittis aliquam malesuada bibendum arcu
              vitae elementum curabitur. Placerat orci nulla pellentesque dignissim enim sit amet
              venenatis. Neque ornare aenean euismod elementum nisi. Velit sed ullamcorper morbi
              tincidunt ornare massa eget. Nibh ipsum consequat nisl vel pretium lectus quam id leo.
              Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Viverra adipiscing
              at in tellus integer. Aliquam sem et tortor consequat id porta nibh venenatis cras.
              Dui accumsan sit amet nulla facilisi morbi tempus.
            </div>
          </div>
          <div className='section2ButtonFlex'>
            <ItalianButton text='SEE TODAYS MENU' />
            <ItalianButton text='ORDER NOW' />
          </div>
        </div>
      </div>
      <div className='section3'>
        <SectionTitle title='What Clients Say' textColor='white' />
        <div className='reviewFlex'>
          <ReviewComp title='Apple Apple' text={loremIpsum} srcImg={revImg} name='cucumber' />
          <ReviewComp title='Apple Apple' text={loremIpsum} srcImg={revImg} name='cucumber' />
          <ReviewComp title='Apple Apple' text={loremIpsum} srcImg={revImg} name='cucumber' />
        </div>
      </div>
      <div className='section4 jagged-border'>
        <img className='section4Img' src={SoldPerDay} alt='sold-per-day' />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
