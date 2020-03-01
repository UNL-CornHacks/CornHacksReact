import Airtable from "airtable";
import React, { useState, useEffect } from "react";
import Colors from "Constants/Colors";

import Card from "Organisms/Card";
import Type from "Atoms/Type";

const SandboxPage = () => {
  const [sponsorData, setSponsorData] = useState({
    platinum: [],
    gold: [],
    silver: [],
    bronze: []
  });

  useEffect(() => {
    const base = new Airtable({
      apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
    }).base(process.env.REACT_APP_AIRTABLE_BASE);
    base("Companies")
      .select({
        filterByFormula:
          "IF(OR({Sponsor Level} = BLANK(), {Sponsor Logo} = BLANK()) , FALSE(), TRUE())",
        view: "All companies: by employees"
      })
      .firstPage(function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(records);
        setSponsorData({
          platinum: records.filter(
            record => record.fields["Sponsor Level"] === "Platinum"
          ),
          gold: records.filter(
            record => record.fields["Sponsor Level"] === "Gold"
          ),
          silver: records.filter(
            record => record.fields["Sponsor Level"] === "Silver"
          ),
          bronze: records.filter(
            record => record.fields["Sponsor Level"] === "Bronze"
          )
        });
      });
  }, []);
  console.log(sponsorData);
  if (sponsorData) {
    return (
      <div style={pageStyling}>
        <div style={pageContentStyling}>
          <Type size="h4" bold>
            Platinum Sponsors:
          </Type>
          {sponsorData.platinum.map(sponsor => (
            <Card
              image={sponsor.fields["Sponsor Logo"][0].url}
              link={sponsor.fields["Sponsor Website"]}
            >
              <Type size="h6">{sponsor.fields["Company"]}</Type>
            </Card>
          ))}
          <Type size="h4" bold>
            Gold Sponsors:
          </Type>
          {sponsorData.gold.map(sponsor => (
            <Card
              image={sponsor.fields["Sponsor Logo"][0].url}
              link={sponsor.fields["Sponsor Website"]}
            >
              <Type size="h6">{sponsor.fields["Company"]}</Type>
            </Card>
          ))}
          <Type size="h4" bold>
            Silver Sponsors:
          </Type>
          {sponsorData.silver.map(sponsor => (
            <Card
              image={sponsor.fields["Sponsor Logo"][0].url}
              link={sponsor.fields["Sponsor Website"]}
            >
              <Type size="h6">{sponsor.fields["Company"]}</Type>
            </Card>
          ))}
          <Type size="h4" bold>
            Bronze Sponsors:
          </Type>
          {sponsorData.bronze.map(sponsor => (
            <Card
              image={sponsor.fields["Sponsor Logo"][0].url}
              link={sponsor.fields["Sponsor Website"]}
            >
              <Type size="h6">{sponsor.fields["Company"]}</Type>
            </Card>
          ))}
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
  display: "flex"
};

const pageContentStyling = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  textAlign: "center",
  flexDirection: "column"
};

export default SandboxPage;
