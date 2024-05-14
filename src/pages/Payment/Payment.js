import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import KhaltiCheckout from "khalti-checkout-web";
import "./Payment.css";

const Payment = () => {
  const { getTotalcartAmount } = useContext(StoreContext);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const initializePayment = () => {
    const config = {
      // Configurations for Khalti
      publicKey: "your_khalti_public_key",
      productIdentity: "1234567890",
      productName: "Dummy Product",
      productUrl: "http://dummyproduct.com",
      eventHandler: {
        onSuccess(payload) {
          console.log("Payment success:", payload);
          // Handle success
        },
        // More event handlers if needed
      },
      // Additonal Parameters
      amount: getTotalcartAmount(),
      // More parameters as required
    };

    const checkout = new KhaltiCheckout(config);
    checkout.show({ amount: getTotalcartAmount() });
  }

  const handlePayment = () => {
    initializePayment();
  }

  return (
    <div className="payment">
      <form>
        <h2>Enter your details</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </form>
      <div className="payment-summary">
        <h2>Cart Totals</h2>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>रु.{getTotalcartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>रु.{getTotalcartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>रु.{getTotalcartAmount() === 0 ? 0 : getTotalcartAmount() + 2}</b>
          </div>
        </div>
        <button onClick={handlePayment}>Proceed to Payment</button>
      </div>
    </div>
  );
}

export default Payment;