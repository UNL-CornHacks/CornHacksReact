import Airtable from "airtable";
import React, { useEffect } from "react";
import Colors from "Constants/Colors";

const SandboxPage = () => {
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
        records.forEach(function(record) {
          console.log("Retrieved", record.get("Company"));
        });
      });
  });
  return <div style={pageStyling}></div>;
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

export default SandboxPage;
