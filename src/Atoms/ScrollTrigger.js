import React, { useState, useEffect } from "react";

import "./Styles/ScrollTrigger.css";

const ScrollTrigger = ({ children, trigger = 0 }) => {
    const [isScrollHit, setScrollHit] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isScrollHit !== undefined && !isScrollHit) {
                if (window.scrollY > trigger) {
                    setScrollHit(true);
                    console.log(window.scrollY);
                    window.removeEventListener("scroll", handleScroll);
                }
            }
        };
        window.addEventListener("scroll", handleScroll, true);
        handleScroll();
    }, [trigger, isScrollHit]);

    return (
        <div
            className={
                isScrollHit
                    ? "scroll-trigger trigger-off"
                    : "scroll-trigger trigger-on"
            }
        >
            {children}
        </div>
    );
};

export default ScrollTrigger;
