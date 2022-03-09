import React, { useEffect, useState } from 'react';
import Header from '../Header.jsx';
import FirstSection from '../FirstSection.jsx';
import ItemDisplay from '../ItemDisplay.jsx';
import SectionTitle from '../SectionTitle.jsx';
import MenuItem from '../menuItem.jsx';
import Footer from '../Footer.jsx';
import '../../styles/home.scss';
import sectionImg from '../../images/PizzaBackground.jpg';
import section2Img1 from '../../images/HalfAPizzaCut.png';
import section2Img2 from '../../images/TomatoesNoShadow.png';
import section3Img from '../../images/Pizza3.jpg';
import {
  getAllMenuItems,
  getPizzaMenuItems,
  getPastaMenuItems,
  getSaladMenuItems,
  getDesertMenuItems,
  getBestSellers,
} from '../../actions/menuItems.js';

import { connect } from 'react-redux';

const Section2 = () => {
  return (
    <div className='homeSection2 jagged-border'>
      <SectionTitle title='Our Story' textColor='black' />
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
    <div className='homeSection2Images'>
      <div className='homeSection2Image1'>
        <img src={section2Img1} />
      </div>
      <div className='homeSection2Image2'>
        <img src={section2Img2} />
      </div>
    </div>
  );
};

const Section3 = (props) => {
  const bestSellers = props.bestSellers;
  return (
    <div className='homeSection3' style={{ backgroundImage: 'url(' + section3Img + ')' }}>
      <SectionTitle title='Best Sellers' textColor='white' />
      <div className='bestSellersGrid'>
        {bestSellers &&
          bestSellers.map((item) => {
            return (
              <div className='itemDisplayWithButton'>
                <ItemDisplay
                  title={item.title}
                  price={item.price}
                  srcImg={item.image_filename}
                  textColor='white'
                />
                <div className='orderButton transparentBGHover'>Order Now</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const Home = ({
  bestSellers,
  allMenuItems,
  pizzaMenuItems,
  pastaMenuItems,
  saladMenuItems,
  desertMenuItems,
  getBestSellers,
  getAllMenuItems,
  getPizzaMenuItems,
  getPastaMenuItems,
  getSaladMenuItems,
  getDesertMenuItems,
}) => {
  useEffect(() => {
    getBestSellers();
    getAllMenuItems();
    getPizzaMenuItems();
    getPastaMenuItems();
    getSaladMenuItems();
    getDesertMenuItems();
  }, []);

  const [tabSel, setTabSel] = useState(0);

  return (
    <div>
      <Header />
      <FirstSection
        title='Pizza & Pasta'
        text='BEST IN TOWN'
        sectionImg={sectionImg}
        sectionSize='1000px'
      />
      <Section2Images />
      <Section2 />
      <Section3 bestSellers={bestSellers} />
      <div className='homeSection4 jagged-border'>
        <SectionTitle title='Our Menu' textColor='black' />
        <div className='menuLinks'>
          {tabSel === 0 ? (
            <div className='menuLinkBoxSelected'>
              <div className='SmallWhite'>ALL</div>
            </div>
          ) : (
            <button className='menuLinkBox' onClick={() => setTabSel(0)}>
              <div className='SmallBlack'>ALL</div>
            </button>
          )}
          {tabSel === 1 ? (
            <div className='menuLinkBoxSelected'>
              <div className='SmallWhite'>PIZZA</div>
            </div>
          ) : (
            <button className='menuLinkBox' onClick={() => setTabSel(1)}>
              <div className='SmallBlack'>PIZZA</div>
            </button>
          )}
          {tabSel === 2 ? (
            <div className='menuLinkBoxSelected'>
              <div className='SmallWhite'>PASTA</div>
            </div>
          ) : (
            <button className='menuLinkBox' onClick={() => setTabSel(2)}>
              <div className='SmallBlack'>PASTA</div>
            </button>
          )}
          {tabSel === 3 ? (
            <div className='menuLinkBoxSelected'>
              <div className='SmallWhite'>SALADS</div>
            </div>
          ) : (
            <button className='menuLinkBox' onClick={() => setTabSel(3)}>
              <div className='SmallBlack'>SALADS</div>
            </button>
          )}
          {tabSel === 4 ? (
            <div className='menuLinkBoxSelected'>
              <div className='SmallWhite'>DESERTS</div>
            </div>
          ) : (
            <button className='menuLinkBox' onClick={() => setTabSel(4)}>
              <div className='SmallBlack'>DESERTS</div>
            </button>
          )}
        </div>
        <div className='menuBarRed' />
        {tabSel === 0 ? (
          <div className='menuGrid'>
            {allMenuItems.map((item) => {
              return (
                <MenuItem
                  itemImage={item.image_filename}
                  itemTitle={item.title}
                  itemPrice={item.price}
                  itemText={item.text}
                />
              );
            })}
          </div>
        ) : null}
        {tabSel === 1 ? (
          <div className='menuGrid'>
            {pizzaMenuItems.map((item) => {
              return (
                <MenuItem
                  itemImage={item.image_filename}
                  itemTitle={item.title}
                  itemPrice={item.price}
                  itemText={item.text}
                />
              );
            })}
          </div>
        ) : null}
        {tabSel === 2 ? (
          <div className='menuGrid'>
            {pastaMenuItems.map((item) => {
              return (
                <MenuItem
                  itemImage={item.image_filename}
                  itemTitle={item.title}
                  itemPrice={item.price}
                  itemText={item.text}
                />
              );
            })}
          </div>
        ) : null}
        {tabSel === 3 ? (
          <div className='menuGrid'>
            {saladMenuItems.map((item) => {
              return (
                <MenuItem
                  itemImage={item.image_filename}
                  itemTitle={item.title}
                  itemPrice={item.price}
                  itemText={item.text}
                />
              );
            })}
          </div>
        ) : null}
        {tabSel === 4 ? (
          <div className='menuGrid'>
            {desertMenuItems.map((item) => {
              return (
                <MenuItem
                  itemImage={item.image_filename}
                  itemTitle={item.title}
                  itemPrice={item.price}
                  itemText={item.text}
                />
              );
            })}
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  bestSellers: state.menuItems.bestSellers,
  allMenuItems: state.menuItems.allMenuItems,
  pizzaMenuItems: state.menuItems.pizzaMenuItems,
  pastaMenuItems: state.menuItems.pastaMenuItems,
  saladMenuItems: state.menuItems.saladMenuItems,
  desertMenuItems: state.menuItems.desertMenuItems,
});

export default connect(mapStateToProps, {
  getBestSellers,
  getAllMenuItems,
  getPizzaMenuItems,
  getPastaMenuItems,
  getSaladMenuItems,
  getDesertMenuItems,
})(Home);
