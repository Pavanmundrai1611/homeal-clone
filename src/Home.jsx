import React from 'react';
import { Link } from 'react-router-dom';
import homepage from './assets/homepage.jpg';
import homeal from './assets/homeal.png';
import breakfastImage from './assets/breakfast.jpg';
import playstore from './assets/playstore.png';
import appstore from './assets/appstore.png'
import lunchImage from './assets/lunch.jpg';
import dinnerImage from './assets/dinner.jpg';
import southIndianImage from './assets/southindian.jpg';
import northIndianImage from './assets/northindian.jpeg';
import chineseImage from './assets/chinese.jpg';
import bakeryImage from './assets/bakery.jpg';
import continentalImage from './assets/continental.jpg';
import chef1 from './assets/chef1.png';
import chef2 from './assets/chef2.png';
import chef3 from './assets/chef3.png';
import chef4 from './assets/chef4.png';
import chef5 from './assets/chef5.png';
import chef6 from './assets/chef6.png';
import chef7 from './assets/chef7.png';
import chef8 from './assets/chef8.png';
import chef9 from './assets/chef9.png';
import { FaLinkedin } from "react-icons/fa";
import chef10 from './assets/chef10.png';
import chef11 from './assets/chef11.png';
import Slider from 'react-slick';
import about from './assets/about.jpeg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import teamImage1 from './assets/teamImage1.jpeg';
import teamImage2 from './assets/teamImage2.jpeg';
import teamImage3 from './assets/teamImage3.jpeg';
import FAQSection from './components/FAQsection';
const teamMembers = [
    {
        name: 'Sumeet Guleria',
        position: 'Co-founder',
        image: teamImage1,
        linkedin: 'https://www.linkedin.com/in/sumeet-guleria-26560685/'
    },
    {
        name: 'Milan Monappa',
        position: 'Founder Localzi',
        image: teamImage2,
        linkedin: 'https://www.linkedin.com/in/milan-monappa-ab6045108/'
    },
    {
        name: 'Sridevi R V',
        position: 'Senior Software Engineer',
        image: teamImage3,
        linkedin: 'https://www.linkedin.com/in/sridevi-r-v-36a41b240/'
    },
];
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
};

const chefs = [
    {
        name: 'Home Chef Nagarani',
        description: 'Home Chef Nagarani is proof that age is just a number. Striving to create an identity for herself, she transformed her talent into an earning career. By bringing different flavors of Tamilnadu to the',
        image: chef1,
    },
    {
        name: "Suki's Kitchen",
        description: 'An entrepreneur, a homemaker, self-motivated and passionate about cooking, Suman likes to cook and serve food. She carries 23 years of work experience and has worked in the corporate w',
        image: chef2,
    },
    {
        name: 'Home Chef Naresh',
        description: 'Home Chef Naresh has been exploring his remarkable culinary skills for over 15 years. His palette offers a unique variety of North Indian, Chinese and Continental cuisine. His talent goes to crossing',
        image: chef3,
    },
    {
        name: 'Home Chef Sheela',
        description: 'Home Chef Sheela, a strong mother and an excellent cook from a small village specializes in Nati style homemade food. With her ability to prepare bulk orders single-handedly, she has been able to wadd',
        image: chef4,
    },
    {
        name: 'Home Chef Venkatesh',
        description: 'Home Chef Venkatesh has magic in his hands. With 18 plus years of his experience, he prepares all kinds of South Indian food delicacies. Especially UttarKarnataka foods are his signature dishes. Drive',
        image: chef5,
    },
    {
        name: 'Home Chef Soumya Sudhi',
        description: 'Home Chef Soumya Sudhi brings innovation to the table through her creative baking skills. Proudly owning her own business ‘Soumya’s Choco happy luscious’ did not stop her from expanding her platform',
        image: chef6,
    },
    {
        name: 'Home Chef Prabha',
        description: 'Home Chef Prabha makes yummy delicious healthy varieties of eggless cakes. Baking makes her happy. Mainly all her cakes are prepared with healthy ingredients. after joining Homeal she is able to get a',
        image: chef7,
    },
    {
        name: 'Home Chef Arundhati',
        description: 'Home Chef Arundhati is a passionate chef, who prepares delicious Khova jamoon and other sweets. She was a person who was only serving her sweets to her friends and families. but now after joining Hom',
        image: chef8,
    },
    {
        name: 'Home Chef Sahana',
        description: 'Home Chef Sahana, being a mother and a corporate working professional did not stop her from starting her own business. Currently, she is serving cravers who are looking for authentic homemade vegetari',
        image: chef9,
    },
    {
        name: 'Home Chef Kavya',
        description: 'Home Chef Kavya loves cooking. cooking is something that makes her happy. she prepares mouthwatering dishes. her hands are magical and after joining Homeal she is able to connect to many cravers and',
        image: chef10,
    },
    {
        name: 'Home Chef Sowmya',
        description: 'Home Chef Sowmya was born in a remote village and currently is living in Bangalore. She always dreamt of starting her own business but circumstances were difficult. This did not stop her to follow her',
        image: chef11,
    },
];
function Home() {
    return (
        <>
            <div className="content">
                <div className="ad" style={{ width: '100%' }}>
                    <img src={homepage} className='homepageimg' alt="Homepage" width="100%" height="400px" style={{ objectFit: 'cover' }} />
                    <div className="textoverimage">
                        <div className="textnimage">
                            Homeal<img src={homeal} alt="Homeal" className='logo1' />
                        </div>
                        <div className='apps'>
                            <h5>Ghar se Ghar thak!!</h5>
                            <h3>Homemade Food Delivery in Bangalore</h3>
                            <h5>download now</h5>
                            <div className="imagesapp">
                                <a href="https://play.google.com/store/apps/details?id=com.localzi.homeal" target="_blank" rel="noopener noreferrer">
                                    <img src={playstore} alt="Play Store" className="playstore appl" />
                                </a>
                                <a href="https://apps.apple.com/in/app/homeal/id1571860810" target="_blank" rel="noopener noreferrer">
                                    <img src={appstore} alt="App Store" className="appstore appl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about">
                    <img src={about} alt="" className='aboutimage' />
                    <div className="abouttext">
                        <h2>About us</h2>
                        Homeal provides a platform for home chefs to share their passion for cooking with others. Customers can order delicious homemade food from local chefs, prepared with fresh, locally sourced ingredients. We aim to support homemakers in becoming entrepreneurs by providing them with tools and assistance to manage their food businesses. Our goal is to offer quality service, convenient delivery, and a variety of homemade food options to our customers.
                    </div>
                </div>
                <div className="types">
                    <div>
                        <div className="textgallery">
                            <h2>We serve all kinds of food!</h2>
                            <h4>We deliver only Homemade food which includes multiple cuisines, according to the customer’s preferences. Such as South Indian, North Indian, Chinese, Bakery, Continental, and many more.
                            </h4>
                        </div>
                        <div className="galleryfood">
                            <div className="card">
                                <img src={breakfastImage} alt="Breakfast" />
                                <div className="card-text">Breakfast</div>
                            </div>
                            <div className="card">
                                <img src={lunchImage} alt="Lunch" />
                                <div className="card-text">Lunch</div>
                            </div>
                            <div className="card">
                                <img src={dinnerImage} alt="Dinner" />
                                <div className="card-text">Dinner</div>
                            </div>
                            <div className="card">
                                <img src={southIndianImage} alt="South Indian" />
                                <div className="card-text">South Indian</div>
                            </div>
                            <div className="card">
                                <img src={northIndianImage} alt="North Indian" />
                                <div className="card-text">North Indian</div>
                            </div>
                            <div className="card">
                                <img src={chineseImage} alt="Chinese" />
                                <div className="card-text">Chinese</div>
                            </div>
                            <div className="card">
                                <img src={bakeryImage} alt="Bakery" />
                                <div className="card-text">Bakery</div>
                            </div>
                            <div className="card">
                                <img src={continentalImage} alt="Continental" />
                                <div className="card-text">Continental</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="why-homeal">
                    <h2>Why Homeal?</h2>
                    <div className="card-container">
                        <div className="card">
                            <div className="icon">🥗</div>
                            <div className="text">
                                <h3>Eat Healthily</h3>
                                <p>In the busy work schedule, we frequently drop out on the health quotient, but not anymore. Homeal will provide your healthy home-cooked food by delivering them from Homeal Chefs to you. Now you can eat your home-cooked food.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="icon">🍲</div>
                            <div className="text">
                                <h3>Freshly Cooked Food</h3>
                                <p>A significant concern of eating home food during work is the freshness of the food. We have a way for you. Order with Homeal and have your home-cooked meals by delivering at your place and enjoy 100% freshly cooked food at your service.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="icon">🥦</div>
                            <div className="text">
                                <h3>Diet Choices</h3>
                                <p>Are you on a vegan diet, or are you a pure vegetarian? Do not worry. We got you!! According to your diet, we deliver your home meal to your place.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="icon">🍎</div>
                            <div className="text">
                                <h3>Balanced Nutrition Food</h3>
                                <p>Usually, restaurants prepare food items high in fat, salt, and sugar. When we prepare food at home, we know which ingredients and how much each is going into our food, which helps to keep stress levels low for our health. When we cook at home, it will be healthy with good tasty food.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="icon">🚚</div>
                            <div className="text">
                                <h3>Homemade Food Delivery in Bangalore</h3>
                                <p>Our Daily Delivery Services can guarantee you the ultimate co-operation you need, especially when you are occupied in any work. We try to make it convenient for you. Whether it is a breakfast, lunch, or dinner, even snacks and ready to eat savory are also included.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="icon">👩‍🍳</div>
                            <div className="text">
                                <h3>Our Team</h3>
                                <p>Serving together as teams provide people more opportunities to release their creative ideas and increases their sense of belonging. Our team will develop a sense of fellowship as you work toward making healthy food our goal. Teamwork builds morale for Homeal.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="meet-our-chefs">
                    <h2>Meet Our Chefs</h2>
                    <Slider {...settings}>
                        {chefs.map((chef, index) => (
                            <div key={index}>
                                <img src={chef.image} alt={chef.name} />
                                <h3>{chef.name}</h3>
                                <p>{chef.description}</p>
                                <li><Link to="/faq">Read More</Link></li>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="our-team">
                    <h2>Our Team</h2>
                    <div className="team-members">
                        {teamMembers.map((member, index) => (
                            <div className="team-member" key={index}>
                                <img src={member.image} alt={member.name} />
                                <h3>{member.name}</h3>
                                <p>{member.position}</p>
                                <a href={member.linkedin} target='_blank' style={{ textDecoration: 'none' }}>
                                    <FaLinkedin /></a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="faq">
                    <FAQSection />
                </div>
            </div>
        </>
    );
}

export default Home;
