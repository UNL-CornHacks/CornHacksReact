import React from "react";
import Type from "Atoms/Type";
import ContentSection from "Atoms/ContentSection";
import Colors from "Constants/Colors";

import TableCell from "Organisms/TableCell";

import "./Styles/SponsorTable.css";

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
                        <TableCell>$8000</TableCell>
                        <TableCell>$4000</TableCell>
                        <TableCell>$2000</TableCell>
                        <TableCell>$1000</TableCell>
                    </tr>
                    <tr>
                        <TableCell header>Logo Size</TableCell>
                        <TableCell>XL Logo</TableCell>
                        <TableCell>L Logo</TableCell>
                        <TableCell>M Logo</TableCell>
                        <TableCell>S Logo</TableCell>
                    </tr>
                    <tr>
                        <TableCell header>Booth?</TableCell>
                        <TableCell>Yes</TableCell>
                        <TableCell>Yes</TableCell>
                        <TableCell>No</TableCell>
                        <TableCell>No</TableCell>
                    </tr>
                    <tr>
                        <TableCell header>Tech Talk</TableCell>
                        <TableCell>60 mins</TableCell>
                        <TableCell>30 mins</TableCell>
                        <TableCell>15 mins</TableCell>
                        <TableCell>None</TableCell>
                    </tr>
                </tbody>
            </table>
        </ContentSection>
    );
};

export default SponsorTable;
