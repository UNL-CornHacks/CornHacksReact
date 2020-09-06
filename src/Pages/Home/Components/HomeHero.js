import React from "react";
import GradientHero from "GlobalComponents/GradientHero";
import Colors from "Constants/Colors";

import "../Styles/HomeHero.css";

import Type from "GlobalComponents/Type";
import Button from "GlobalComponents/Button";

const HomeHero = () => {
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
                <Button internal to="/register/">
                    Register
                </Button>
                <Button internal to="/sponsor/">
                    Learn More
                </Button>
            </div>
        </GradientHero>
    );
};

export default HomeHero;
