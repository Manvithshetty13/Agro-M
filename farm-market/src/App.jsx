import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment'
import ContactUs from './pages/ContactUs/ContactUs';
import UploadProduct from './pages/UploadProduct/UploadProduct';
import ProductCard from './components/ProductCard/ProductCard';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <Router>

      {/* Header component */}
      <Header />

      <Routes>

        

        {/* Main content */}
        {/* Route to Home page */}
        <Route exact path="/" element={<Home/>} />

        <Route exact path="/shop" element={<Shop/>} />

        <Route exact path="/cart" element={<Cart/>} />

        <Route exact path="/Payment" element={<Payment/>}/>

        {/* Route to Shop page */}
        {/* <Route path="/shop">
          <Shop onAddToCart={handleAddToCart} />
        </Route>

        {/* Route to Cart page */}
        {/* <Route path="/cart">
          <Cart cartItems={cartItems} />
        </Route> */} 

        {/* Route to Contact Us page */}
        <Route path="/contact-us" element={<ContactUs/>} />

        {/* Route to Upload Product page */}
        <Route path="/upload-product" element={<UploadProduct/>} />

      </Routes>

      {/* Footer component */}
      <Footer />

    </Router>
  );
};

export default App;
