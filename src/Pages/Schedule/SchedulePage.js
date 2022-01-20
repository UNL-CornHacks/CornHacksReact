import React from "react";
import Colors from "Constants/Colors";
import { Document, Page, pdfjs } from 'react-pdf'
import TextSection from "GlobalComponents/TextSection";
import sched from 'Images/2022schedule.pdf';
import GradientHero from "GlobalComponents/GradientHero";
import Type from "GlobalComponents/Type";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const SchedulePage = () => (
    <>
        <GradientHero
            colors={[Colors.YELLOW, Colors.GREEN, Colors.BLUE]}
            height="50vh"
            header
            boxShadow
        >
            <Type size="h1" bold align="center">
                Schedule
            </Type>
        </GradientHero>
        <TextSection backgroundColor={Colors.DARK_BLUE}>
            <div style={{justifyContent: "center", display: "flex"}}>
                <div style={{display: "flex"}}>
                    <Document file={sched}>
                        <Page pageNumber={1} />
                    </Document>
                </div>
            </div>
        </TextSection>
        <TextSection backgroundColor={Colors.DARK_BLUE}>
            <div style={{justifyContent: "center", display: "flex"}}>
                <div style={{display: "flex"}}>
                    <Document file={sched}>
                        <Page pageNumber={2} />
                    </Document>
                </div>
            </div>
        </TextSection>
        <TextSection backgroundColor={Colors.DARK_BLUE}>
            <div style={{justifyContent: "center", display: "flex"}}>
                <div style={{display: "flex"}}>
                    <Document file={sched}>
                        <Page pageNumber={3} />
                    </Document>
                </div>
            </div>
        </TextSection>
    </>
);

export default SchedulePage;
