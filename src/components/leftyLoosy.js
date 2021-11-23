// MailWidget.js
import React, { useState } from 'react';

const MailWidget = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={isVisible ? 'visible' : ''}>
      <button type="button" onClick={toggleVisible}>
        Hide/Show MailWidget
      </button>
      <h1>Hello, I'm your mailwidget</h1>
    </div>
  );
};
export default MailWidget;