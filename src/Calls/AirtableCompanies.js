import { useEffect } from "react";

const AirtableCompanies = ({ setSponsorData }) => {
  //     useEffect(() => {
  //         const base = new Airtable({
  //             apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
  //         }).base(process.env.REACT_APP_AIRTABLE_SPONSOR_BASE);
  //         base("Companies")
  //             .select({
  //                 filterByFormula:
  //                     "IF(OR({Sponsor Level} = BLANK(), {Sponsor Logo} = BLANK()) , FALSE(), TRUE())",
  //                 view: "All companies: by employees",
  //             })
  //             .firstPage(function (err, records) {
  //                 if (err) {
  //                     console.error(err);
  //                     return;
  //                 }
  //                 setSponsorData({
  //                     platinum: records.filter(
  //                         (record) =>
  //                             record.fields["Sponsor Level"] === "Platinum"
  //                     ),
  //                     gold: records.filter(
  //                         (record) => record.fields["Sponsor Level"] === "Gold"
  //                     ),
  //                     silver: records.filter(
  //                         (record) => record.fields["Sponsor Level"] === "Silver"
  //                     ),
  //                     bronze: records.filter(
  //                         (record) => record.fields["Sponsor Level"] === "Bronze"
  //                     ),
  //                 });
  //             });
  //     }, [setSponsorData]);
  //     return false;
};

export default AirtableCompanies;
