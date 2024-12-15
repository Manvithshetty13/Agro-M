import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import Image from '../assets/tomatoes.jpg'

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = [
    {
      id: 1,
      name: 'Fresh Tomatoes',
      price: 2.5,
      quantity: 1,
      image:Image,
    },
  ];600

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleBuyAll = () => {
    navigate('/payment', { state: { totalPrice } });
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-details">
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        <button className="buy-all-button" onClick={handleBuyAll}>
          Buy All
        </button>
      </div>
    </div>
  );
};

export default Cart;
