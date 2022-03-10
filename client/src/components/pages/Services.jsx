import React, { useEffect } from 'react';
import Header from '../Header.jsx';
import FirstSection from '../FirstSection.jsx';
import Footer from '../Footer.jsx';
import ItemDisplay from '../ItemDisplay.jsx';
import MenuItem from '../menuItem.jsx';
import LongItemDisplay from '../longItemDisplay.jsx';
import sectionImg from '../../images/Pizza4.jpg';
import '../../styles/services.scss';
import { getPizzaMenuItems, getPastaMenuItems } from '../../actions/menuItems.js';

import { connect } from 'react-redux';

const Services = ({ pizzaMenuItems, pastaMenuItems, getPastaMenuItems, getPizzaMenuItems }) => {
  useEffect(() => {
    getPizzaMenuItems();
    getPastaMenuItems();
  }, []);
  let s2TopDisplayLimit = 0;
  let s2BottomDisplayLimit = 0;
  let s4TopDisplayLimit = 0;
  let s4BottomDisplayLimit = 0;
  return (
    <div>
      <Header />
      <FirstSection title='Menu' text='THE BEST IN TOWN' sectionImg={sectionImg} />
      <div className='servicesSection2 jagged-border'>
        <div className='servicesSection2Title XLargeBlackHandwriting'>Choose From Pizza</div>
        <div className='servicesSection2TopDisplay'>
          {pizzaMenuItems.map((item) => {
            if (s2TopDisplayLimit < 4) {
              if (item.bestSeller === true) {
                s2TopDisplayLimit += 1;
                return (
                  <div className='itemDisplayPositioning'>
                    <ItemDisplay
                      title={item.title}
                      price={item.price}
                      srcImg={item.image_filename}
                      textColor='black'
                    />
                  </div>
                );
              } else return null;
            }
          })}
        </div>
        <div className='servicesSection2BottomDisplay'>
          <div className='menuGrid'>
            {pizzaMenuItems.map((item) => {
              if (s2BottomDisplayLimit < 8) {
                if (item.bestSeller === false || item.bestSeller === undefined) {
                  s2BottomDisplayLimit += 1;
                  return <MenuItem item={item} />;
                } else return null;
              }
            })}
          </div>
        </div>
      </div>
      <div className='servicesSection3'>
        <div className='XLargeWhite'>Add a Fresh Salad to your Order</div>
      </div>
      <div className='servicesSection4 jagged-border'>
        <div className='servicesSection2Title XLargeBlackHandwriting'>Choose From Pasta</div>
        <div className='servicesSection4TopDisplay'>
          {pastaMenuItems.map((item) => {
            if (s4TopDisplayLimit < 2) {
              if (item.bestSeller === true) {
                return (
                  <LongItemDisplay
                    text={item.text}
                    price={item.price}
                    title={item.title}
                    image={item.image_filename}
                  />
                );
              }
            }
          })}
        </div>
        <div className='servicesSection4Bar' />
        <div className='menuGrid'>
          {pastaMenuItems.map((item) => {
            if (s4BottomDisplayLimit < 8) {
              if (item.bestSeller === false || item.bestSeller === undefined) {
                return <MenuItem item={item} />;
              }
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  pizzaMenuItems: state.menuItems.pizzaMenuItems,
  pastaMenuItems: state.menuItems.pastaMenuItems,
});

export default connect(mapStateToProps, { getPizzaMenuItems, getPastaMenuItems })(Services);
