import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <>
      <section className="about">
        <h2 className="about-title">About Eywa</h2>
        <p className="about-content">
          Eywa is a service that helps families to secure and access critical information, so that life goes on even when a family member is no longer around. It does this by providing an ability to access answers to any family related information by asking a question in their native language.
        </p>
      </section>
      <section className="team">
        <h2 className="team-title">Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://api.multiavatar.com/Karthi.svg" alt="Team Member Karthi" className="team-member-avatar" />
            <h3 className="team-member-name">Karthi</h3>
            <p className="team-member-role">Founder</p>
          </div>
          <div className="team-member">
            <img src="https://api.multiavatar.com/Leon.svg" alt="Team Member Leon" className="team-member-avatar" />
            <h3 className="team-member-name">Leon</h3>
            <p className="team-member-role">Lead Engineer</p>
          </div>
          <div className="team-member">
            <img src="https://api.multiavatar.com/Sri.svg" alt="Team Member Sri" className="team-member-avatar" />
            <h3 className="team-member-name">Sri</h3>
            <p className="team-member-role">Product Designer</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
