import React, { useState } from 'react';
import Artemis from '../images/artemis-logo.svg';
import '../styles/title.css';
import Notice from './Notice'
const Title = () => {
  const [isVisible, setIsVisible] = useState(0);
  setTimeout(() => setIsVisible(1), 7000);
  
  return (
    <div>
    <Notice/>
    <div className="title-container">
      <img
        className="artemis-logo"
        style={{ opacity: isVisible }}
        src={Artemis}
        alt="website logo"
      />
      <div className="title_text">
        <h1 className="title_header">Artemis</h1>
        <p className="title_subtext">
          Optimization begins with analytics
        </p>
      </div>
    </div>
    </div>
  );
};
export default Title;
