import React from "react";
import Colors from "Constants/Colors";
import { Document, Page, pdfjs } from 'react-pdf'
import CornHacksSchedule from "Images/CornHacksSchedule.png"
import ImageSection from "GlobalComponents/ImageSection";
import GradientHero from "GlobalComponents/GradientHero";
import Type from "GlobalComponents/Type";

const SchedulePage = () => (
    <>
        <GradientHero
            colors={[Colors.YELLOW, Colors.GREEN, Colors.BLUE]}
            height="50vh"
            header
            boxShadow
        >
            <Type size="h1" bold align="center">
                CornHacks 2024 Schedule
            </Type>
        </GradientHero>
        <div style={{
            display: "flex",
            backgroundColor: "#050b16",
            height: "100vh",
            width: "100%",
            justifyContent: "center"
        }}>
            <img src={CornHacksSchedule} style={{ maxWidth: "100%", maxHeight: "100%"}} />
        </div>
    </>
);

export default SchedulePage;

//}