import React, { useState } from "react";
import HomeHero from "Pages/Home/Components/HomeHero";
import Colors from "Constants/Colors";
import ImportantDates from "Constants/ImportantDates";
import Type from "GlobalComponents/Type";
import TextSection from "GlobalComponents/TextSection";
import ImageSection from "GlobalComponents/ImageSection";
import AirtableCompanies from "Calls/AirtableCompanies";
import SponsorSection from "Pages/Sponsor/Components/SponsorSection";
import Countdown from "GlobalComponents/Countdown";

const HomePage = () => {
    const [sponsors, getSponsors] = useState({});
    return (
        <div>
            <AirtableCompanies setSponsorData={getSponsors} />
            <HomeHero />
            <ImageSection
                image={"Corndell.png"}
                backgroundColor={Colors.DARK_BLUE}
            >
                <Type size="h3" color={Colors.WHITE} bold>
                    Learn New Skills
                </Type>
                {/* <Type size="h5" color={Colors.WHITE}>
                    talk about the skills you learn
                </Type> */}
            </ImageSection>
            <ImageSection
                image={"Chairs.png"}
                backgroundColor={Colors.DARK_BLUE}
                right
            >
                <Type size="h3" color={Colors.WHITE} bold>
                    Build Incredible Things
                </Type>
                <Type size="h5" color={Colors.WHITE}>
                    destroy build destroy
                </Type>
            </ImageSection>
            <ImageSection
                image={"Corndell.png"}
                backgroundColor={Colors.DARK_BLUE}
            >
                <Type size="h3" color={Colors.WHITE} bold>
                    Get Cool Prizes
                </Type>
                <Type size="h5" color={Colors.WHITE}>
                    talk about the prizes you win
                </Type>
            </ImageSection>
            <TextSection backgroundColor={Colors.DARK_BLUE}>
                <Countdown
                    date={ImportantDates.START_DATE}
                    afterText="until Cornhacks"
                />
            </TextSection>
            <TextSection backgroundColor="#ffffff">
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
            </TextSection>
        </div>
    );
};

export default HomePage;
