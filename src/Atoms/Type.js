import React from "react";
import PropTypes from "prop-types";
import "./Styles/Type.css";

const Type = ({
    size,
    bold,
    italics,
    underline,
    color,
    children,
    className,
    align
}) => {
    let typeClasses = className ? `${className} ch-type` : "ch-type";
    if (bold) {
        typeClasses += " bold";
    }
    if (italics) {
        typeClasses += " italics";
    }
    if (underline) {
        typeClasses += " underline";
    }

    switch (size) {
        case "h1":
            return (
                <h1
                    className={typeClasses}
                    style={{ color: color, textAlign: align }}
                >
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2
                    className={typeClasses}
                    style={{ color: color, textAlign: align }}
                >
                    {children}
                </h2>
            );
        case "h3":
            return (
                <h3
                    className={typeClasses}
                    style={{ color: color, textAlign: align }}
                >
                    {children}
                </h3>
            );
        case "h4":
            return (
                <h4
                    className={typeClasses}
                    style={{ color: color, textAlign: align }}
                >
                    {children}
                </h4>
            );
        case "h5":
            return (
                <h5
                    className={typeClasses}
                    style={{ color: color, textAlign: align }}
                >
                    {children}
                </h5>
            );
        case "h6":
            return (
                <h6 className={typeClasses} style={{ color: color }}>
                    {children}
                </h6>
            );
        default:
            return (
                <p
                    className={typeClasses}
                    style={{ color: color, textAlign: align }}
                >
                    {children}
                </p>
            );
    }
};

Type.propTypes = {
    size: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"]).isRequired,
    bold: PropTypes.bool,
    italics: PropTypes.bool,
    underline: PropTypes.bool,
    color: PropTypes.string,
    align: PropTypes.string
};

Type.defaultProps = {
    bold: false,
    italics: false,
    underline: false,
    color: "#FFFFFF",
    align: "left"
};

export default Type;
