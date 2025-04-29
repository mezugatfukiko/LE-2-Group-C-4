import React from "react";
import "./DashboardSummary.css";
import { FaHandHoldingUsd, FaRegCreditCard, FaWallet } from "react-icons/fa";

const DashboardSummary = () => {
  return (
    <div className="summary-container">
      <div className="greeting">
        <h1>Hello, John! 👋</h1>
        <p>Your finances at a glance.</p>
      </div>

      <div className="summary-cards">
        <div className="card">
          <div className="icon-box">
            <FaHandHoldingUsd className="icon" />
          </div>
          <div className="card-text">
            <h2>Total Income</h2>
            <p>For this month</p>
          </div>
          <div className="amount">₱0.00</div>
        </div>

        <div className="card">
          <div className="icon-box">
            <FaRegCreditCard className="icon" />
          </div>
          <div className="card-text">
            <h2>Total Expenses</h2>
            <p>For this month</p>
          </div>
          <div className="amount">₱0.00</div>
        </div>

        <div className="card">
          <div className="icon-box">
            <FaWallet className="icon" />
          </div>
          <div className="card-text">
            <h2>Remaining Balance</h2>
            <p>For this month</p>
          </div>
          <div className="amount">₱0.00</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary;
