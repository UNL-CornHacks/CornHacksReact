import React, { useState } from "react";
import HomeHero from "Pages/Home/Templates/HomeHero";
import Colors from "Constants/Colors";
import ImportantDates from "Constants/ImportantDates";
import Type from "Atoms/Type";
import ContentSection from "Atoms/ContentSection";
import AirtableCompanies from "Calls/AirtableCompanies";
import SponsorSection from "Pages/Sponsor/Templates/SponsorSection";
import Countdown from "Molecules/Countdown";

const HomePage = () => {
    const [sponsors, getSponsors] = useState({});
    return (
        <div>
            <AirtableCompanies setSponsorData={getSponsors} />
            <HomeHero />
            <ContentSection backgroundColor={Colors.DARK_BLUE}>
                <Countdown
                    date={ImportantDates.START_DATE}
                    afterText="until Cornhacks"
                />
            </ContentSection>
            <ContentSection backgroundColor={"#ddd"}>
                <Type size="h2" color={Colors.DARK_BLUE} bold>
                    Test123
                </Type>
                <Type size="p" color={Colors.DARK_BLUE}>
                    Hey I just wanted to see how easy it was to make something
                    like this thanks
                </Type>
            </ContentSection>
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

export default HomePage;
