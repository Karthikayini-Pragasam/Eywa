
import React from 'react';
import './FamilyDashboard.css';

const FamilyDashboard: React.FC = () => {

  const handleConnect = () => {
    window.open('http://localhost:3001/auth/google', '_blank');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Eywa.ai</h1>
        <p>Your Wise Family Elder</p>
      </header>
      <main className="dashboard-main">
        <div className="vault-section">
          <h2>Family Vaults</h2>
          <div className="vault-grid">
            <div className="vault-card">Legal</div>
            <div className="vault-card">Financial</div>
            <div className="vault-card">Medical</div>
            <div className="vault-card">History</div>
            <div className="vault-card">End of Life</div>
          </div>
          <button className="connect-button" onClick={handleConnect}>
            Connect to Google Drive
          </button>
        </div>
        <div className="chat-section">
          <h2>Chat with Eywa</h2>
          <div className="chat-box">
            {/* Chat messages will go here */}
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Ask Eywa a question..." />
            <button>Send</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FamilyDashboard;
