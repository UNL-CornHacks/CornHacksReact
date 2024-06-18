import React from "react";
import cornhacks3d from "Graphics/corn3d.svg";
import Type from "GlobalComponents/Type";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import unlLogo from "Images/UNL.png"

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
      <Navbar expand="lg" className="navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="websiteLinks">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    <div className="unl-logo-div">
      <h4>the student-led hackathon at</h4>
      <a
        href="https://www.unl.edu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="unl-logo" src={unlLogo} alt="UNL logo"/>
      </a>
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
