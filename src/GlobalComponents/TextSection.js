import React from "react";

import "./Styles/ContentSection.css";

const TextSection = ({ backgroundColor, className, children }) => {
    return (
        <div
            className={
                className
                    ? `${className} text-section content-section`
                    : "text-section content-section"
            }
            style={{
                backgroundColor,
            }}
        >
            {children}
        </div>
    );
};

export default TextSection;
