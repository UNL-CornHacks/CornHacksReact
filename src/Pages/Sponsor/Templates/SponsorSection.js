import React from "react";
import "../Styles/SponsorSection.css";
import SponsorCard from "Organisms/SponsorCard";
import Type from "Atoms/Type";

const SponsorSection = ({
    title,
    titleColor,
    sponsorData,
    sectionHeight,
    grid,
}) => {
    const sponsorCards = sponsorData.map((sponsor) => (
        <SponsorCard
            key={sponsor.id}
            image={sponsor.fields["Sponsor Logo"][0].url}
            link={sponsor.fields["Sponsor Website"]}
            title={sponsor.fields["Company"]}
            imageHeight={sectionHeight}
        />
    ));
    return (
        <div className="ch-sponsor-section">
            <Type size="h2" color={titleColor} bold>
                {title}
            </Type>
            <div className={`ch-sponsor-cards ch-card-grid-${grid}`}>
                {sponsorCards}
            </div>
        </div>
    );
};

export default SponsorSection;
