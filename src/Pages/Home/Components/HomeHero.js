import React from "react";
import GradientHero from "GlobalComponents/GradientHero";
import Colors from "Constants/Colors";

import "../Styles/HomeHero.css";

import ContinueArrow from "GlobalComponents/ContinueArrow";

import cornhacksWhite from "Graphics/cornhacks-white.svg";
import Type from "GlobalComponents/Type";

const HomeHero = () => {
    return (
        <GradientHero
            colors={[Colors.YELLOW, Colors.GREEN, Colors.BLUE]}
            justifyContent="center"
        >
            <img src={cornhacksWhite} alt="Cornhacks logo" />
            <Type bold size="h1" align="center" className="center-gradient">
                CORNHACKS 2021
            </Type>
            <ContinueArrow
                className="arrow-positioning"
                backgroundColor={Colors.DARK_BLUE}
                scrollTo={window.innerHeight}
            />
        </GradientHero>
    );
};

export default HomeHero;
