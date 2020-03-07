import React from "react";
import HomeHero from "Templates/HomeHero";
import Colors from "Constants/Colors";
import Type from "Atoms/Type";
import ContentSection from "Atoms/ContentSection";
import ScrollTrigger from "Atoms/ScrollTrigger";

const HomePage = () => {
    return (
        <div>
            <HomeHero />
            <ContentSection backgroundColor={Colors.DARK_BLUE}>
                <ScrollTrigger trigger={100}>
                    <Type size="h2" bold>
                        Test123
                    </Type>
                    <Type size="p">
                        Hey I just wanted to see how easy it was to make
                        something like this thanks
                    </Type>
                </ScrollTrigger>
            </ContentSection>
        </div>
    );
};

export default HomePage;
