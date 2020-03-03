import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Styles/SponsorCard.css";

const SponsorCard = ({ image, link, title, color, imageHeight }) => {
    const cardBody = (
        <>
            <Image
                className="ch-card-image"
                style={{
                    backgroundImage: `url(${image})`,
                    height: imageHeight
                }}
                wrapped
                ui={false}
            />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
            </Card.Content>
        </>
    );

    return link ? (
        <Card as="a" href={link} color={color}>
            {cardBody}
        </Card>
    ) : (
        <Card color={color}>{cardBody}</Card>
    );
};

export default SponsorCard;
