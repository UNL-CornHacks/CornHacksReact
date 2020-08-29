import React from "react";

import "./Styles/ContinueArrow.css";

import downArrow from "Graphics/down-arrow.svg";

const ContinueArrow = ({ backgroundColor, className, scrollTo }) => {
    const arrowClickHandler = () => {
        window.scrollTo(0, scrollTo);
    };
    return (
        <div
            className={
                className
                    ? `${className} continue-arrow-container`
                    : "continue-arrow-container"
            }
            style={{
                backgroundColor,
            }}
            onClick={arrowClickHandler}
        >
            <img
                className="continue-arrow"
                src={downArrow}
                style={{ width: "50px", height: "50px", fill: "blue" }}
                alt="Continue to next page?"
            />
        </div>
    );
};

export default ContinueArrow;
