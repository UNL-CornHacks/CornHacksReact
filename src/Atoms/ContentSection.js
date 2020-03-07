import React from "react";

import "./Styles/ContentSection.css";

const ContentSection = ({ backgroundColor, className, children }) => {
    return (
        <div
            className={
                className ? `${className} content-section` : "content-section"
            }
            style={{
                backgroundColor
            }}
        >
            {children}
        </div>
    );
};

export default ContentSection;
