import React from "react";
import cornhacksWhite from "Graphics/cornhacks-white.svg";
import Type from "GlobalComponents/Type";
import { Link } from "react-router-dom";

import "./Styles/GradientHero.css";

const GradientHero = ({
    colors,
    className,
    children,
    justifyContent = "left",
    height = `100vh`,
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
        <div className="ch-header-gradient-hero">
            <Link to="/home" className="ch-header-content-container">
                <img
                    className="ch-logo-gradient-hero"
                    src={cornhacksWhite}
                    alt="Cornhacks logo"
                />
                <Type bold size="h4" align="left" className="ch-header-text">
                    CORNHACKS 2022
                </Type>
            </Link>
        </div>
    );
    return (
        <div
            className={
                className ? `${className} gradient-hero` : "gradient-hero"
            }
            style={{
                backgroundImage: `linear-gradient(135deg, ${gradientString})`,
                backgroundSize: `${colors.length}00% ${colors.length}00%`,
                justifyContent,
                height,
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
