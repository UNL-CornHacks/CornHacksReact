import React from "react";
import GradientHero from "Atoms/GradientHero";
import Colors from "Constants/Colors";

import "./Styles/HomeHero.css";

import ContinueArrow from "Atoms/ContinueArrow";

import cornhacksWhite from "cornhacks-white.svg";
import Type from "Atoms/Type";

const HomeHero = () => {
    return (
        <GradientHero colors={[Colors.YELLOW, Colors.GREEN, Colors.BLUE]}>
            <img src={cornhacksWhite} alt="Cornhacks logo" />
            <Type bold size="h1">
                CORNHACKS 2020
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
