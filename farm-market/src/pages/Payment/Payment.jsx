import React from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const totalPrice = location.state?.totalPrice || 0;

  return (
    <div className="payment">
      <h1>Payment Page</h1>
      <div className="payment-summary">
        <p>Total Amount: <span>${totalPrice.toFixed(2)}</span></p>
      </div>
      <div className="payment-options">
        <h2>Select a Payment Method</h2>
        <button className="payment-button">Credit/Debit Card</button>
        <button className="payment-button">UPI</button>
        <button className="payment-button">Net Banking</button>
        <button className="payment-button">Cash on Delivery</button>
      </div>
    </div>
  );
};

export default Payment;
