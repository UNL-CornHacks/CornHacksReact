import React, {useState} from 'react';
import HomeHero from 'Pages/Home/Components/HomeHero';

import './Register.css'; // Import your CSS file for styling

const Register = () => {
    const [overlayState, setOverlayState] = useState(false);
  return (
    <div>
        <HomeHero showOverlay={() => setOverlayState(true)} />
        <div className="background-container">
        <div className="overlay">
             <p>CornHacks 2025 registration isn't open yet! Check back in later!</p>
        </div>
        </div>
    </div>
  );
};

export default Register;
