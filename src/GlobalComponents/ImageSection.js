import React from "react";

import "./Styles/ContentSection.css";

const images = require.context("Images", true);

const ImageSection = ({
    image,
    backgroundColor,
    className,
    children,
    right,
    maxWidth = "100%",
}) => {
    return (
        <div
            className={
                className
                    ? `${className} image-section content-section`
                    : "image-section content-section"
            }
            style={{
                backgroundImage: `url(${images(`./${image}`)})`,
                justifyContent: right ? "flex-end" : "flex-start",
            }}
        >
            <div
                className="image-overlay"
                style={{
                    backgroundColor,
                    maxWidth,
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default ImageSection;
