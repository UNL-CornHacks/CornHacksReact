import React from "react";
import cornhacks3d from "Graphics/corn3d.svg";
import Type from "GlobalComponents/Type";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import unlLogo from "Images/UNL.png"
import InstagramLogo from "../GlobalComponents/InstagramLogo"

import "./Styles/GradientHero.css";

const GradientHero = ({
  colors,
  className,
  children,
  justifyContent = "left",
  header,
  boxShadow,
}) => {
  let gradientString = "";
  for (const gradientColor of colors) {
    if (gradientString) {
      gradientString += ", ";
    }
    gradientString += gradientColor;
  }
  const headerHTML = (
  <div>
    <div className="ch-header-gradient-hero">
      <Link to="/home" className="ch-header-content-container">
        <img
          className="ch-logo-gradient-hero"
          src={cornhacks3d}
          alt="CornHacks logo"
        />
        <Type align="left" className="ch-header-text">
          <h1 className="CornText">Corn<span className="HacksText">Hacks</span></h1>
        </Type>
      </Link>
      <Link to="/Register">
        <button style={{ width: '150px', height: '100px' }} className='RegisterLink'>Register</button>
      </Link>
      <Link to="/home">
        <button style={{ width: '180px', height: '100px' }} className='AboutLink'>About Us</button>
      </Link>
      <Link to="/sponsor/">
        <button style={{ width: '150px', height: '100px' }} className='AboutLink'>Sponsor</button>
      </Link>
      <Link to="/organize/">
        <button style={{ width: '250px', height: '100px' }} className='AboutLink'>Help Organize</button>
      </Link>
      <Link to="/pastProjects">
        <button style={{ width: '230px', height: '100px' }} className='AboutLink'>Past Projects</button>
      </Link>
    </div>
    <div className="unl-logo-div">
      <a
        href="https://www.unl.edu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="unl-logo" src={unlLogo} alt="UNL logo"/>
      </a>
    </div>
    <div className="insta-logo-div">
      <InstagramLogo />
    </div>
  </div>
);


  return (
    <div
      className={className ? `${className} gradient-hero` : "gradient-hero"}
      style={{
        backgroundImage: `linear-gradient(135deg, ${gradientString})`,
        backgroundSize: `${colors.length}00% ${colors.length}00%`,
        justifyContent,
      }}
    >
      {header && headerHTML}
      <div
        className={
          boxShadow
            ? "gradient-hero-body gradient-hero-box-shadow"
            : "gradient-hero-body"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default GradientHero;
