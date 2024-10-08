import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Home.css"; // Make sure to create a Home.css file with the styles
import blackShirt from "../assets/images/blackShirt.jpg";
import mensSweatpantsImage from "../assets/images/pants.jpg";
import homeImage from "../assets/images/homeImage.jpg";
import truckImage from "../assets/images/truck.svg";
import shopImage from "../assets/images/shopbag.svg";
import clockImage from "../assets/images/clock.svg";
import returnImage from "../assets/images/return.svg";
import greySweatpants from "../assets/images/blackHoodie.jpg";
import { Fade } from "react-awesome-reveal";

// Home component
const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <Fade triggerOnce delay={100}>
          <div className="hero-content">
            <h1>E-Commerce Shoe Store</h1>
            <p>
              Donec vitae odio quis nisi dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="hero-buttons">
              <Link to="/shop">
                <button className="btn primary">Shop Now</button>
              </Link>
            </div>
          </div>

          <div className="hero-image">
            <img
              src={homeImage}
              alt="Elegant living space"
              className="featured-home-image"
            />
          </div>
        </Fade>
      </header>

      <Fade triggerOnce delay={200}>
        <FeaturedProducts />
        <WhyChooseUs />
      </Fade>
    </div>
  );
};

// FeaturedProducts component
const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <div className="product-description">
        <h2>Crafted with excellent material.</h2>
        <p>
          Donec vitae odio quis nisi dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <Link to="/shop">
          <button className="explore-btn">Explore</button>
        </Link>
      </div>
      <div className="products-container">
        <div className="product">
          <Link to="/shop" className="Link">
            <img
              src="assets/images/shoe1.jpg"
              alt="Comfort Gel"
              className="featured-product-image"
            />

            <h3>Comfort Gel</h3>
            <p className="price">$19.99</p>
          </Link>
        </div>
        <div className="product">
          <Link to="/shop" className="Link">
            <img
              src="assets/images/shoe2.jpg"
              alt="Comfort Gel"
              className="featured-product-image"
            />
            <h3>Arch Support</h3>
            <p className="price">$24.99</p>
          </Link>
        </div>
        <div className="product">
          <Link to="/shop" className="Link">
            <img
              src="assets/images/shoe3.jpg"
              alt="Comfort Gel"
              className="featured-product-image"
            />
            <h3>Heel Cushion</h3>
            <p className="price">$14.99</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

// WhyChooseUs component
const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <p>
        Donec vitae odio quis nisi dapibus malesuada. Nullam ac aliquet velit.
        Aliquam vulputate velit imperdiet dolor tempor tristique.
      </p>
      <div className="features">
        <div className="feature">
          <span className="icon">
            <img src={truckImage}></img>
          </span>
          <h4>Fast & Free Shipping</h4>
          <p>
            Donec vitae odio quis nisi dapibus malesuada. Nullam ac aliquet
            velit.
          </p>
        </div>
        <div className="feature">
          <span className="icon">
            <img src={shopImage}></img>
          </span>
          <h4>Easy to Shop</h4>
          <p>
            Donec vitae odio quis nisi dapibus malesuada. Nullam ac aliquet
            velit.
          </p>
        </div>
        <div className="feature">
          <span className="icon">
            <img src={clockImage}></img>
          </span>
          <h4>24/7 Support</h4>
          <p>
            Donec vitae odio quis nisi dapibus malesuada. Nullam ac aliquet
            velit.
          </p>
        </div>
        <div className="feature">
          <span className="icon">
            <img src={returnImage}></img>
          </span>
          <h4>Hassle Free Returns</h4>
          <p>
            Donec vitae odio quis nisi dapibus malesuada. Nullam ac aliquet
            velit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
