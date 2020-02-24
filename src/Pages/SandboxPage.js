import Airtable from "airtable";
import React, { useState, useEffect } from "react";
import Colors from "Constants/Colors";

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
        filterByFormula: "IF({Sponsor Level} = BLANK(), FALSE(), TRUE())",
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
          <p style={paragraph}>
            <b>Platinum Sponsors:</b>
            <br />
            {sponsorData.platinum.map(sponsor => (
              <>
                <li>{sponsor.fields["Company"]}</li>
                <br />
              </>
            ))}
            <br />
            <b>Gold Sponsors:</b>
            <br />
            {sponsorData.gold.map(sponsor => (
              <>
                <li>{sponsor.fields["Company"]}</li>
                <br />
              </>
            ))}
            <br />
            <b>Silver Sponsors:</b>
            <br />
            {sponsorData.silver.map(sponsor => (
              <>
                <li>{sponsor.fields["Company"]}</li>
                <br />
              </>
            ))}
            <br />
            <b>Bronze Sponsors:</b>
            <br />
            <ul>
              {sponsorData.bronze.map(sponsor => (
                <>
                  <li>{sponsor.fields["Company"]}</li>
                  <br />
                </>
              ))}
            </ul>
            <br />
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div style={pageStyling}>
        <div style={pageContentStyling}>
          <p style={paragraph}>Loading...</p>
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

const paragraph = {
  color: Colors.WHITE,
  fontSize: "25px"
};

export default SandboxPage;
