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
            <h1>Text Overlay</h1>
            <p>This is some text overlayed on top of an image background.</p>
        </div>
        </div>
    </div>
  );
};

export default Register;
