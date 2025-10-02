import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const location = useLocation();
  const { selectedSeats, totalPrice } = location.state || { selectedSeats: [], totalPrice: 0 };
  const navigate = useNavigate();

  const handlePayment =async () => {
   
    // window.location.href = "http://localhost:5174/";
    window.location.href = `http://localhost:5174/?totalPrice=${totalPrice}`;
  };

  return (
    <div className="payment-page">
      <h2>Payment Details</h2>
      <p>Selected Seats: {selectedSeats.join(', ')}</p>
      <p>Quantity of Seats: {selectedSeats.length}</p>
      <p>Total Price: ₹{totalPrice}</p>
      <button onClick={handlePayment}>Continue with Razorpay</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default PaymentPage;
