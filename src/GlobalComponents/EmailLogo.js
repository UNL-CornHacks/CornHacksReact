import React, { useState } from 'react';
import emailLogo from '../Images/email.png';
import gmail from '../Images/gmail.png';
import outlook from '../Graphics/outlook.svg'

import "./Styles/EmailLogo.css";
import { withTheme } from 'styled-components';

const ImageOpener = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const toggleImage = () => {
    setIsImageOpen(!isImageOpen);
  };

   const handleGmailClick = () => {
    const recipient = 'cornhacks@unl.edu';
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}`;
    window.open(gmailURL, '_blank');
  };

  const handleOutlookClick = () => {
    const recipient = 'cornhacks@unl.edu';
    const outlookURL = `https://outlook.office.com/mail/deeplink/compose?to=${recipient}`;
    window.open(outlookURL, '_blank');
  };

  return (
    <div className="image-opener-container-email">
      <button onClick={toggleImage} className="toggle-button-email">
        <img src={emailLogo} alt='Email Logo' style={{ width: '45px' }}/>
      </button>
      {isImageOpen && (
        <div className='emailButtonHolder' style={{ borderRadius: '12px' }}>
            <button onClick={handleGmailClick} className='gmailButton'>
                <img src={gmail} alt='Gmail Logo' style={{ width: '40px' }} />
                Gmail
            </button>
            <button onClick={handleOutlookClick} className='outlookButton'>
                <img src={outlook} alt='Outlook Logo' style={{ width: '80px' }} />
                Outlook
            </button>
            <p style={{ color: 'black', fontSize: '20px' }}>cornhacks@unl.edu</p>
        </div>
      )}
    </div>
  );
};

export default ImageOpener;