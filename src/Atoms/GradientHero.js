import React from "react";

import "./Styles/GradientHero.css";

const GradientHero = ({
    colors,
    className,
    children,
    justifyContent = "left",
}) => {
    let gradientString = "";
    for (const gradientColor of colors) {
        if (gradientString) {
            gradientString += ", ";
        }
        gradientString += gradientColor;
    }
    return (
        <div
            className={
                className ? `${className} gradient-hero` : "gradient-hero"
            }
            style={{
                backgroundImage: `linear-gradient(135deg, ${gradientString})`,
                backgroundSize: `${colors.length}00% ${colors.length}00%`,
                justifyContent,
            }}
        >
            {children}
        </div>
    );
};

export default GradientHero;
