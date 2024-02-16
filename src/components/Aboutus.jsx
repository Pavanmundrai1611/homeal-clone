import React from 'react';
import image1 from '../assets/about.jpeg';
import heart from '../assets/heart.png';
import serve from '../assets/serve.png';
import diet from '../assets/diet.png';
import balanced from '../assets/balanced.png';
import delivery from '../assets/delivery.png';
import team from '../assets/team.png';
import '../about.css';

const Aboutus = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h2>Welcome to Homeal</h2>
        <p>
          Homeal is a platform that connects home chefs with food lovers. We offer a wide range of homemade food options, including South Indian, North Indian, Chinese, Bakery, Continental, and many more cuisines. Our goal is to provide delicious, homemade meals that are prepared with love and care.
        </p>
        <p>
          Whether you're craving a comforting home-cooked meal or looking to explore new flavors, Homeal has something for everyone. Join us in celebrating the joy of homemade food!
        </p>
      </div>
      <div className="image-container">
        <img src={image1} alt="Image 1" className="about-image" />
      </div>
      <div className="features-container">
        <div className="feature">
          <img src={heart} alt="Heart" className="feature-icon" />
          <p>Eat Healthily</p>
          <p>In the busy work schedule, we frequently drop out on the health quotient, but not anymore. Homeal will provide your healthy home-cooked food by delivering them from Homeal Chefs to you. Now you can eat your home-cooked food.</p>
        </div>
        <div className="feature">
          <img src={serve} alt="Serve" className="feature-icon" />
          <p>Freshly Cooked Food</p>
          <p>A significant concern of eating home food during work is the freshness of the food. We have a way for you. Order with Homeal and have your home-cooked meals by delivering at your place and enjoy 100% freshly cooked food at your service.</p>
        </div>
        <div className="feature">
          <img src={diet} alt="Diet" className="feature-icon" />
          <p>Diet Choices</p>
          <p>Are you on a vegan diet, or are you a pure vegetarian? Do not worry. We got you!! According to your diet, we deliver your home meal to your place.</p>
        </div>
        <div className="feature">
          <img src={balanced} alt="Balanced" className="feature-icon" />
          <p>Balanced nutrition food</p>
          <p>Usually, restaurants prepare food items high in fat, salt, and sugar. When we prepare food at home, we know which ingredients and how much each is going into our food, which helps to keep stress levels low for our health. When we cook at home, it will be healthy with good tasty food.</p>
        </div>
        <div className="feature">
          <img src={delivery} alt="Delivery" className="feature-icon" />
          <p>Homemade Food Delivery in Bangalore</p>
          <p>Our Daily Delivery Services can guarantee you the ultimate co-operation you need, especially when you are occupied in any work. We try to make it convenient for you. Whether it is a breakfast, lunch, or dinner, even snacks and ready to eat savory are also included.</p>
        </div>
        <div className="feature">
          <img src={team} alt="Team" className="feature-icon" />
          <p>Our Team</p>
          <p>Serving together as teams provide people more opportunities to release their creative ideas and increases their sense of belonging. Our team will develop a sense of fellowship as you work toward making healthy food our goal. Teamwork builds morale for Homeal.</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
