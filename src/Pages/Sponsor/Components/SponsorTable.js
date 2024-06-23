import React from "react";
import Type from "GlobalComponents/Type";
import TextSection from "GlobalComponents/TextSection";
import TableCell from "GlobalComponents/TableCell";

import Colors from "Constants/Colors";
import { HashLink } from "react-router-hash-link";

import "../Styles/SponsorTable.css";

const SponsorTable = () => {
    return (
        <TextSection backgroundColor={"#eee"}>
            <div className="sponsorInfo">
                <h1>Want to Become a Sponsor?</h1>
                <p className="infoText">Becoming a sponsor is a great way to support local students while recruiting for internship and employment opportunities!
                As a sponsor, you get to work intimately with hackathon participants and can unlock the perks from the table below. Plus, who doesn't love
                seeing their logo on a t-shirt?? <br/> For more information on sponsoring CornHacks, contact us at <span style={{ fontSize: '20px', fontWeight: 'bold'}}>cornhacks@unl.edu</span></p>
                <table className="ch-sponsor-tier-table">
                    <thead>
                        <tr>
                            <TableCell header></TableCell>
                            <TableCell header className="platinum"><p style={{ color: "black", fontSize: 20}}>Platinum</p></TableCell>
                            <TableCell header className="gold"><p style={{ color: "black", fontSize: 20}}>Gold</p></TableCell>
                            <TableCell header className="silver"><p style={{ color: "black", fontSize: 20}}>Silver</p></TableCell>
                            <TableCell header className="bronze"><p style={{ color: "black", fontSize: 20}}>Bronze</p></TableCell>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <TableCell header>Cost</TableCell>
                            <TableCell yes>$3000</TableCell>
                            <TableCell yes>$2000</TableCell>
                            <TableCell yes>$1000</TableCell>
                            <TableCell yes>$500</TableCell>
                        </tr>
                        <tr>
                            <TableCell header firstColumn>Logo Size</TableCell>
                            <TableCell yes>XL Logo</TableCell>
                            <TableCell yes>L Logo</TableCell>
                            <TableCell yes>M Logo</TableCell>
                            <TableCell yes>S Logo</TableCell>
                        </tr>
                        <tr>
                            <TableCell header>Logo on Website?</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell yes>Yes</TableCell>
                        </tr>
                        <tr>
                            <TableCell header>Recruiting Info?</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell yes>Yes</TableCell>
                        </tr>
                        <tr>
                            <TableCell header>Logo on Shirt?</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell yes>Yes</TableCell>
                        </tr>
                        <tr>
                            <TableCell header>Swag in Bag?</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell no>No</TableCell>
                        </tr>
                        <tr>
                            <TableCell header>Booth during the Event?</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell no>No</TableCell>
                        </tr>
                        <tr>
                            <TableCell header>Tech Talk?</TableCell>
                            <TableCell yes>60 minutes</TableCell>
                            <TableCell yes>30 minutes</TableCell>
                            <TableCell no>No</TableCell>
                            <TableCell no>No</TableCell>
                        </tr>
                        <tr>
                            <TableCell header>"Sponsored by" in Emails?</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell no>No</TableCell>
                            <TableCell no>No</TableCell>
                        </tr>
                        <tr>
                            <TableCell header>Discord Channel?</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell no>No</TableCell>
                            <TableCell no>No</TableCell>
                        </tr>
                        <tr>
                            <TableCell header>Keynote?</TableCell>
                            <TableCell yes>10 minutes</TableCell>
                            <TableCell no>No</TableCell>
                            <TableCell no>No</TableCell>
                            <TableCell no>No</TableCell>
                        </tr>
                        <tr>
                            <TableCell header>
                                <HashLink
                                    style={{ color: Colors.WHITE }}
                                    to="#powered-by-you"
                                >
                                    Powered by YOU
                                </HashLink>
                                ?
                            </TableCell>
                            <TableCell yes>Yes</TableCell>
                            <TableCell no>No</TableCell>
                            <TableCell no>No</TableCell>
                            <TableCell no>No</TableCell>
                        </tr>
                    </tbody>
                </table>
            </div>
        </TextSection>
    );
};

export default SponsorTable;
