import React from "react";
import Type from "Atoms/Type";
import ContentSection from "Atoms/ContentSection";
import Colors from "Constants/Colors";

import TableCell from "Organisms/TableCell";

import "../Styles/SponsorTable.css";

const SponsorTable = () => {
    return (
        <ContentSection backgroundColor={"#eee"}>
            <Type size="h2" color={Colors.DARK_BLUE} bold>
                Sponsorship Tiers
            </Type>
            <table className="ch-sponsor-tier-table">
                <thead>
                    <tr>
                        <TableCell header></TableCell>
                        <TableCell header>Platinum</TableCell>
                        <TableCell header>Gold</TableCell>
                        <TableCell header>Silver</TableCell>
                        <TableCell header>Bronze</TableCell>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <TableCell header>Cost</TableCell>
                        <TableCell yes>$8000</TableCell>
                        <TableCell yes>$4000</TableCell>
                        <TableCell yes>$2000</TableCell>
                        <TableCell yes>$1000</TableCell>
                    </tr>
                    <tr>
                        <TableCell header>Logo Size</TableCell>
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
                        <TableCell header>Tech Talk</TableCell>
                        <TableCell yes>60 mins</TableCell>
                        <TableCell yes>30 mins</TableCell>
                        <TableCell yes>15 mins</TableCell>
                        <TableCell no>None</TableCell>
                    </tr>
                    <tr>
                        <TableCell header>Logo on Shirt?</TableCell>
                        <TableCell yes>Yes</TableCell>
                        <TableCell yes>Yes</TableCell>
                        <TableCell yes>Yes</TableCell>
                        <TableCell no>No</TableCell>
                    </tr>
                    <tr>
                        <TableCell header>Booth?</TableCell>
                        <TableCell yes>Yes</TableCell>
                        <TableCell yes>Yes</TableCell>
                        <TableCell no>No</TableCell>
                        <TableCell no>No</TableCell>
                    </tr>
                    <tr>
                        <TableCell header>Swag in a Bag?</TableCell>
                        <TableCell yes>Yes</TableCell>
                        <TableCell yes>Yes</TableCell>
                        <TableCell no>No</TableCell>
                        <TableCell no>No</TableCell>
                    </tr>
                    <tr>
                        <TableCell header>
                            Slack Channel in CornHacks Slack?
                        </TableCell>
                        <TableCell yes>Yes</TableCell>
                        <TableCell yes>Yes</TableCell>
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
                        <TableCell header>Prizing Track?</TableCell>
                        <TableCell yes>Yes</TableCell>
                        <TableCell no>No</TableCell>
                        <TableCell no>No</TableCell>
                        <TableCell no>No</TableCell>
                    </tr>
                </tbody>
            </table>
        </ContentSection>
    );
};

export default SponsorTable;
