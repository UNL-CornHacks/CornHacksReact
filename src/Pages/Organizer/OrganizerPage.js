import React from "react";
import Colors from "Constants/Colors";
import GradientHero from "GlobalComponents/GradientHero";
import TextSection from "GlobalComponents/TextSection";
import ImageSection from "GlobalComponents/ImageSection";
import Type from "GlobalComponents/Type";
import Button from "GlobalComponents/Button";

const OrganizerPage = () => (
    <>
        <GradientHero
            colors={[Colors.YELLOW, Colors.GREEN, Colors.BLUE]}
            height="70vh"
            header
            boxShadow
        >
            <Type size="h1" bold>
                Become an Organizer
            </Type>
            <Button to="https://forms.gle/D9MvUFqs2Sk2C3917">
                Apply Today!
            </Button>
        </GradientHero>
        <TextSection backgroundColor={Colors.DARK_BLUE}>
            <Type size="h5">
                CornHacks is a huge event with a lot of moving parts: sponsors,
                prizes, food, games, judging, and so much more. If you have an
                interest in hackathons or event planning, think about becoming
                an organizer for the next CornHacks event! We are a dedicated
                group of students that work all year to plan an awesome
                hackathon for hundreds of students. We are always looking to
                expand our team and hear new ideas; we have different teams and
                roles available, so you can help out wherever you fit best.
                Reach out to our current organizers to learn more and{" "}
                <a
                    style={{ color: Colors.WHITE }}
                    href="https://forms.gle/D9MvUFqs2Sk2C3917"
                >
                    apply today
                </a>
                !
            </Type>
            <Type size="h5" bold underline>
                Please note that joining the organizer team will disqualify you
                from entering any CornHacks event as a participant.
            </Type>
        </TextSection>
        <TextSection backgroundColor={Colors.LIGHT_GREY}>
            <Type size="h2" bold color={Colors.DARK_BLUE}>
                Our Teams:
            </Type>
        </TextSection>
        <ImageSection image={"Finance.png"} backgroundColor={Colors.LIGHT_GREY}>
            <Type size="h3" bold color={Colors.DARK_BLUE}>
                Finance
            </Type>
            <Type size="h5" color={Colors.DARK_BLUE}>
                The number-crunchers. The finance team works with CornHacks
                sponsors, balances the event budget, and generally makes sure
                CornHacks can keep running with adequate funding. We would not
                be able to put on an event of such a large scale without our
                finance team! The primary role of most finance team members is
                correspondence with sponsors: reaching out to potential
                sponsors, organizing sponsorship tiers, and making sure sponsors
                are properly cared for throughout the event. This team has
                members interested in budgeting and finance, but also loves to
                see people-people who can work with sponsors before and during
                the event.
            </Type>
        </ImageSection>
        <ImageSection
            image={"Logistics.png"}
            backgroundColor={Colors.LIGHT_GREY}
        >
            <Type size="h3" bold color={Colors.DARK_BLUE}>
                Logistics
            </Type>
            <Type size="h5" color={Colors.DARK_BLUE}>
                The logistics team is the core of the CornHacks team, working to
                ensure that every CornHacks event is properly planned and
                executed. They organize the food, activities, workshops,
                judging, and so much more for our hackathon. We need a strong
                logistics team to make sure our participants are engaged and
                excited! This involves the core activities of a hackathon – team
                formation, keynotes, judging, etc – but also all the fun stuff
                like workshops and games! Those interested in the organization
                of event logistics, scheduling, and coming up with creative
                solutions will be great on this team.
            </Type>
        </ImageSection>
        <ImageSection
            image={"Marketing.png"}
            backgroundColor={Colors.LIGHT_GREY}
        >
            <Type size="h3" color={Colors.DARK_BLUE} bold>
                Marketing
            </Type>
            <Type size="h5" color={Colors.DARK_BLUE}>
                The marketing team is the public face and voice of the CornHacks
                team. They prepare posters, graphics, and digital marketing to
                show students what CornHacks is all about. They also make all of
                the awesome swag that CornHacks participants and sponsors
                receive during the event! Those interested in digital art,
                graphic design, or the preparation of marketing prose will fit
                right in with our marketing team!
            </Type>
        </ImageSection>
        <TextSection backgroundColor={Colors.DARK_BLUE}>
            <Type size="h5">
                No matter which team you join, you will be a part of a driven
                group of students that want to organize an engaging and valuable
                hackathon for undergraduate students. Any UNL student is welcome
                to join the CornHacks organizers – we have no requirements
                regarding grade or field of study. Our only ask is that you
                bring your creative ideas and passion to our team.{" "}
                <a
                    style={{ color: Colors.WHITE }}
                    href="https://forms.gle/D9MvUFqs2Sk2C3917"
                >
                    Apply today if you are interested
                </a>
                !
            </Type>
            <Type size="h5">
                If you have any questions, feel free to contact our Membership
                Director, Parker Segal:{" "}
                <a
                    style={{ color: Colors.WHITE }}
                    href="mailto:parker.segal@cornhacks.com"
                >
                    parker.segal@cornhacks.com
                </a>
                .
            </Type>
        </TextSection>
    </>
);

export default OrganizerPage;
