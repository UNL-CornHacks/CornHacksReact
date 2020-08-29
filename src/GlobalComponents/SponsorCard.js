import React from "react";
import Type from "GlobalComponents/Type";
import "./Styles/SponsorCard.css";

const SponsorCard = ({ image, link, title, color, imageHeight }) => {
    const learnMore = link ? (
        <Type size="h6" className="ch-card-learn-more">
            {"Learn More >"}
        </Type>
    ) : (
        false
    );
    const cardBody = (
        <>
            <Type size="h5" align="center" className="ch-card-title">
                {title}
            </Type>
            <div
                className="ch-card-image"
                style={{
                    backgroundImage: `url(${image})`,
                    height: imageHeight,
                }}
            />
            {learnMore}
        </>
    );

    return link ? (
        <a className="ch-sponsor-card" as="a" href={link} color={color}>
            {cardBody}
        </a>
    ) : (
        <div className="ch-sponsor-card" color={color}>
            {cardBody}
        </div>
    );
};

export default SponsorCard;
