import React from "react";

import Type from "GlobalComponents/Type";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./Styles/Button.css";
import Colors from "Constants/Colors";

const Button = ({ children, className, to, internal, anchor, toClick, inverted }) => {
    const buttonLink = (content) =>
        internal ? (
            <Link className="ch-button-link" to={to}>
                {content}
            </Link>
        ) : anchor ? (
            <HashLink className="ch-button-link" to={to}>
                {content}
            </HashLink>
        ) : toClick ? (
            <div className="ch-button-link" onClick={to}>
                {content}
            </div>
        ) : (
            <a className="ch-button-link" href={to}>
                {content}
            </a>
        );

    return buttonLink(
        <Type
            size="h5"
            className={className ? `${className} ch-button${inverted ? '-inverted' : ''}` : `ch-button${inverted ? '-inverted' : ''}`}
            align="center"
            color={inverted ? Colors.DARK_BLUE : Colors.WHITE}
        >
            {children}
        </Type>
    );
};

export default Button;
