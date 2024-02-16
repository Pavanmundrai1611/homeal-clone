import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChefStories from './components/ChefStories';
import Contact from './components/Contact';
import FAQSection from './components/FAQsection';
import Aboutus from './components/Aboutus';
import Products from './components/Products';
import Home from './Home';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/chef-stories" element={<ChefStories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/faq" element={<FAQSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
