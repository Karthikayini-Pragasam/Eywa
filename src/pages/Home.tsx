import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <>
      <div className="hero">
        <h1 className="hero-title">Welcome to Eywa</h1>
        <Link to="/pricing" className="hero-cta">Get Started</Link>
      </div>
      <section className="features">
        <h2 className="features-title">Features</h2>
        <div className="features-grid">
          <Link to="/ask" className="feature-item-link">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-question-circle"></i>
              </div>
              <h3 className="feature-title">Ask About Your Family</h3>
              <p className="feature-description">
                Get answers to any family-related information by asking a question in your native language.
              </p>
            </div>
          </Link>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="feature-title">Collaborate with Your Family</h3>
            <p className="feature-description">
              Securely share and manage critical information with your loved ones.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <h3 className="feature-title">Analytics</h3>
            <p className="feature-description">
              Gain insights into your family's information and activities.
            </p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2 className="testimonials-title">What our users are saying</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Avatar" className="testimonial-avatar" />
            <p className="testimonial-quote">
              "Eywa has given me peace of mind knowing that my family's critical information is safe and accessible."
            </p>
            <p className="testimonial-author">- A thoughtful planner</p>
          </div>
          <div className="testimonial-item">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704e" alt="Avatar" className="testimonial-avatar" />
            <p className="testimonial-quote">
              "I can finally ask questions about our family's history and get instant answers. It's like having a digital family historian!"
            </p>
            <p className="testimonial-author">- A curious family member</p>
          </div>
          <div className="testimonial-item">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704f" alt="Avatar" className="testimonial-avatar" />
            <p className="testimonial-quote">
              "The collaboration features have made it so much easier to keep our family on the same page."
            </p>
            <p className="testimonial-author">- A connected family</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
