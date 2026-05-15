import React from 'react';
import './Pricing.css';

const Pricing: React.FC = () => {
  return (
    <section className="pricing">
      <h2 className="pricing-title">Pricing</h2>
      <div className="pricing-grid">
        <div className="pricing-tier">
          <h3 className="tier-name">Free</h3>
          <p className="tier-price">$0<span>/month</span></p>
          <ul className="tier-features">
            <li>Ask up to 10 questions per month</li>
            <li>Collaborate with up to 2 family members</li>
            <li>Limited Analytics</li>
            <li>Community Support</li>
          </ul>
          <a href="#" className="tier-cta">Choose Plan</a>
        </div>
        <div className="pricing-tier popular">
          <h3 className="tier-name">Family</h3>
          <p className="tier-price">$5<span>/month</span></p>
          <ul className="tier-features">
            <li>Ask unlimited questions</li>
            <li>Collaborate with your entire family</li>
            <li>Full Analytics</li>
            <li>Priority Support</li>
          </ul>
          <a href="#" className="tier-cta">Choose Plan</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
