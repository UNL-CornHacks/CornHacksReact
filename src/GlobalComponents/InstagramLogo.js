import React, { useState } from 'react';
import instagramLogo from "../Images/insta.png";
import qrcode from "../Images/unl_cornhacks_qr.png"

import "./Styles/InstagramLogo.css";

const ImageOpener = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const toggleImage = () => {
    setIsImageOpen(!isImageOpen);
  };

  return (
    <div className="image-opener-container">
      <button onClick={toggleImage} className="toggle-button">
        <img src={instagramLogo} alt='Instagram Logo' style={{ width: '40px' }}/>
      </button>
      {isImageOpen && (
        <div className="image-link-container">
          <img src={qrcode} alt="Instagram QR Code" className="example-image"  style={{ width: '300px'}}/>
          <a href="https://www.instagram.com/unl_cornhacks/" target="_blank" rel="noopener noreferrer" className="example-link">
            Instagram Link
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageOpener;
