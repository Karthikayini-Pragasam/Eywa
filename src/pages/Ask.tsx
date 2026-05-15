import React from 'react';
import './Ask.css';

const Ask: React.FC = () => {
  return (
    <div className="ask-container">
      <input type="text" className="ask-search-bar" placeholder="Ask any question about your family" />
    </div>
  );
};

export default Ask;
