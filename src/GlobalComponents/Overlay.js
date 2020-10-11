import Colors from "Constants/Colors";
import React from "react";

import "./Styles/Overlay.css";

const Overlay = ({
    children,
    setOverlayState,
    showOverlay,
    backgroundColor = Colors.DARK_BLUE,
}) =>
    showOverlay ? (
        <div className="ch-overlay">
            <div
                className="ch-overlay-content"
                style={{ backgroundColor: backgroundColor }}
            >
                {children}
            </div>
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 345.25 345.25"
                className="ch-overlay-x"
                onClick={() => setOverlayState(false)}
            >
                <title>Exit Overlay</title>
                <path
                    d="M285.36,250,419.69,115.67a10,10,0,0,0,0-14.18L398.51,80.31a10,10,0,0,0-14.18,0L250,214.64,115.67,80.31a10,10,0,0,0-14.18,0L80.31,101.49a10,10,0,0,0,0,14.18L214.64,250,80.31,384.33a10,10,0,0,0,0,14.18l21.18,21.18a10,10,0,0,0,14.18,0L250,285.36,384.33,419.69a10,10,0,0,0,14.18,0l21.18-21.18a10,10,0,0,0,0-14.18Z"
                    transform="translate(-77.38 -77.38)"
                />
            </svg>
        </div>
    ) : (
        false
    );

export default Overlay;
