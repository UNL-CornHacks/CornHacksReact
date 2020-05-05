import Airtable from "airtable";
import React, { useState, useEffect } from "react";
import Colors from "Constants/Colors";

import Type from "Atoms/Type";
import SponsorSection from "Pages/Sponsor/Templates/SponsorSection";

const SandboxPage = () => {
    const [sponsorData, setSponsorData] = useState({
        platinum: [],
        gold: [],
        silver: [],
        bronze: [],
    });

    useEffect(() => {
        const base = new Airtable({
            apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
        }).base(process.env.REACT_APP_AIRTABLE_BASE);
        base("Companies")
            .select({
                filterByFormula:
                    "IF(OR({Sponsor Level} = BLANK(), {Sponsor Logo} = BLANK()) , FALSE(), TRUE())",
                view: "All companies: by employees",
            })
            .firstPage(function (err, records) {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(records);
                setSponsorData({
                    platinum: records.filter(
                        (record) =>
                            record.fields["Sponsor Level"] === "Platinum"
                    ),
                    gold: records.filter(
                        (record) => record.fields["Sponsor Level"] === "Gold"
                    ),
                    silver: records.filter(
                        (record) => record.fields["Sponsor Level"] === "Silver"
                    ),
                    bronze: records.filter(
                        (record) => record.fields["Sponsor Level"] === "Bronze"
                    ),
                });
            });
    }, []);
    if (sponsorData) {
        return (
            <div style={pageStyling}>
                <div style={pageContentStyling}>
                    <SponsorSection
                        title="Platinum Sponsors"
                        titleColor={Colors.DARK_BLUE}
                        sponsorData={sponsorData.platinum}
                        color="blue"
                        sectionHeight="200px"
                    />
                    <SponsorSection
                        title="Gold Sponsors"
                        titleColor={Colors.DARK_BLUE}
                        sponsorData={sponsorData.gold}
                        color="yellow"
                        sectionHeight="150px"
                    />
                    <SponsorSection
                        title="Silver Sponsors"
                        titleColor={Colors.DARK_BLUE}
                        sponsorData={sponsorData.silver}
                        color="grey"
                        sectionHeight="100px"
                    />
                    <SponsorSection
                        title="Bronze Sponsors"
                        titleColor={Colors.DARK_BLUE}
                        sponsorData={sponsorData.bronze}
                        color="brown"
                        sectionHeight="50px"
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div style={pageStyling}>
                <div style={pageContentStyling}>
                    <Type size="h2" bold>
                        Loading...
                    </Type>
                </div>
            </div>
        );
    }
};

/*
STYLING
*/

const pageStyling = {
    width: "100%",
    height: "100%",
    background: `radial-gradient(${Colors.BLUE}, ${Colors.DARK_BLUE})`,
    position: "fixed",
    display: "flex",
};

const pageContentStyling = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    textAlign: "center",
    flexDirection: "column",
    overflowY: "scroll",
};

export default SandboxPage;
