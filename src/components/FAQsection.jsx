import React, { useState } from 'react';

function FAQSection() {
  const faqs = [
    {
      question: 'What is Homeal?',
      answer:
        'Homeal provides homemade food items to the craver who is willing to have authentic homemade food. Enjoy the meal when your hungry for homemade food and if cooking is your passion, then join us to follow your passion as Homeal Chef.',
    },
    {
      question: 'How to order homemade food from Homeal?',
      answer:
        'You can order Homemade Food from Homeal through our app. You can search for which food item you want to eat. Select the item you want to order. Food will be delivered to you at the provided address at your doorsteps without fail.',
    },
    {
      question: 'Can you deliver food from popular restaurants near me?',
      answer:
        'No, we do not deliver any restaurant food, we have designated chefs who cook healthy food according to the customer’s choice and we deliver them at your doorstep.',
    },
    {
      question: 'What kind of food do you deliver?',
      answer:
        'We deliver only Homemade food which includes multiple cuisines, according to the customer’s preferences. Such as South Indian, North Indian, Chinese, Bakery, Continental, and many more.',
    },
    {
      question: 'What is the eligibility to be a chef at Homeal?',
      answer: 'Your love and care to serve cravers with passion for cooking and hygienic delicacies.',
    },
    {
      question: 'Who will deliver my food?',
      answer: 'Homeal will deliver food at your doorstep, and we provide a pickup facility by yourself to drop down delivery.',
    },
    {
      question: 'What is Homeal Subscription?',
      answer:
        'Homeal offers customers with regular doorstep delivery services of healthy, tasty and customized home food at affordable prices.',
    },
    {
      question: 'How do I Subscribe?',
      answer:
        'Download the app and click on the subscription section, select the meals you want, and select the date, when you want to start from. Your Subscription will be started from that day.',
    },
    {
      question: 'How frequently should I make the payment for Subscription?',
      answer: 'Weekly prepaid subscriptions are available, and accordingly payment can be made for every week.',
    },
    {
      question: 'Do I get Same food everyday?',
      answer: 'No, our home chefs keep everyday different menu to keep your taste buds happy.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="question" onClick={() => handleClick(index)}>
            {faq.question}
            <span className={`arrow ${activeIndex === index ? 'active' : ''}`}>▼</span>
          </div>
          {activeIndex === index && <div className="answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default FAQSection;
