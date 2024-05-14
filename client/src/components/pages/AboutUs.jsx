import React, { useRef } from "react";
import Header from "../Header.jsx";
import FirstSection from "../FirstSection.jsx";
import Footer from "../Footer.jsx";
import ItalianButton from "../italianButton.jsx";
import SectionTitle from "../SectionTitle.jsx";
import ReviewComp from "../reviewComp.jsx";
import sectionImg from "../../images/ChefPizzaBG.jpg";
import SteamyPizza from "../../images/SteamyPizza.jpg";
import revImg from "../../images/Portatedude.jpg";
import SoldPerDay from "../../images/SoldPerDayGraphic.png";
import "../../styles/aboutus.scss";

import { Link } from "react-router-dom";

const AboutUs = () => {
  const review1 =
    "Stefano's Family Pizzeria is a gem! The pizza is incredibly authentic, with fresh ingredients and perfect crust. The atmosphere is cozy and welcoming, making it the ideal spot for family dinners. Highly recommend the Margherita pizza—it's a slice of Italy right here in town!";

  const review2 =
    "I've tried many pizzerias, but Stefano's stands out for its exceptional quality and friendly service. The Meat Lover's pizza is loaded with toppings, and the flavors are amazing. It's clear they put a lot of care into their food. I'll definitely be coming back for more!";

  const review3 =
    "Stefano's is our go-to spot for pizza nights! The staff is always so friendly, and the pizza never disappoints. The dough is perfectly crispy, and the sauce is full of flavor. We love the variety on the menu—something for everyone in the family. Two thumbs up!";

  const topRef = useRef(null);
  const linkToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div ref={topRef}>
      <Header />
      <FirstSection
        title="About Our Restaurant"
        text="THE BEST IN TOWN"
        sectionImg={sectionImg}
      />
      <div className="about-usSection2 jagged-border">
        <div className="about-usSection2Content">
          <div className="about-usSection2ImageFlex">
            <img className="about-usSection2Image" src={SteamyPizza} />
            <img className="about-usSection2Image" src={SteamyPizza} />
          </div>
          <div className="XLargeBlackHandwriting">We Are Stefano's</div>
          <div className="about-usSection2TopText SmallBlack">
            Step into Stefano's Family Pizzeria and experience the difference
            that comes from a commitment to quality, tradition, and family.
          </div>
          <div className="about-usSection2DescFlex">
            <div className="about-usSection2Desc XSmallBlack">
              At Stefano's, we believe in more than just making pizza—we believe
              in creating a warm, inviting space where family and friends can
              gather to enjoy delicious food and create lasting memories. Our
              journey began with Stefano, a passionate pizza enthusiast who
              dreamed of sharing his love for authentic Italian pizza with his
              community. Stefano's Family Pizzeria is rooted in the rich
              traditions of Italian cuisine. Our recipes have been passed down
              through generations, starting from Stefano’s great-grandmother in
              Naples, the birthplace of pizza.
            </div>
            <div className="about-usSection2Desc XSmallBlack">
              We are dedicated to delivering a dining experience that embodies
              the spirit of family, authenticity, and quality. Our dough is made
              fresh daily, our sauces simmered to perfection, and our toppings
              are hand-picked to bring you the best flavors. Whether you’re in
              the mood for a classic Margherita, a hearty Meat Lover's, or a
              custom creation of your own, our menu offers something for
              everyone. At Stefano's, we are more than just a pizzeria; we are a
              part of the community. We believe in giving back and regularly
              participate in local events, fundraisers, and support local
              schools.
            </div>
          </div>
          <div className="about-usSection2ButtonFlex">
            <Link className="linkStyle" to="/services">
              <ItalianButton text="SEE TODAYS MENU" width="150px" />
            </Link>
            <div onClick={() => linkToTop()}>
              <ItalianButton text="ORDER NOW" width="150px" />
            </div>
          </div>
        </div>
      </div>
      <div className="about-usSection3">
        <SectionTitle title="What Clients Say" textColor="white" />
        <div className="reviewFlex">
          <ReviewComp
            title="Apple Apple"
            text={review1}
            srcImg={revImg}
            name="cucumber"
          />
          <ReviewComp
            title="Apple Apple"
            text={review2}
            srcImg={revImg}
            name="cucumber"
          />
          <ReviewComp
            title="Apple Apple"
            text={review3}
            srcImg={revImg}
            name="cucumber"
          />
        </div>
      </div>
      <div className="about-usSection4 jagged-border">
        <img
          className="about-usSection4Img"
          src={SoldPerDay}
          alt="sold-per-day"
        />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
