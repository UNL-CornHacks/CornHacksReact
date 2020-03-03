import React from "react";
import "./Styles/SponsorSection.css";
import SponsorCard from "Organisms/SponsorCard";
import Type from "Atoms/Type";
import { Card } from "semantic-ui-react";

const SponsorSection = ({ title, sponsorData, color, sectionHeight }) => {
    const sponsorCards = sponsorData.map(sponsor => (
        <SponsorCard
            key={sponsor.key}
            image={sponsor.fields["Sponsor Logo"][0].url}
            link={sponsor.fields["Sponsor Website"]}
            title={sponsor.fields["Company"]}
            color={color}
            imageHeight={sectionHeight}
        />
    ));
    return (
        <div className="ch-sponsor-section">
            <Type size="h4" bold>
                {title}
            </Type>
            <Card.Group className="ch-sponsor-cards">{sponsorCards}</Card.Group>
        </div>
    );
};

export default SponsorSection;
