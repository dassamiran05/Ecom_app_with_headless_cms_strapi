import React from "react";
import "./payment.scss";

const Paymentsuccess = () => {
  return (
    <div className="payment-container">
      <div className="layout">
        <div class="card">
          <div
          className="tick-body"
          >
            <i class="checkmark">✓</i>
          </div>
          <h1>Payment Success</h1>
          <p>
            We received your purchase request;
            <br /> we'll be in touch shortly!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Paymentsuccess;
