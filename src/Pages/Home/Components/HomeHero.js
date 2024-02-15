import React from "react";
import GradientHero from "GlobalComponents/GradientHero";
import Colors from "Constants/Colors";

import "../Styles/HomeHero.css";

import Type from "GlobalComponents/Type";
import Button from "GlobalComponents/Button";

const HomeHero = ({ showOverlay }) => {
  return (
    <GradientHero
      colors={[Colors.YELLOW, Colors.GREEN, Colors.BLUE]}
      height="70vh"
      header
      boxShadow
    >
      <Type className="ch-home-hero-text" size="h1" bold align="center">
        CORNHACKS 2024
      </Type>
      <Type size="h4" align="center">
        The University of Nebraska's Student-Led Hackathon
      </Type>
      <div className="ch-button-container-center">
        <Button internal to="/sponsor/">
          Sponsor
        </Button>
        <Button internal to="/organize/">
          Help Organize
        </Button>
        <Button to="https://forms.gle/7eHo3s9RURLpvNtM9">Register</Button>
        <Button to="https://drive.google.com/file/d/1rzj9iy6urchwN2ixStTShniDrDNGx83p">
          Photo Release
        </Button>
        <Button anchor to="#learn-more">
          Learn More
        </Button>
      </div>
    </GradientHero>
  );
};

export default HomeHero;
