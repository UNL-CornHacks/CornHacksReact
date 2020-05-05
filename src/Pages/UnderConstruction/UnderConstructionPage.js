import React from "react";
import Colors from "Constants/Colors";
import cornhacks from "cornhacks.svg";
import Type from "Atoms/Type";

import RotationEffect from "Effects/RotationEffect";

const UnderConstructionPage = () => (
    <div style={pageStyling}>
        <div style={pageContentStyling}>
            <RotationEffect>
                <img src={cornhacks} style={logoStyling} alt="logo" />
            </RotationEffect>
            <Type size="h1" bold align="center" className="cornhacks-logo-text">
                <span style={{ color: Colors.YELLOW }}>CORN</span>
                <span style={{ color: Colors.GOLD }}>HACKS</span>{" "}
                <span style={{ color: Colors.GREEN }}>2021</span>
            </Type>
            <p style={paragraph}>
                This site is currently under construction.
                <br />
                If you have any questions, please email us at
                <br />
                <a
                    href="mailto:info@cornhacks.com"
                    style={{ color: Colors.YELLOW }}
                >
                    info@cornhacks.com
                </a>
            </p>
        </div>
    </div>
);

/*
STYLING
*/

const pageContentStyling = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    textAlign: "center",
    flexDirection: "column",
};

const logoStyling = {
    width: "300px",
    height: "300px",
};

const pageStyling = {
    width: "100%",
    height: "100%",
    background: `radial-gradient(${Colors.BLUE}, ${Colors.DARK_BLUE})`,
    position: "fixed",
    display: "flex",
};

const paragraph = {
    color: Colors.WHITE,
    fontSize: "25px",
};

export default UnderConstructionPage;
