import React, { useState } from "react";
import Colors from "Constants/Colors";
import Type from "Atoms/Type";
import ContentSection from "Atoms/ContentSection";
import AirtableCompanies from "Calls/AirtableCompanies";
import SponsorSection from "Templates/SponsorSection";
import GradientHero from "Atoms/GradientHero";
import SponsorTable from "Templates/SponsorTable";

import "./Styles/SponsorPage.css";
import SponsorFAQ from "Templates/SponsorFAQ";

const SponsorPage = () => {
    const [sponsors, getSponsors] = useState({});
    return (
        <div>
            <AirtableCompanies setSponsorData={getSponsors} />
            <GradientHero colors={[Colors.BLUE, Colors.GREEN, Colors.YELLOW]}>
                <div className="sponsor-hero-text">
                    <Type size="h1" bold>
                        Welcome to your future.
                    </Type>
                    <Type size="h4">
                        Establish connections with the best talent in Nebraska.
                    </Type>
                    <a
                        className="ch-button-link"
                        href="mailto:info@cornhacks.com"
                    >
                        <Type size="h5" className="ch-button" align="center">
                            Reach Out Now
                        </Type>
                    </a>
                </div>
            </GradientHero>
            <SponsorTable />
            <SponsorFAQ />
            <ContentSection backgroundColor="#ffffff">
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
                <SponsorSection
                    title="Bronze Sponsors"
                    titleColor={Colors.DARK_BLUE}
                    sponsorData={sponsors.bronze ? sponsors.bronze : []}
                    color="brown"
                    sectionHeight="100px"
                    grid={6}
                />
            </ContentSection>
        </div>
    );
};

export default SponsorPage;
