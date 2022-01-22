import React, { useState } from "react";
import Colors from "Constants/Colors";
import Type from "GlobalComponents/Type";
import TextSection from "GlobalComponents/TextSection";
import AirtableCompanies from "Calls/AirtableCompanies";
import SponsorSection from "Pages/Sponsor/Components/SponsorSection";
import GradientHero from "GlobalComponents/GradientHero";
import SponsorTable from "Pages/Sponsor/Components/SponsorTable";
import ContinueArrow from "GlobalComponents/ContinueArrow";
import Button from "GlobalComponents/Button";

import "./Styles/SponsorPage.css";
import SponsorFAQ from "Pages/Sponsor/Components/SponsorFAQ";

const SponsorPage = () => {
    const [sponsors, getSponsors] = useState({});
    return (
        <div>
            <AirtableCompanies setSponsorData={getSponsors} />
            <GradientHero
                colors={[Colors.BLUE, Colors.GREEN, Colors.YELLOW]}
                header
            >
                <Type size="h1" bold>
                    Welcome to your future.
                </Type>
                <Type size="h4">
                    Establish connections with the best talent in Nebraska.
                </Type>
                <div className="ch-button-container-left">
                    <Button to="mailto:crhoads5@huskers.unl.edu">
                        Reach Out Now
                    </Button>
                </div>
                <ContinueArrow
                    className="right-arrow-positioning"
                    backgroundColor={Colors.DARK_BLUE}
                    scrollTo={window.innerHeight}
                />
            </GradientHero>
            <TextSection backgroundColor={Colors.DARK_BLUE}>
                <Type size="h3" align="center" bold>
                    January 22nd and 23rd, 2022 @
                </Type>
                <a
                    style={{ color: Colors.WHITE }}
                    href="https://goo.gl/maps/o72MMWk4cHtgoFHF6"
                >
                    <Type size="h3" align="center" bold>
                        The Johnny Carson Center for Emerging Media Arts
                    </Type>
                </a>
            </TextSection>
            <SponsorTable />
            <SponsorFAQ />
            <TextSection backgroundColor={Colors.WHITE}>
                <SponsorSection
                    title="Platinum Sponsors"
                    titleColor={Colors.DARK_BLUE}
                    sponsorData={sponsors.platinum ? sponsors.platinum : []}
                    color="blue"
                    sectionHeight="250px"
                    grid={3}
                />
                <SponsorSection
                    title="Gold Sponsors"
                    titleColor={Colors.DARK_BLUE}
                    sponsorData={sponsors.gold ? sponsors.gold : []}
                    color="yellow"
                    sectionHeight="200px"
                    grid={4}
                />
                <SponsorSection
                    title="Silver Sponsors"
                    titleColor={Colors.DARK_BLUE}
                    sponsorData={sponsors.silver ? sponsors.silver : []}
                    color="grey"
                    sectionHeight="100px"
                    grid={5}
                />
                <img id="nelnet" src="Images\sponsors\sponsor_logos\Nelnet\Nelnet_Logo_White_Web.PNG" />
                <SponsorSection
                    title="Bronze Sponsors"
                    titleColor={Colors.DARK_BLUE}
                    sponsorData={sponsors.bronze ? sponsors.bronze : []}
                    color="brown"
                    sectionHeight="100px"
                    grid={6}
                />
            </TextSection>
        </div>
    );
};

export default SponsorPage;
