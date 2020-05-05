import React from "react";
import Question from "Molecules/Question";
import Type from "Atoms/Type";
import ContentSection from "Atoms/ContentSection";
import Colors from "Constants/Colors";

const SponsorFAQ = () => (
    <ContentSection backgroundColor={Colors.DARK_BLUE}>
        <Type size="h2" bold>
            Frequently Asked Questions
        </Type>
        <Question question={"What is Cornhacks?"}>
            CornHacks is a 24-hour long programming competition focused on the
            technology industry. The event will be held from 10:00 a.m. on
            01/16/21 until 2:00 p.m. on 01/17/21. 150+ undergraduate students
            will come to explore, learn new things, and build cool projects for
            part of a weekend. The event is free and inclusive to students of
            all backgrounds and abilities. We will be working with Major League
            Hacking for this event.
        </Question>
        <Question question={"Why does CornHacks need sponsors?"}>
            CornHacks is primarily funded by sponsors. Our sponsors help us
            provide meals for all of the students during the event, as well as
            buying prizes for the best hacks. Sponsors also allow us to provide
            monetary reimbursement for students traveling from other schools to
            attend our hackathon. Sponsors can help students by giving tech
            talks during the event, participating as mentors for hackers, or
            networking with participants.
        </Question>
        <Question question={"Can sponsors give their own prizes?"}>
            Yes! If you choose to provide a custom prize, you get to be the
            judge and decide which hack receives it. Alternatively, we can also
            judge if you’d prefer.
        </Question>
        <Question question={"What do mentors do?"}>
            Mentors are the lifeline for hackers. Most people are working with
            topics or tools that they’ve never touched before, so mentors can
            help with sticky situations, and keep teams moving to create amazing
            projects. Mentors are also your most direct interaction with event
            attendees. They’re great opportunities to talk about your sponsor
            prize, event, or API. We’ve heard countless stories of people
            getting help right as they’re about to quit, and are then helped by
            a timely mentor who makes a real positive impression in the hacker’s
            weekend. Those are the moments that stick around after CornHacks is
            over.
        </Question>
        <Question question={"Do mentors need to stay the whole time?"}>
            Nope! Mentors can spend as much or as little time as they’d like at
            the event, but prime time for mentors is Saturday from 11 AM through
            5 PM as people are exploring their project ideas.
        </Question>
        <Question question={"How long should sponsors be at their booth?"}>
            There’s no set schedule for when recruiters or mentors have to be at
            their booth. We highly recommend having someone there when the event
            begins on Saturday morning. Having a presence on Saturday morning is
            important because that is when students are not busy hacking yet, so
            they will have time to talk with you about your company, any prizes
            you are offering, and ask you about job / internship opportunities.
            They are also starting to form their project ideas –– they will want
            to talk with you about how to win your prize!
        </Question>
        <Question question={"What are the benefits of a sponsor booth?"}>
            Having a booth means hackers will see you there! Participants will
            know where you are if they want to ask you any questions during the
            hackathon. Your booth also serves as your home-base during the event
            for any recruiters or mentors you choose to send.
        </Question>
        <Question
            question={
                "Can sponsors distribute recruiting materials without a booth?"
            }
        >
            We will have a general swag table where we will put any swag /
            recruiting materials you would like students to take at the event.
        </Question>
    </ContentSection>
);

export default SponsorFAQ;
