import React, { useState } from "react";
import HomeHero from "Pages/Home/Components/HomeHero";
import Colors from "Constants/Colors";
import ImportantDates from "Constants/ImportantDates";
import Type from "GlobalComponents/Type";
import TextSection from "GlobalComponents/TextSection";
import ImageSection from "GlobalComponents/ImageSection";
import AirtableCompanies from "Calls/AirtableCompanies";
import SponsorSection from "Pages/Sponsor/Components/SponsorSection";
import Countdown from "GlobalComponents/Countdown";
import Question from "GlobalComponents/Question";
import Overlay from "GlobalComponents/Overlay";
import Form from "GlobalComponents/Form";
import FormInput from "GlobalComponents/FormInput";
import Airtable from "airtable";
import Button from "GlobalComponents/Button";

const HomePage = () => {
    const [sponsors, getSponsors] = useState({});
    const [overlayState, setOverlayState] = useState(false);
    return (
        <div>
            <AirtableCompanies setSponsorData={getSponsors} />
            <HomeHero showOverlay={() => setOverlayState(true)} />
            <TextSection backgroundColor={Colors.DARK_BLUE}>
                <Type size="h2" bold align="center">
                    Schedule is now available!
                </Type>
                <div className="ch-button-container-center">
                <Button inverted internal to="/schedule/">
                    View 2021 Schedule
                </Button>
                <Button inverted to="https://docs.google.com/forms/d/e/1FAIpQLSczXHLDTVcLJN_2zis8xUScd6fQOkIjBS1M40S2SVyNDC-YsQ/viewform?usp=sf_link">
                    Sign up for CornHacks 2021
                </Button>
                </div>
            </TextSection>
            <ImageSection
                image={"Corndell.png"}
                backgroundColor={Colors.DARK_BLUE}
                maxWidth="500px"
            >
                <Type size="h5" color={Colors.WHITE}>
                    CornHacks aims to bring some of the most talented developers
                    from around the Midwest to join in a weekend full of
                    hacking. Hosted at the University of Nebraska-Lincoln, over
                    150 participants will code all day and night to be assessed
                    by industry professionals and compete for several prizes.
                </Type>
            </ImageSection>
            <div id="learn-more">
                <ImageSection
                    image={"Gradiente.png"}
                    backgroundColor={Colors.DARK_BLUE}
                >
                    <Type size="h2" bold>
                        FAQ
                    </Type>
                    <Question question="What is a Hackathon?">
                        A hackathon is an invention marathon. Students come
                        together to build innovative software and hardware over
                        an extended period. It's{" "}
                        <a
                            style={{ color: Colors.WHITE }}
                            href="https://medium.com/@tfogo/hackathons-are-for-beginners-77a9c9c0e000#.cj21niskl"
                        >
                            very beginner friendly
                        </a>{" "}
                        and is designed to be engaging to students at all levels
                        of experience. We would love for you to come and
                        experience a hackathon for yourself!
                    </Question>
                    <Question question="Where and when will CornHacks take place?">
                        We are taking CornHacks 2021 virtual! CornHacks will
                        start on Saturday, January 30, 2021, and will continue
                        through Sunday, January 31, 2021 — with an optional info
                        session on the evening of Friday, January 29.
                        <br />
                        <br />
                        The event will be hosted over Discord; it will feature
                        virtual events, workshops, and keynotes. And rest
                        assured: you will definitely still receive an abundance
                        of swag. CornHacks registration will open in late
                        October. Feel free to check back here for any updates!
                    </Question>
                    <Question question="What is the cost to attend CornHacks?">
                        Nothing. $0.00. Free. There is no cost to attend
                        CornHacks. We only ask you bring your creativity and
                        skill.
                    </Question>
                    <Question question="Do I need any prior experience to register for CornHacks? What if this is my first hackathon?">
                        There is no prior experience required to participate in
                        CornHacks. Any and all student participants are welcome!
                        We are happy to help you form a team, get started with
                        your project, and have an awesome first hackathon!
                    </Question>
                    <Question question="Do I need to be a college student to attend?">
                        Yes, attendees must be currently enrolled undergraduate
                        students at a college/university. Additionally,
                        attendees must be at or over 18 years of age.
                    </Question>
                    <Question question="Do I need to form a team before I register? What do I do if I do not have a team?">
                        Participants are not required to find a team prior to
                        the event, although you are certainly welcome to do so.
                        At the beginning of the event, we will host a session
                        for all still looking to form a team so you can find
                        others with whom you can work. Teams may have a maximum
                        of four members.
                    </Question>
                    <Question question="Will there be any swag or prizes?">
                        SO much swag, SO many prizes. All CornHacks attendees
                        will receive a t-shirt, stickers, and tons of other
                        goodies. Teams that win tiered or track prizes will also
                        receive additional prizes; while this year’s prizes are
                        still being determined, previous years have seen prizes
                        such as flatscreen TVs, Nintendo Switches, and
                        high-quality wireless headphones.
                    </Question>
                    <Question question="Are there rules for this event?">
                        There are, in fact! Attendees will have to adhere to the{" "}
                        <a
                            style={{ color: Colors.WHITE }}
                            href="https://studentconduct.unl.edu/student-code-conduct"
                        >
                            UNL Student Code of Conduct
                        </a>
                        . More specific rules may be prescribed by CornHacks
                        organizers before or during the event.
                    </Question>
                    <Question question="Is there anything I need to do in advance?">
                        There are a couple of things we would ask you do before
                        the event begins: please fill out{" "}
                        <a
                            style={{ color: Colors.WHITE }}
                            href="https://drive.google.com/file/d/1oeRN-Rim_e4SsKEeEv_7yCnaC52OODFI/view?usp=sharing"
                        >
                            this photo release waiver
                        </a>{" "}
                        and{" "}
                        <a
                            style={{ color: Colors.WHITE }}
                            href="https://forms.gle/xxKjrRq9xmanZ1dq9"
                        >
                            this CornHacks participant survey
                        </a>{" "}
                        (you will be able to upload your photo release waiver
                        when you fill out the registration survey).
                    </Question>
                </ImageSection>
            </div>
            <TextSection backgroundColor={Colors.DARK_BLUE}>
                <Countdown
                    date={ImportantDates.START_DATE}
                    afterText="until Cornhacks"
                />
            </TextSection>
            <TextSection backgroundColor="#ffffff">
                <SponsorSection
                    title="Platinum Sponsors"
                    titleColor={Colors.DARK_BLUE}
                    sponsorData={sponsors.platinum ? sponsors.platinum : []}
                    color="blue"
                    sectionHeight="250px"
                    grid={3}
                />
                <SponsorSection
                    title="Gold Sponsors"
                    titleColor={Colors.DARK_BLUE}
                    sponsorData={sponsors.gold ? sponsors.gold : []}
                    color="yellow"
                    sectionHeight="200px"
                    grid={4}
                />
                <SponsorSection
                    title="Silver Sponsors"
                    titleColor={Colors.DARK_BLUE}
                    sponsorData={sponsors.silver ? sponsors.silver : []}
                    color="grey"
                    sectionHeight="100px"
                    grid={5}
                />
                <SponsorSection
                    title="Bronze Sponsors"
                    titleColor={Colors.DARK_BLUE}
                    sponsorData={sponsors.bronze ? sponsors.bronze : []}
                    color="brown"
                    sectionHeight="100px"
                    grid={6}
                />
            </TextSection>
            <Overlay
                showOverlay={overlayState}
                setOverlayState={setOverlayState}
            >
                <Type size="h2" bold align="center">
                    Notify me when registration opens!
                </Type>
                <Form
                    pushForm={(data) => {
                        const base = new Airtable({
                            apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
                        }).base(process.env.REACT_APP_AIRTABLE_NOTIFY_BASE);
                        base("EarlyNotifications").create(
                            data,
                            (err, record) => {
                                console.log(err, record);
                            }
                        );
                        setOverlayState(false);
                    }}
                >
                    <FormInput
                        labelColor={Colors.WHITE}
                        placeholder={"First Name"}
                        formId={"First Name"}
                        required
                    />
                    <FormInput
                        labelColor={Colors.WHITE}
                        placeholder={"Last Name"}
                        formId={"Last Name"}
                        required
                    />
                    <FormInput
                        labelColor={Colors.WHITE}
                        placeholder={"Email"}
                        formId={"Email"}
                        required
                    />
                    <FormInput
                        labelColor={Colors.WHITE}
                        placeholder={"University"}
                        formId={"University"}
                    />
                </Form>
            </Overlay>
        </div>
    );
};

export default HomePage;
