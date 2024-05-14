import React, { useEffect, useState, useRef } from "react";
import Header from "../Header.jsx";
import FirstSection from "../FirstSection.jsx";
import ItemDisplay from "../ItemDisplay.jsx";
import SectionTitle from "../SectionTitle.jsx";
import MenuItem from "../menuItem.jsx";
import Footer from "../Footer.jsx";
import "../../styles/home.scss";
import sectionImg from "../../images/PizzaBackground.jpg";
import section2Img1 from "../../images/HalfAPizzaCut.png";
import section2Img2 from "../../images/TomatoesNoShadow.png";
import section3Img from "../../images/Pizza3.jpg";
import {
  getAllMenuItems,
  getPizzaMenuItems,
  getPastaMenuItems,
  getSaladMenuItems,
  getDesertMenuItems,
  getBestSellers,
} from "../../actions/menuItems.js";

import { connect } from "react-redux";

const Section2 = () => {
  return (
    <div className="homeSection2 jagged-border">
      <SectionTitle title="Our Story" textColor="black" />
      <div className="descBox">
        <div className="descText XSmallBlack">
          At Stefano's, we believe in more than just making pizza—we believe in
          creating a warm, inviting space where family and friends can gather to
          enjoy delicious food and create lasting memories. Our journey began
          with Stefano, a passionate pizza enthusiast who dreamed of sharing his
          love for authentic Italian pizza with his community. Stefano's Family
          Pizzeria is rooted in the rich traditions of Italian cuisine. Our
          recipes have been passed down through generations, starting from
          Stefano’s great-grandmother in Naples, the birthplace of pizza.
        </div>
        <div className="descText XSmallBlack">
          We are dedicated to delivering a dining experience that embodies the
          spirit of family, authenticity, and quality. Our dough is made fresh
          daily, our sauces simmered to perfection, and our toppings are
          hand-picked to bring you the best flavors. Whether you’re in the mood
          for a classic Margherita, a hearty Meat Lover's, or a custom creation
          of your own, our menu offers something for everyone. At Stefano's, we
          are more than just a pizzeria; we are a part of the community. We
          believe in giving back and regularly participate in local events,
          fundraisers, and support local schools.
        </div>
      </div>
    </div>
  );
};

const Section2Images = () => {
  return (
    <div className="homeSection2Images">
      <div className="homeSection2Image1">
        <img src={section2Img1} />
      </div>
      <div className="homeSection2Image2">
        <img src={section2Img2} />
      </div>
    </div>
  );
};

const Section3 = (props) => {
  const bestSellers = props.bestSellers;
  return (
    <div
      className="homeSection3"
      style={{ backgroundImage: "url(" + section3Img + ")" }}
    >
      <SectionTitle title="Best Sellers" textColor="white" />
      <div className="bestSellersGrid">
        {bestSellers &&
          bestSellers.map((item) => {
            return (
              <div className="itemDisplayWithButton">
                <ItemDisplay
                  title={item.title}
                  price={item.price}
                  srcImg={item.image_filename}
                  textColor="white"
                />
                <div className="orderButton transparentBGHover">Order Now</div>
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
  const testRef = useRef(null);

  const onHeaderButtonClick = () => {
    testRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <FirstSection
        title="Pizza & Pasta"
        text="BEST IN TOWN"
        sectionImg={sectionImg}
        onHeaderButtonClick={onHeaderButtonClick}
        sectionSize="1000px"
      />
      <Section2Images />
      <Section2 />
      <Section3 bestSellers={bestSellers} />
      <div className="homeSection4 jagged-border" ref={testRef}>
        <SectionTitle title="Our Menu" textColor="black" />
        <div className="menuLinks">
          {tabSel === 0 ? (
            <div className="menuLinkBoxSelected">
              <div className="SmallWhite">ALL</div>
            </div>
          ) : (
            <button className="menuLinkBox" onClick={() => setTabSel(0)}>
              <div className="SmallBlack">ALL</div>
            </button>
          )}
          {tabSel === 1 ? (
            <div className="menuLinkBoxSelected">
              <div className="SmallWhite">PIZZA</div>
            </div>
          ) : (
            <button className="menuLinkBox" onClick={() => setTabSel(1)}>
              <div className="SmallBlack">PIZZA</div>
            </button>
          )}
          {tabSel === 2 ? (
            <div className="menuLinkBoxSelected">
              <div className="SmallWhite">PASTA</div>
            </div>
          ) : (
            <button className="menuLinkBox" onClick={() => setTabSel(2)}>
              <div className="SmallBlack">PASTA</div>
            </button>
          )}
          {tabSel === 3 ? (
            <div className="menuLinkBoxSelected">
              <div className="SmallWhite">SALADS</div>
            </div>
          ) : (
            <button className="menuLinkBox" onClick={() => setTabSel(3)}>
              <div className="SmallBlack">SALADS</div>
            </button>
          )}
          {tabSel === 4 ? (
            <div className="menuLinkBoxSelected">
              <div className="SmallWhite">DESERTS</div>
            </div>
          ) : (
            <button className="menuLinkBox" onClick={() => setTabSel(4)}>
              <div className="SmallBlack">DESERTS</div>
            </button>
          )}
        </div>
        <div className="menuBarRed" />
        {tabSel === 0 ? (
          <div className="menuGrid">
            {allMenuItems.map((item) => {
              return <MenuItem item={item} />;
            })}
          </div>
        ) : null}
        {tabSel === 1 ? (
          <div className="menuGrid">
            {pizzaMenuItems.map((item) => {
              return <MenuItem item={item} />;
            })}
          </div>
        ) : null}
        {tabSel === 2 ? (
          <div className="menuGrid">
            {pastaMenuItems.map((item) => {
              return <MenuItem item={item} />;
            })}
          </div>
        ) : null}
        {tabSel === 3 ? (
          <div className="menuGrid">
            {saladMenuItems.map((item) => {
              return <MenuItem item={item} />;
            })}
          </div>
        ) : null}
        {tabSel === 4 ? (
          <div className="menuGrid">
            {desertMenuItems.map((item) => {
              return <MenuItem item={item} />;
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
