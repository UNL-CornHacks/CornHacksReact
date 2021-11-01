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
                CORNHACKS 2021
            </Type>
            <Type size="h4" align="center">
                The University of Nebraska's Student-Led Hackathon
            </Type>
            <div className="ch-button-container-center">
                <Button internal to="/sponsor/">
                    Sponsor
                </Button>
                <Button anchor to="#learn-more">
                    Learn More
                </Button>
                <Button internal to="/organize/">
                    Help Organize
                </Button>
                <Button to="https://docs.google.com/forms/d/e/1FAIpQLScza8XF__KiiQ5kn-6_nleP8QA1h9XcfX4lja1THx50X7Ow0g/viewform?usp=sf_link">
                    Register
                </Button>
            </div>
        </GradientHero>
    );
};

export default HomeHero;
