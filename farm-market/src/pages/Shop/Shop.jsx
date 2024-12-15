import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Shop.css';
import Img from "../assets/tomatoes.jpg";
import Img2 from "../assets/Bell_Peppers.jpg"

const Shop = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleBuyNow = (product) => {
    // Redirect to cart with product information
    navigate('/cart', { state: { product } });
  };

  return (
    <div className="shop">
      <h1>Shop Fresh Produce</h1>
      <div className="product-container">
        {/* Product 1: Tomato */}
        <div className="product-card">
          <img
            src={Img}
            alt="Fresh Tomatoes"
            className="product-image"
          />
          <h2>Fresh Tomatoes</h2>
          <p>Juicy and ripe, freshly picked from local farms.</p>
          <p className="price">$2.50</p>
          <button
            className="buy-now"
            onClick={() => handleBuyNow({ name: 'Fresh Tomatoes', price: 2.5 })}
          >
            Buy Now
          </button>
        </div>

        {/* Product 2: Bell Peppers */}
        <div className="product-card">
          <img
            src={Img2}
            alt="Green Bell Peppers"
            className="product-image"
          />
          <h2>Green Bell Peppers</h2>
          <p>Crisp and fresh, perfect for salads and cooking.</p>
          <p className="price">$3.00</p>
          <button
            className="buy-now"
            onClick={() => handleBuyNow({ name: 'Green Bell Peppers', price: 3.0 })}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
