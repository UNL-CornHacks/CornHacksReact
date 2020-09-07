import React from "react";

import Type from "GlobalComponents/Type";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./Styles/Button.css";

const Button = ({ children, className, to, internal, anchor }) => {
    const buttonLink = (content) =>
        internal ? (
            <Link className="ch-button-link" to={to}>
                {content}
            </Link>
        ) : anchor ? (
            <HashLink className="ch-button-link" to={to}>
                {content}
            </HashLink>
        ) : (
            <a className="ch-button-link" href={to}>
                {content}
            </a>
        );

    return buttonLink(
        <Type
            size="h5"
            className={className ? `${className} ch-button` : "ch-button"}
            align="center"
        >
            {children}
        </Type>
    );
};

export default Button;
