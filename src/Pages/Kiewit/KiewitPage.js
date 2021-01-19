import React from "react";
import Colors from "Constants/Colors";
import GradientHero from "GlobalComponents/GradientHero";
import TextSection from "GlobalComponents/TextSection";
import Type from "GlobalComponents/Type";
import Button from "GlobalComponents/Button";

const KiewitPage = () => (
    <>
        <GradientHero
            colors={[Colors.YELLOW, Colors.GREEN, Colors.BLUE]}
            height="70vh"
            header
            boxShadow
        >
            <Type size="h1" bold align="center">
                Kiewit
            </Type>
            <div className="ch-button-container-center">
            <Button to="https://kiewitcareers.kiewit.com/go/Kiewit_IT-Technology/8156500/">
                Open Jobs
            </Button>
            <Button to="https://kiewit.wistia.com/medias/4moi5fifsi">
                Intern Video
            </Button>
            <Button to="https://recruiting.kiewit.com/wp-content/uploads/2020/07/Flyer_WhyKiewit.pdf">
                Why Kiewit?
            </Button>
            </div>
        </GradientHero>
        <TextSection backgroundColor={Colors.DARK_BLUE}>
            <Type size="h5">
            We know you’re not just looking for a job. You want an adventure — to do something that makes a real impact on
the world around you. You want more opportunity, cutting-edge training, meaningful responsibilities from Day One,
and you never settle for second best. We see you — it’s pretty easy to spot Kiewit talent. They stand out in a crowd
with high standards, a commitment to excellence, and they take care of each other like family, uniting in challenges and
celebrating triumphs. That’s what you’ll find here at Kiewit. So if you are looking for more than a job, look no further.
            </Type>
            <div className="ch-button-container-center">
                <Button inverted to="https://kiewitcareers.kiewit.com/go/Kiewit_IT-Technology/8156500/">
                    Apply for IT Technology openings
                </Button>
            </div>
            <Type size="h5">
                Kiewit employees design and build some of the largest and most innovative projects in the world. To do it, Kiewit relies on advanced and modern technology and software. From implementing and adopting existing software and programs, to designing and engineering new technologies, Kiewit's technology employees provide the field with the technology solutions, tools and support they need to help Kiewit reach its goal of being the best contractor on Earth.
            </Type>
        </TextSection>
    </>
);

export default KiewitPage;
