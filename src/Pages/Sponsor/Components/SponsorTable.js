import React from "react";
import Type from "GlobalComponents/Type";
import TextSection from "GlobalComponents/TextSection";
import TableCell from "GlobalComponents/TableCell";
import sponsorship_tiers from "../../../Images/sponsorship_1.png"
import sponsorship_defs from "../../../Images/sponsorship_2.png"
import sponsorship_packet from "../../../assets/cornhacksPacketFINAL.pdf"
import { Worker, Viewer } from '@react-pdf-viewer/core';
import pdf from "../../../assets/cornhacksPacketFINAL.pdf"

import Colors from "Constants/Colors";
import { HashLink } from "react-router-hash-link";

import "../Styles/SponsorTable.css";

const SponsorTable = () => {
    return (
        <div>
            <div className = "App">
                <iframe src={pdf} />
            </div>
            {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <iframe 
                    src="../../../../public/cornhacksPacketFINAL.pdf" 
                    width="80%" 
                    height="600px"
                ></iframe>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <a href="../../../assets/cornhacksPacketFINAL.pdf" download="cornhacks_sponsorship_packet.pdf">
                    Download PDF
                </a>
            </div> */}
        </div>
    );
};

export default SponsorTable;
